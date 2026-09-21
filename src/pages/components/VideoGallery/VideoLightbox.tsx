import { useEffect } from "react"
import { createPortal } from "react-dom"
import { AspectRatio, Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { X } from "lucide-react"

export type VideoLightboxProps = {
  videoId: string
  title: string
  onClose: () => void
}

/**
 * Plays a clip in a full-viewport overlay. The cards themselves are far too
 * small on a phone for YouTube's own controls to be usable inside them, so
 * playback always happens here, at the largest 16:9 box the screen allows.
 */
export function VideoLightbox({ videoId, title, onClose }: VideoLightboxProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKeyDown)
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = overflow
    }
  }, [onClose])

  return createPortal(
    <Flex
      position="fixed"
      inset={0}
      zIndex={100}
      bg="blackAlpha.800"
      css={{ backdropFilter: "blur(6px)" }}
      direction="column"
      align="center"
      justify="center"
      px={{ base: 3, md: 10 }}
      py={{ base: 4, md: 10 }}
      gap={3}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <Flex width="100%" maxW="5xl" justify="flex-start">
        <IconButton
          aria-label="סגירת הסרטון"
          variant="ghost"
          color="text.onDark"
          size="lg"
          onClick={onClose}
        >
          <X size={24} />
        </IconButton>
      </Flex>

      <Box
        width="100%"
        maxW="5xl"
        // The overlay closes on tap, but the player must keep its own taps.
        onClick={(e) => e.stopPropagation()}
      >
        <AspectRatio ratio={16 / 9} width="100%" bg="black" borderRadius="md" overflow="hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 0, width: "100%", height: "100%" }}
          />
        </AspectRatio>

        <Text fontFamily="body" color="text.onDark" fontSize="sm" opacity={0.85} mt={3} textAlign="center">
          {title}
        </Text>
      </Box>
    </Flex>,
    document.body,
  )
}

export default VideoLightbox
