import { Box, SimpleGrid, Text, VStack, Card, For, Link } from "@chakra-ui/react"
import { Newspaper } from "lucide-react"
import { PRESS_MENTIONS, VIDEOS } from "@/pages/content.ts"
import Reveal from "@/components/Reveal/Reveal.tsx"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import { VideoCard } from "@/pages/components/VideoGallery/VideoCard.tsx"

const INTERVIEWS = [
  { href: VIDEOS.interview2, title: "מהדורת חדשות 'כאן' - כתבה על הקליפ בנושא האלימות" },
  { href: VIDEOS.interview, title: "מהדורת חדשות 'כאן' - כתבה על המופע" },
]

export default function ArticlesSection() {
  return (
    <Box as="section" id="press" bg="bg.surface" py={{ base: 14, md: 20 }} px={6}>
      <VStack maxW="5xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading title="מורת רוח בתקשורת" />
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} width="100%">
          <For each={INTERVIEWS}>
            {(video, i) => (
              <Reveal key={video.href} delay={i * 0.1} width="100%">
                <VideoCard index={i + 1} video={video} />
              </Reveal>
            )}
          </For>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} width="100%">
          <For each={PRESS_MENTIONS}>
            {(p, i) => (
              <Reveal key={p.outlet} delay={i * 0.06}>
                <Card.Root
                  variant="elevated"
                  bg="white"
                  py={6}
                  as={VStack}
                  gap={2}
                  position="relative"
                  transition="all 0.25s ease"
                  _hover={{ boxShadow: "md", transform: "translateY(-3px)" }}
                >
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    position="absolute"
                    inset={0}
                    zIndex={1}
                  />

                  <Newspaper size={20} color="var(--chakra-colors-board-500)" />
                  <Text fontFamily="body" fontSize="sm" fontWeight="600" color="text.onLight">
                    {p.outlet}
                  </Text>
                </Card.Root>
              </Reveal>
            )}
          </For>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
