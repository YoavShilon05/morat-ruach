import { Box, Text, VStack, SimpleGrid, Center } from "@chakra-ui/react"
import Reveal from "@/components/Reveal/Reveal.tsx";
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";
import {ABOUT_TEXT, MEMBERS} from "@/pages/content.ts";

export default function AboutUs() {
  const paragraphs = ABOUT_TEXT.split("\n\n")

  return (
    <Box as="section" id="about" bg="bg.surface" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="4xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading eyebrow="מי אנחנו" title="שלושה מורים, במה אחת" />
        </Reveal>

        <VStack gap={4} align="start">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Text fontFamily="body" color="text.onLight" lineHeight="1.9" fontSize="md">
                {p}
              </Text>
            </Reveal>
          ))}
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={6} width="100%" pt={4}>
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <VStack
                bg="white"
                borderRadius="xl"
                p={6}
                gap={3}
                boxShadow="sm"
                _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Center boxSize="72px" borderRadius="full" bg="board.100" color="board.600" fontFamily="heading" fontSize="xl" fontWeight="700">
                  {m.name[0]}
                </Center>
                <Text fontFamily="heading" fontWeight="700" color="text.onLight">
                  {m.name}
                </Text>
                <Text fontFamily="body" fontSize="sm" color="text.onLight" opacity={0.7} textAlign="center">
                  {m.role}
                </Text>
              </VStack>
            </Reveal>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}