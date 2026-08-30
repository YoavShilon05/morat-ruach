import { Box, VStack, Card, AspectRatio, chakra } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import trailerVideo from "@/assets/videos/trailer_web.mp4"
import trailerPoster from "@/assets/videos/trailer-poster.png"

export default function TrailerSection() {
  return (
    <Box as="section" id="trailer" bg="board.800" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="4xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading title="טעימה מהמופע" onDark />
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <Card.Root
            variant="elevated"
            bg="board.700"
            overflow="hidden"
            transition="all 0.3s ease"
          >
            <AspectRatio ratio={4 / 3} width="100%" bg="board.600">
              <chakra.video
                src={trailerVideo}
                poster={trailerPoster}
                controls
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </AspectRatio>
          </Card.Root>
        </Reveal>
      </VStack>
    </Box>
  )
}