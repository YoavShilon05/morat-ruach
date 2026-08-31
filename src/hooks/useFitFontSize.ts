import { useCallback, useLayoutEffect, useRef, useState } from "react"

/**
 * Returns two refs and a font size in px: the largest size between `min` and
 * `max` at which the text still fits inside the box without overflowing.
 * Short quotes that would leave the card half empty grow to fill it, long ones
 * shrink back down. Re-measures when the box resizes (breakpoints, drag) or
 * when the web fonts finish loading.
 */
export function useFitFontSize<B extends HTMLElement, T extends HTMLElement>(
  text: string,
  min = 14,
  max = 24
) {
  const boxRef = useRef<B | null>(null)
  const textRef = useRef<T | null>(null)
  const [fontSize, setFontSize] = useState(max)

  const measure = useCallback(() => {
    const box = boxRef.current
    const node = textRef.current
    if (!box || !node) return

    // Binary search the largest size that doesn't overflow the box.
    let low = min
    let high = max
    let best = min

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      node.style.fontSize = `${mid}px`

      if (node.scrollHeight <= box.clientHeight) {
        best = mid
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

    node.style.fontSize = `${best}px`
    setFontSize(best)
  }, [min, max])

  useLayoutEffect(() => {
    measure()

    const box = boxRef.current
    if (!box) return

    const observer = new ResizeObserver(measure)
    observer.observe(box)

    // Fallback fonts are narrower than the real ones, so an early measurement
    // can overshoot; redo it once the actual faces are ready.
    let cancelled = false
    void document.fonts?.ready.then(() => {
      if (!cancelled) measure()
    })

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [measure, text])

  return { boxRef, textRef, fontSize }
}
