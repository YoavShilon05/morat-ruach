import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react"
import Reveal from "@/components/Reveal/Reveal.tsx";
import {whatsappLink} from "@/pages/content.ts";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react"
import { Icon } from "@chakra-ui/react"

export default function InviteCTA() {
  return (
    <Box as="section" bg="accent.solid" py={{ base: 14, md: 20 }} px={6}>
      <Reveal>
        <VStack maxW="3xl" mx="auto" gap={5} textAlign="center">
          <Heading fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} color="board.900">
            רוצים להזמין אותנו לחדר המורים שלכם?
          </Heading>
          <Text fontFamily="body" color="board.900" opacity={0.85} fontSize="lg">
            שלחו לנו הודעת ווטסאפ, והמפיקה שלנו תחזור אליכם עם כל הפרטים.
          </Text>
          <Button
            asChild
            size="lg"
            bg="board.900"
            color="paper"
            _hover={{ bg: "board.800" }}
            fontFamily="body"
            fontWeight="700"
          >
            <a href={whatsappLink("היי, נשמח לקבל פרטים על הזמנת המופע לחדר המורים שלנו!")} target="_blank" rel="noreferrer">
              <Icon as={WhatsappIcon} boxSize={10} />
              שליחת ווטסאפ למפיקה
            </a>
          </Button>
        </VStack>
      </Reveal>
    </Box>
  )
}