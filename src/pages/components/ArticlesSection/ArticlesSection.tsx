import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Newspaper } from "lucide-react"
import {PRESS_MENTIONS} from "@/pages/content.ts";
import Reveal from "@/components/Reveal/Reveal.tsx";
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";

// Kept intentionally simple — client mentioned they're still deciding
// how much detail this section needs. Easy to expand into full cards later.
export default function ArticlesSection() {
  return (
    <Box as="section" id="press" bg="bg.surface" py={{ base: 14, md: 20 }} px={6}>
      <VStack maxW="5xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading eyebrow="בתקשורת" title="כתבו עלינו" />
        </Reveal>

        <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} width="100%">
          {PRESS_MENTIONS.map((p, i) => (
            <Reveal key={p.outlet} delay={i * 0.06}>
              <VStack
                as="a"
                href={p.href}
                target="_blank"
                rel="noreferrer"
                bg="white"
                borderRadius="lg"
                py={6}
                gap={2}
                boxShadow="sm"
                _hover={{ boxShadow: "md", transform: "translateY(-3px)" }}
                transition="all 0.25s ease"
              >
                <Newspaper size={20} color="var(--chakra-colors-board-500)" />
                <Text fontFamily="body" fontSize="sm" fontWeight="600" color="text.onLight">
                  {p.outlet}
                </Text>
              </VStack>
            </Reveal>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}