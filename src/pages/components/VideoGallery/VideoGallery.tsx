import { Box, SimpleGrid, VStack, For } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import { VIDEOS } from "@/pages/content.ts"
import {VideoCard} from "@/pages/components/VideoGallery/VideoCard.tsx";

export default function VideoGallery() {
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
          <For each={VIDEOS}>
            {(video, i) => (
              <Reveal key={video.href} delay={(i % 3) * 0.08}>
                <VideoCard index={i + 1} video={video} />
              </Reveal>
            )}
          </For>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}