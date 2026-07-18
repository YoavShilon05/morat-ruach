import { Box, SimpleGrid, VStack, Text, Center } from "@chakra-ui/react"
import { Play } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";
import Reveal from "@/components/Reveal/Reveal.tsx";
import {VIDEO_LINKS} from "@/pages/content.ts";

export default function VideoGallery() {
  return (
    <Box as="section" id="videos" bg="board.900" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="6xl" mx="auto" gap={12}>
        <Reveal>
          <SectionHeading
            eyebrow="הקליפים"
            title="הקליפים שהפכו לוויראליים"
            subtitle="מציאות מורכבת ועגומה, בצורה קלילה ומצחיקה — מנקודת המבט של מורים."
            onDark
          />
        </Reveal>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} width="100%">
          {VIDEO_LINKS.map((href, i) => (
            <Reveal key={href} delay={(i % 3) * 0.08}>
              <VideoCard index={i + 1} href={href} />
            </Reveal>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

function VideoCard({ index, href }: { index: number; href: string }) {
  return (
    <Box
      as="a"
      rel="noreferrer"
      display="block"
      borderRadius="lg"
      overflow="hidden"
      bg="board.700"
      border="1px solid"
      borderColor="whiteAlpha.100"
      _hover={{ transform: "translateY(-6px)", boxShadow: "0 16px 30px rgba(0,0,0,0.35)" }}
      transition="all 0.3s ease"
    >
      <Center aspectRatio={16 / 9} bg="board.600" position="relative">
        <Center bg="whiteAlpha.200" borderRadius="full" boxSize="52px">
          <Play size={22} color="var(--chakra-colors-paper)" fill="var(--chakra-colors-paper)" />
        </Center>
      </Center>
      <Text fontFamily="body" color="text.onDark" py={3} px={4} fontSize="sm" opacity={0.85}>
        וידאו {href} — קליפ מס' {index}
      </Text>
    </Box>
  )
}