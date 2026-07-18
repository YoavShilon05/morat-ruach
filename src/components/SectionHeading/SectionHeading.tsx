import { Box, Heading, Text, VStack } from "@chakra-ui/react"

// A subtle chalk-dust noise, reused on dark "board" sections.
export const chalkTexture = {
  backgroundImage:
    "radial-gradient(rgba(246,242,232,0.05) 1px, transparent 1px), radial-gradient(rgba(246,242,232,0.04) 1px, transparent 1px)",
  backgroundSize: "18px 18px, 26px 26px",
  backgroundPosition: "0 0, 9px 13px",
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  onDark?: boolean
  align?: "start" | "center"
}

/**
 * The page's signature element: a hand-drawn chalk squiggle under every
 * section title, standing in for the underline a teacher scrawls on a board.
 */
export default function SectionHeading({
                                         eyebrow,
                                         title,
                                         subtitle,
                                         onDark = false,
                                         align = "center",
                                       }: SectionHeadingProps) {
  const fg = onDark ? "text.onDark" : "text.onLight"
  return (
    <VStack gap={2} textAlign={align === "center" ? "center" : "start"} align={align === "center" ? "center" : "start"}>
      {eyebrow && (
        <Text fontFamily="body" fontSize="sm" letterSpacing="wide" color="accent.solid" fontWeight="600">
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} color={fg} fontWeight="700">
        {title}
      </Heading>
      <Box aria-hidden pointerEvents="none">
        <svg width="120" height="14" viewBox="0 0 120 14" fill="none">
          <path
            d="M2 9c10-8 20 6 30-1s20-7 30 0 20 6 30-1 20-7 24 1"
            stroke="var(--chakra-colors-accent-solid)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </Box>
      {subtitle && (
        <Text fontFamily="body" color={fg} opacity={0.85} maxW="2xl">
          {subtitle}
        </Text>
      )}
    </VStack>
  )
}