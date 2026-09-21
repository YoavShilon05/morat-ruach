import { Box, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import InfiniteCarousel from "@/components/InfiniteCarousel/InfiniteCarousel.tsx"
import { PODCAST_EPISODES } from "@/pages/content.ts"
import { VideoCard } from "@/pages/components/VideoGallery/VideoCard.tsx"

export default function PodcastSection() {
  const slidesPerPage = useBreakpointValue({ base: 1, sm: 2, md: 3 }) ?? 1

  return (
    <Box as="section" id="podcast" bg="board.900" py={{ base: 16, md: 24 }} px={{ base: 0, md: 2 }}>
      <VStack maxW="8xl" mx="auto" gap={{ base: 8, md: 12 }}>
        <Reveal>
          <SectionHeading
            title={'הפודקאסט "שעת שהייה"'}
            // subtitle="שיחות על מה שקורה בחדר המורים, מעבר לצלצול."
            onDark
          />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <LocaleProvider locale="he-IL">
            <InfiniteCarousel
              items={PODCAST_EPISODES}
              slidesPerPage={slidesPerPage}
              getKey={(video) => video.href}
              paddingX={{ base: 6, md: 4 }}
              paddingY={6}
              prevLabel="הפרק הקודם"
              nextLabel="הפרק הבא"
              autoplayDelay={3000}
              renderItem={(video, i) => <VideoCard index={i + 1} video={video} />}
            />
          </LocaleProvider>
        </Reveal>
      </VStack>
    </Box>
  )
}
