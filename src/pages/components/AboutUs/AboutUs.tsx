import { Box, VStack, SimpleGrid, Card, Avatar, For, Text } from "@chakra-ui/react"
import Reveal from "@/components/Reveal/Reveal.tsx"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import { ABOUT_TEXT, MEMBERS } from "@/pages/content.ts"

export default function AboutUs() {
  const paragraphs = ABOUT_TEXT.split("\n\n")

  return (
    <Box as="section" id="about" bg="bg.surface" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="4xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading eyebrow="מי אנחנו" title="שלושה מורים, במה אחת" />
        </Reveal>

        {/* Global typography overrides passed directly to the container */}
        <VStack gap={4} align="start" fontFamily="body" color="text.onLight" lineHeight="1.9" fontSize="md">
          <For each={paragraphs}>
            {(p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Text>{p}</Text>
              </Reveal>
            )}
          </For>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={6} width="100%" pt={4}>
          <For each={MEMBERS}>
            {(m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                {/* variant="elevated" applies the white bg, border radius, and shadow implicitly */}
                <Card.Root
                  variant="elevated"
                  p={6}
                  gap={3}
                  as={VStack}
                  transition="all 0.3s ease"
                  _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
                >
                  <Card.Header>
                    {/* Native Avatar automatically handles fallback to initials */}
                    <Avatar.Root bg="board.300" size="lg" variant="solid" colorPalette="orange">
                      <Avatar.Fallback name={m.name[0]} />
                    </Avatar.Root>
                  </Card.Header>

                  <Card.Body as={VStack} px={0} gap={1} textAlign="center">
                    <Card.Title fontFamily="heading" color="text.onLight">
                      {m.name}
                    </Card.Title>
                    <Card.Description fontFamily="body" opacity={0.7} color="text.onLight">
                      {m.role}
                    </Card.Description>
                  </Card.Body>
                </Card.Root>
              </Reveal>
            )}
          </For>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}