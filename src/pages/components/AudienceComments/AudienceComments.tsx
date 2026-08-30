import { Box, Carousel, For, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import { CommentCard } from "@/pages/components/AudienceComments/CommentCard.tsx"
import { AUDIENCE_COMMENTS } from "@/pages/components/AudienceComments/AudienceComments.config.ts"

export const AudienceComments = () => {
  const slidesPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 }) ?? 1

  return (
    <Box as="section" id="comments" bg="accent.solid" py={{ base: 14, md: 20 }} px={{ base: 0, md: 2 }}>
      <VStack maxW={{ base: "6xl", xl: "8xl" }} mx="auto" gap={{ base: 8, md: 10 }}>
        <Reveal>
          <SectionHeading
            title="תגובות הצופים"
            subtitle="ככה זה מרגיש לצאת מהמופע — בין צחוק גדול לדמעות של הזדהות."
          />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <LocaleProvider locale="he-IL">
            <Carousel.Root
              width="100%"
              slideCount={AUDIENCE_COMMENTS.length}
              slidesPerPage={slidesPerPage}
              slidesPerMove={1}
              spacing="24px"
              autoplay={{ delay: 3000 }}
              loop
              allowMouseDrag
            >
              <Carousel.ItemGroup alignItems="stretch" py={10}>
                <For each={AUDIENCE_COMMENTS}>
                  {(comment, i) => (
                    <Carousel.Item key={i} index={i} display="flex">
                      <CommentCard comment={comment} />
                    </Carousel.Item>
                  )}
                </For>
              </Carousel.ItemGroup>

              <Carousel.Control justifyContent="center" gap={4}>
                <Carousel.PrevTrigger aria-label="התגובה הקודמת" color="board.900" opacity={0.7} _hover={{ opacity: 1 }}>
                  <ChevronRight size={22} />
                </Carousel.PrevTrigger>

                <Carousel.Indicators bg="board.900/30" _current={{ bg: "board.900" }} />

                <Carousel.NextTrigger aria-label="התגובה הבאה" color="board.900" opacity={0.7} _hover={{ opacity: 1 }}>
                  <ChevronLeft size={22} />
                </Carousel.NextTrigger>
              </Carousel.Control>
            </Carousel.Root>
          </LocaleProvider>
        </Reveal>
      </VStack>
    </Box>
  )
}
