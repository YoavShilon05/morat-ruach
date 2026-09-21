import { Box, type BoxProps, HStack } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react"

export type InfiniteCarouselProps<T> = {
  items: T[]
  slidesPerPage: number
  renderItem: (item: T, index: number) => ReactNode
  getKey?: (item: T, index: number) => string | number
  /** Space between slides, in pixels. */
  gap?: number
  /** Milliseconds between automatic advances. Omit to disable autoplay. */
  autoplayDelay?: number
  arrowColor?: string
  prevLabel: string
  nextLabel: string
  paddingX?: BoxProps["px"]
  paddingY?: BoxProps["py"]
}

const isRtl = (el: HTMLElement) => getComputedStyle(el).direction === "rtl"
const getPos = (el: HTMLElement) => Math.abs(el.scrollLeft)
const setPos = (el: HTMLElement, pos: number) => {
  el.scrollLeft = isRtl(el) ? -pos : pos
}
const scrollByPos = (el: HTMLElement, delta: number, behavior: ScrollBehavior) => {
  el.scrollBy({ left: isRtl(el) ? -delta : delta, behavior })
}

export function InfiniteCarousel<T>({
  items,
  slidesPerPage,
  renderItem,
  getKey,
  gap = 24,
  autoplayDelay,
  arrowColor = "text.onDark",
  prevLabel,
  nextLabel,
  paddingX,
  paddingY,
}: InfiniteCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null)
  const hoverRef = useRef(false)
  const draggingRef = useRef(false)
  // Autoplay is a hint, not a ride: the first manual navigation ends it for good.
  const [autoplayStopped, setAutoplayStopped] = useState(false)
  const stopAutoplay = useCallback(() => setAutoplayStopped(true), [])
  const settleRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Enough copies that the visible window always sits inside the middle copy,
  // leaving a full copy of slack on either side to teleport into.
  const repeats = Math.max(3, Math.ceil(slidesPerPage / Math.max(items.length, 1)) + 3)

  /** Width of one slide plus its trailing gap, i.e. one "step". */
  const getStep = useCallback((el: HTMLElement) => {
    const slide = el.firstElementChild as HTMLElement | null
    return slide ? slide.offsetWidth + gap : 0
  }, [gap])

  /** Snap the scroll position back into the middle copy without any visible jump. */
  const recenter = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const copy = getStep(el) * items.length
    if (copy <= 0) return
    const pos = getPos(el)
    const target = copy + (((pos - copy) % copy) + copy) % copy
    if (Math.abs(target - pos) > 1) setPos(el, target)
  }, [getStep, items.length])

  const advance = useCallback((direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    recenter()
    scrollByPos(el, direction * getStep(el), "smooth")
  }, [getStep, recenter])

  // Start inside the middle copy once the slides have been laid out.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const copy = getStep(el) * items.length
    if (copy > 0) setPos(el, copy)
  }, [getStep, items.length, slidesPerPage])

  // Recenter only once scrolling has settled, so the teleport is never seen.
  // Snapping is also re-armed here rather than on pointer-up: turning
  // `scroll-snap-type` back on yanks the track to the nearest slide
  // immediately, which would make the release animation start somewhere other
  // than where the finger left off. By the time we get here the track is
  // already resting on a snap point, so arming it moves nothing.
  const settle = useCallback(() => {
    if (draggingRef.current) return
    recenter()
    const el = trackRef.current
    if (el) el.style.scrollSnapType = ""
  }, [recenter])

  const scheduleSettle = useCallback((delay: number) => {
    clearTimeout(settleRef.current)
    settleRef.current = setTimeout(settle, delay)
  }, [settle])

  const onScroll = useCallback(() => scheduleSettle(140), [scheduleSettle])

  useEffect(() => () => clearTimeout(settleRef.current), [])

  useEffect(() => {
    if (!autoplayDelay || autoplayStopped) return
    const id = setInterval(() => {
      if (!hoverRef.current && !draggingRef.current && !document.hidden) advance(1)
    }, autoplayDelay)
    return () => clearInterval(id)
  }, [advance, autoplayDelay, autoplayStopped])

  // Drag handling for both mouse and touch. Native panning is disabled on the
  // horizontal axis so a swipe can never free-scroll past a single item.
  const dragRef = useRef<{
    startX: number
    startY: number
    startPos: number
    step: number
    moved: boolean
  } | null>(null)

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return
    const el = trackRef.current
    if (!el) return
    recenter()
    // Cancel any in-flight smooth scroll so the drag starts from a stable position.
    el.scrollTo({ left: el.scrollLeft, behavior: "instant" })
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPos: el.scrollLeft,
      step: getStep(el),
      moved: false,
    }
    draggingRef.current = true
    el.style.scrollSnapType = "none"
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    const el = trackRef.current
    if (!drag || !el) return
    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    if (!drag.moved) {
      // A mostly-vertical gesture is the user scrolling the page, not the
      // carousel: let go of it entirely rather than hijacking the swipe.
      if (Math.abs(dy) > Math.abs(dx)) {
        dragRef.current = null
        draggingRef.current = false
        el.style.scrollSnapType = ""
        return
      }
      if (Math.abs(dx) < 5) return
      drag.moved = true
      stopAutoplay()
      el.setPointerCapture(e.pointerId)
    }
    // Never follow the pointer further than one slide in either direction.
    const clamped = Math.max(-drag.step, Math.min(drag.step, dx))
    el.scrollLeft = drag.startPos - clamped
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    const el = trackRef.current
    draggingRef.current = false
    if (!drag || !el) return
    dragRef.current = null
    if (!drag.moved) {
      // Never became a drag, so no scroll events are coming to settle us.
      settle()
      return
    }

    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId)
    // Swallow the click that would otherwise fire on the card under the pointer.
    el.addEventListener("click", (ev) => ev.stopPropagation(), { capture: true, once: true })

    // Commit to exactly one slide if dragged far enough, otherwise spring back.
    const dx = e.clientX - drag.startX
    const threshold = Math.min(60, drag.step / 4)
    const direction = Math.abs(dx) >= threshold ? Math.sign(dx) : 0
    el.scrollTo({ left: drag.startPos - direction * drag.step, behavior: "smooth" })
    // The scroll events from that animation keep pushing the settle out; this
    // is the fallback for when it has nowhere to travel and fires none.
    scheduleSettle(400)
  }

  const arrowStyles: BoxProps = {
    as: "button",
    flexShrink: 0,
    color: arrowColor,
    opacity: 0.7,
    cursor: "pointer",
    _hover: { opacity: 1 },
  }

  return (
    <HStack
      width="100%"
      gap={{ base: 0, md: 2 }}
      onMouseEnter={() => { hoverRef.current = true }}
      onMouseLeave={() => { hoverRef.current = false }}
      onFocusCapture={() => { hoverRef.current = true }}
      onBlurCapture={() => { hoverRef.current = false }}
    >
      <Box {...arrowStyles} aria-label={prevLabel} onClick={() => { stopAutoplay(); advance(-1) }}>
        <ChevronRight size={32} />
      </Box>

      <Box
        ref={trackRef}
        display="flex"
        flex="1"
        minW={0}
        gap={`${gap}px`}
        px={paddingX}
        py={paddingY}
        scrollPaddingInline={paddingX}
        overflowX="auto"
        overflowY="hidden"
        scrollSnapType="x mandatory"
        touchAction="pan-y"
        alignItems="stretch"
        css={{
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        onScroll={onScroll}
        onWheel={(e) => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stopAutoplay() }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {Array.from({ length: repeats }).flatMap((_, copy) =>
          items.map((item, i) => (
            <Box
              key={`${copy}-${getKey?.(item, i) ?? i}`}
              display="flex"
              flexShrink={0}
              scrollSnapAlign="start"
              width={`calc((100% - ${gap * (slidesPerPage - 1)}px) / ${slidesPerPage})`}
              aria-hidden={copy !== 1 || undefined}
            >
              {renderItem(item, i)}
            </Box>
          )),
        )}
      </Box>

      <Box {...arrowStyles} aria-label={nextLabel} onClick={() => { stopAutoplay(); advance(1) }}>
        <ChevronLeft size={32} />
      </Box>
    </HStack>
  )
}

export default InfiniteCarousel
