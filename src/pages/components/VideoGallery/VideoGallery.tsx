import { Box, Carousel, For, HStack, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import { CLIPS } from "@/pages/content.ts"
import { VideoCard } from "@/pages/components/VideoGallery/VideoCard.tsx"

export default function VideoGallery() {
  const slidesPerPage = useBreakpointValue({ base: 2, sm: 3, md: 4 }) ?? 1

  return (
    <Box as="section" id="videos" bg="board.900" py={{ base: 16, md: 24 }} px={{ base: 0, md: 2 }}>
      <VStack maxW="8xl" mx="auto" gap={{ base: 8, md: 12 }}>
        <Reveal>
          <SectionHeading
            title="הקליפים שלנו"
            onDark
          />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <LocaleProvider locale="he-IL">
            <Carousel.Root
              width="100%"
              slideCount={CLIPS.length}
              slidesPerPage={slidesPerPage}
              slidesPerMove={1}
              spacing="24px"
              autoplay={{ delay: 3000 }}
              loop
              allowMouseDrag
            >
              <HStack width="100%" gap={{ base: 0, md: 2 }}>
                <Carousel.PrevTrigger
                  aria-label="הקליפ הקודם"
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
                  <For each={CLIPS}>
                    {(video, i) => (
                      <Carousel.Item key={video.href} index={i} display="flex">
                        <VideoCard index={i + 1} video={video} />
                      </Carousel.Item>
                    )}
                  </For>
                </Carousel.ItemGroup>

                <Carousel.NextTrigger
                  aria-label="הקליפ הבא"
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
