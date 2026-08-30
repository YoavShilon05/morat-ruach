import {Box, Button, HStack, Text, VStack, Separator, Icon} from "@chakra-ui/react"
import Reveal from "@/components/Reveal/Reveal.tsx";
import {SOCIAL_LINKS, whatsappLink} from "@/pages/content.ts";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react"
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TiktokIcon from "@/assets/icons/tiktok2.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";

export default function ContactFooter() {
  return (
    <Box as="footer" id="contact" bg="board.950" py={{ base: 14, md: 20 }} px={6}>
      <Reveal>
        <VStack maxW="2xl" mx="auto" gap={6} textAlign="center">
          <Text fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700" color="text.onDark">
            צרו קשר ומלאו נוכחות
          </Text>
          <Text fontFamily="body" color="text.onDark" opacity={0.8}>
            לקבלת פרטים והצעת מחיר על הזמנת המופע לאירוע פרטי, השאירו הודעה ← וטליה המפיקה שלנו תחזור אליכם.
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
            <a href={whatsappLink("היי, נשמח לקבל הצעת מחיר להזמנת המופע!")} target="_blank" rel="noreferrer">
              <Icon as={WhatsappIcon} boxSize={10} />
              שליחת הודעת ווטסאפ
            </a>
          </Button>

          <Separator borderColor="whiteAlpha.200" width="60%" />

          <VStack gap={3}>
            <Text fontFamily="body" fontSize="sm" color="text.onDark" opacity={0.6}>
              לעדכונים על הופעות וקליפים חדשים, עקבו אחרינו
            </Text>
            <HStack gap={4}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer">
                <Icon as={FacebookIcon} color="var(--chakra-colors-paper)" boxSize={10} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
                <Icon as={InstagramIcon} color="var(--chakra-colors-paper)" boxSize={10} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer">
                <Icon as={TiktokIcon} color="var(--chakra-colors-paper)" boxSize={10} />
              </a>
            </HStack>
          </VStack>

          <Text fontFamily="body" fontSize="xs" color="text.onDark" opacity={0.4} pt={4}>
            © {new Date().getFullYear()} מורת רוח. כל הזכויות שמורות.
          </Text>
        </VStack>
      </Reveal>
    </Box>
  )
}