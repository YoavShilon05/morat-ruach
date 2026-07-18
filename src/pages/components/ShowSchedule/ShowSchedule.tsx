import { Box, Button, VStack, Text } from "@chakra-ui/react"
import { CalendarDays } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";
import Reveal from "@/components/Reveal/Reveal.tsx";
import {SCHEDULE_LINK} from "@/pages/content.ts";

export default function ShowSchedule() {
  return (
    <Box as="section" id="schedule" bg="board.800" py={{ base: 16, md: 24 }} px={6}>
      <Reveal>
        <VStack maxW="3xl" mx="auto" gap={6} textAlign="center">
          <SectionHeading eyebrow="הופעות פתוחות" title="לוח ההופעות" onDark />
          <Text fontFamily="body" color="text.onDark" opacity={0.85}>
            רוצים לבוא להתרשם בעצמכם לפני שמזמינים? הצטרפו לאחת ההופעות הפתוחות שלנו.
          </Text>
          <Button
            asChild
            size="lg"
            bg="accent.solid"
            color="board.900"
            _hover={{ bg: "chalk.300" }}
            fontFamily="body"
            fontWeight="700"
          >
            <a href={SCHEDULE_LINK} target="_blank" rel="noreferrer">
              <CalendarDays size={18} style={{ marginInlineStart: 8 }} />
              לצפייה בלוח ההופעות המלא
            </a>
          </Button>
        </VStack>
      </Reveal>
    </Box>
  )
}