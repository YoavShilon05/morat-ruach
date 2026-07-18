import { useState } from "react"
import { Box, SimpleGrid, VStack, For, Button } from "@chakra-ui/react"
import { useBreakpointValue } from "@chakra-ui/react" // Or '@chakra-ui/react' responsive hook depending on version v2/v3
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import { VIDEOS } from "@/pages/content.ts"
import { VideoCard } from "@/pages/components/VideoGallery/VideoCard.tsx"
import {MOBILE_VIDEO_LIMIT} from "@/constants.ts";


export default function VideoGallery() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Returns true only on the base/mobile breakpoint
  const isMobile = useBreakpointValue({ base: true, sm: false })

  // Determine which videos to display based on device and toggle state
  const displayedVideos = isMobile && !isExpanded
    ? VIDEOS.slice(0, MOBILE_VIDEO_LIMIT)
    : VIDEOS

  const hasHiddenVideos = VIDEOS.length > MOBILE_VIDEO_LIMIT

  return (
    <Box as="section" id="videos" bg="board.900" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="6xl" mx="auto" gap={12}>
        <Reveal>
          <SectionHeading
            title="הקליפים שהפכו לויראליים"
            subtitle="מציאות מורכבת ועגומה, בצורה קלילה ומצחיקה - מנקודת המבט של מורים."
            onDark
          />
        </Reveal>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} width="100%">
          <For each={displayedVideos}>
            {(video, i) => (
              <Reveal key={video.href} delay={(i % 3) * 0.08}>
                <VideoCard index={i + 1} video={video} />
              </Reveal>
            )}
          </For>
        </SimpleGrid>

        {/* Render button only on mobile when there are more videos available */}
        {isMobile && hasHiddenVideos && (
          <Reveal>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              bg="accent.cta"
              color="text.onDark"
              size="md"
              mt={4}
            >
              {isExpanded ? "הצג פחות" : "הצג עוד קליפים"}
            </Button>
          </Reveal>
        )}
      </VStack>
    </Box>
  )
}