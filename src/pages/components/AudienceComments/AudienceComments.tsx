import { Box, LocaleProvider, VStack, useBreakpointValue } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import InfiniteCarousel from "@/components/InfiniteCarousel/InfiniteCarousel.tsx"
import { CommentCard } from "@/pages/components/AudienceComments/CommentCard.tsx"
import { AUDIENCE_COMMENTS } from "@/pages/components/AudienceComments/AudienceComments.config.ts"

export const AudienceComments = () => {
  const slidesPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 }) ?? 1

  return (
    <Box as="section" id="comments" bg="accent.solid" py={{ base: 14, md: 20 }} px={{ base: 0, md: 2 }}>
      <VStack maxW={{ base: "6xl", xl: "8xl" }} mx="auto" gap={{ base: 0, md: 10 }}>
        <Reveal>
          <SectionHeading
            title="תגובות הצופים"
          />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <LocaleProvider locale="he-IL">
            <InfiniteCarousel
              items={AUDIENCE_COMMENTS}
              slidesPerPage={slidesPerPage}
              autoplayDelay={3000}
              arrowColor="board.900"
              paddingY={{ base: 0, sm: 4 }}
              prevLabel="התגובה הקודמת"
              nextLabel="התגובה הבאה"
              renderItem={(comment) => <CommentCard comment={comment} />}
            />
          </LocaleProvider>
        </Reveal>
      </VStack>
    </Box>
  )
}
