import {Box, Button, Heading, Text, VStack, HStack, Icon} from "@chakra-ui/react"
import {ChevronDown } from "lucide-react"
import heroImage from "@/assets/images/hero-cover.png"
import heroImageVertical from "@/assets/images/hero-cover-vertical.png"
import {chalkTexture} from "@/components/SectionHeading/SectionHeading.tsx";
import {whatsappLink} from "@/pages/content.ts";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react"

export default function Hero() {
  return (
    <Box position="relative" minH={{ base: "90vh", md: "100vh" }} overflow="hidden" bg="board.900" id="top">
      <Box
        position="absolute"
        inset={0}
        backgroundImage={{ base: `url(${heroImageVertical})`, sm: `url(${heroImage})` }}
        backgroundSize={{ base: "100% auto", sm: "cover" }}
        backgroundRepeat="no-repeat"
        backgroundPosition={{ base: "top center", sm: "center 20%" }}
        opacity={0.9}
      />
      <Box position="absolute" inset={0} bgGradient="to-t" gradientFrom="board.800" gradientVia={{base: "rgba(11,33,29,0.25)", sm: "rgba(11,33,29,0.55)"}} gradientTo={{base: "rgba(11,33,29,0.05)", sm: "rgba(11,33,29,0.15)"}} />
      <Box position="absolute" inset={0} {...chalkTexture} />

      <VStack
        position="relative"
        zIndex={1}
        minH={{ base: "85vh", md: "100vh" }}
        justify={{ base: "flex-end", sm: "center" }}
        align="center"
        pb={{ base: "60px", sm: 0 }}
        pt={{ base: "15vw", sm: 0 }}
        textAlign="center"
        px={6}
        gap={5}
      >
        <Heading
          as="h1"
          display={{ base: "none", sm: "block" }}
          fontFamily="heading"
          fontWeight="900"
          fontSize={{ base: "4xl", md: "6xl" }}
          mt={{base: 0, md: "35px"}}
          color="text.onDark"
          maxW="4xl"
          lineHeight="1.15"
        >
          מורת רוח
        </Heading>
        <Heading
          as="h4"
          mt={{base: 12, sm: 0}}
          mb={{ base: "auto", sm: 0 }}
          fontFamily="heading"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl" }}
          opacity={{base: 0.8, sm: 1}}
          color="text.onDark"
          maxW="2xl"
          lineHeight="1.15"
        >
          המופע שיעשה לכם בית ספר
        </Heading>
        <Text display={{ base: "none", sm: "block" }} fontFamily="body" fontSize={{ base: "md", md: "lg" }} color="text.onDark" opacity={0.9} maxW="2xl">
          75 דקות של צחוק בלתי פוסק, קצת דמעות, והמון "איזה כיף לדעת שכולם מרגישים כמונו".
        </Text>
        <HStack gap={4} pt={2} wrap="wrap" justify="center">
          <Button
            asChild
            size="lg"
            bg="accent.cta"
            color="text.onDark"
            _hover={{ bg: "ember.400" }}
            fontFamily="body"
            fontWeight="700"
          >
            <a href={whatsappLink("היי, נשמח לשמוע פרטים על הזמנת המופע!")} target="_blank" rel="noreferrer">
              <Icon as={WhatsappIcon} boxSize={10} />
              הזמינו אותנו אליכם
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" borderColor="text.onDark" color="text.onDark" _hover={{ bg: "whiteAlpha.100" }} fontFamily="body">
            <a href="#trailer">צפו בטעימה מהמופע</a>
          </Button>
        </HStack>
      </VStack>

      <Box
        position="absolute"
        bottom={{ base: 3, md: 100 }}
        left="50%"
        transform="translateX(-50%)"
        color="text.onDark"
        opacity={0.7}
        zIndex={1}
        css={{
          animation: "morat-bounce 1.8s ease-in-out infinite",
          "@keyframes morat-bounce": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(8px)" },
          },
        }}
      >
        <ChevronDown size={28} />
      </Box>
    </Box>
  )
}