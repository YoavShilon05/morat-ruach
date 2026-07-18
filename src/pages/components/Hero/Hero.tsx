import { Box, Button, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import { MessageCircle, ChevronDown } from "lucide-react"
import heroImage from "@/assets/hero-cover.jpg"
import {chalkTexture} from "@/components/SectionHeading/SectionHeading.tsx";
import {whatsappLink} from "@/pages/content.ts";

export default function Hero() {
  return (
    <Box position="relative" minH={{ base: "90vh", md: "100vh" }} overflow="hidden" bg="board.900">
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${heroImage})`}
        backgroundSize="cover"
        backgroundPosition="center 20%"
        opacity={0.55}
      />
      <Box position="absolute" inset={0} bgGradient="to-t" gradientFrom="board.900" gradientVia="rgba(11,33,29,0.55)" gradientTo="rgba(11,33,29,0.15)" />
      <Box position="absolute" inset={0} {...chalkTexture} />

      <VStack
        position="relative"
        zIndex={1}
        minH={{ base: "90vh", md: "100vh" }}
        justify="center"
        align="center"
        textAlign="center"
        px={6}
        gap={5}
      >
        <Text fontFamily="body" color="accent.solid" letterSpacing="wide" fontWeight="600">
          שלושה מורים. מופע אחד. הרבה יותר מדי אמת
        </Text>
        <Heading
          as="h1"
          fontFamily="heading"
          fontWeight="900"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="text.onDark"
          maxW="4xl"
          lineHeight="1.15"
        >
          מורת רוח - המופע הסאטירי־מוזיקלי שכל חדר מורים חייב לראות
        </Heading>
        <Text fontFamily="body" fontSize={{ base: "md", md: "lg" }} color="text.onDark" opacity={0.9} maxW="2xl">
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
              <MessageCircle size={18} style={{ marginInlineStart: 8 }} />
              הזמינו אותנו לחדר המורים
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" borderColor="text.onDark" color="text.onDark" _hover={{ bg: "whiteAlpha.100" }} fontFamily="body">
            <a href="#trailer">צפו בטריילר</a>
          </Button>
        </HStack>
      </VStack>

      <Box
        position="absolute"
        bottom={6}
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