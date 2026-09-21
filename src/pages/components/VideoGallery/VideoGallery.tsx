import { Box, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import InfiniteCarousel from "@/components/InfiniteCarousel/InfiniteCarousel.tsx"
import { CLIPS } from "@/pages/content.ts"
import { VideoCard } from "@/pages/components/VideoGallery/VideoCard.tsx"

export default function VideoGallery() {
  const slidesPerPage = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 5 }) ?? 1

  return (
    <Box as="section" id="videos" bg="board.900" py={{ base: 16, md: 24 }} px={{ base: 0, md: 2 }}>
      <VStack maxW="8xl" mx="auto" gap={{ base: 0, md: 12 }}>
        <Reveal>
          <SectionHeading
            title="הקליפים שלנו"
            onDark
          />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <LocaleProvider locale="he-IL">
            <InfiniteCarousel
              items={CLIPS}
              slidesPerPage={slidesPerPage}
              getKey={(video) => video.href}
              autoplayDelay={3000}
              paddingX={{ base: 6, md: 4 }}
              paddingY={6}
              prevLabel="הקליפ הקודם"
              nextLabel="הקליפ הבא"
              renderItem={(video, i) => <VideoCard index={i + 1} video={video} />}
            />
          </LocaleProvider>
        </Reveal>
      </VStack>
    </Box>
  )
}
