import { Box, Carousel, For, HStack, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
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
            <Carousel.Root
              width="100%"
              slideCount={PODCAST_EPISODES.length}
              slidesPerPage={slidesPerPage}
              slidesPerMove={1}
              spacing="24px"
              loop
              allowMouseDrag
            >
              <HStack width="100%" gap={{ base: 0, md: 2 }}>
                <Carousel.PrevTrigger
                  aria-label="הפרק הקודם"
                  flexShrink={0}
                  color="text.onDark"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
                >
                  <ChevronRight size={32} />
                </Carousel.PrevTrigger>

                <Carousel.ItemGroup
                  alignItems="stretch"
                  py={6}
                  px={{ base: 6, md: 4 }}
                  scrollPaddingInline={{ base: 6, md: 4 }}
                  flex="1"
                  minW={0}
                >
                  <For each={PODCAST_EPISODES}>
                    {(video, i) => (
                      <Carousel.Item key={video.href} index={i} display="flex">
                        <VideoCard index={i + 1} video={video} />
                      </Carousel.Item>
                    )}
                  </For>
                </Carousel.ItemGroup>

                <Carousel.NextTrigger
                  aria-label="הפרק הבא"
                  flexShrink={0}
                  color="text.onDark"
                  opacity={0.7}
                  _hover={{ opacity: 1 }}
                >
                  <ChevronLeft size={32} />
                </Carousel.NextTrigger>
              </HStack>
            </Carousel.Root>
          </LocaleProvider>
        </Reveal>
      </VStack>
    </Box>
  )
}
