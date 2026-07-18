import { Box, Center, VStack } from "@chakra-ui/react"
import { Play } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";
import Reveal from "@/components/Reveal/Reveal.tsx";

export default function TrailerSection() {
  return (
    <Box as="section" id="trailer" bg="board.800" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="4xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading eyebrow="טעימה קטנה" title="הטריילר של המופע" onDark />
        </Reveal>
        <Reveal delay={0.1} width="100%">
          <Center
            as="button"
            w="100%"
            aspectRatio={16 / 9}
            borderRadius="xl"
            bg="board.700"
            border="2px dashed"
            borderColor="board.400"
            _hover={{ bg: "board.600", transform: "scale(1.01)" }}
            transition="all 0.3s ease"
            flexDirection="column"
            gap={3}
          >
            <Center bg="accent.solid" borderRadius="full" boxSize="72px">
              <Play size={28} color="var(--chakra-colors-board-900)" fill="var(--chakra-colors-board-900)" />
            </Center>
            <Box fontFamily="body" color="text.onDark" opacity={0.75}>
              וידאו טריילר — יתווסף בהמשך
            </Box>
          </Center>
        </Reveal>
      </VStack>
    </Box>
  )
}