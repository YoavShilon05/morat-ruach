import { Box, Button, VStack, Text } from "@chakra-ui/react"
import { CalendarDays } from "lucide-react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx";
import Reveal from "@/components/Reveal/Reveal.tsx";
import {SCHEDULE_LINK} from "@/pages/content.ts";
import {useScrapeDates} from "@/hooks/useScrapeDates.ts";
import {EventsList} from "@/pages/components/ShowSchedule/EventsList.tsx";

export default function ShowSchedule() {

  useScrapeDates()

  return (
    <Box as="section" id="schedule" bg="board.800" py={{ base: 16, md: 24 }} px={6}>
      <Reveal>
        <VStack maxW="3xl" mx="auto" gap={6} textAlign="center">
          <SectionHeading title="לוח ההופעות שלנו" onDark />
          <Text fontFamily="body" color="text.onDark" opacity={0.85}>
            רוצים לבוא להתרשם בעצמכם לפני שמזמינים? הצטרפו לאחת ההופעות הפתוחות שלנו.
          </Text>
          <EventsList />
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
              לצפייה בלוח ההופעות
            </a>
          </Button>
        </VStack>
      </Reveal>
    </Box>
  )
}