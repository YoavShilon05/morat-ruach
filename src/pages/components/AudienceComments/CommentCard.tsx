import { Card, Text, VStack, useBreakpointValue } from "@chakra-ui/react"
import { useFitFontSize } from "@/hooks/useFitFontSize.ts"

// Bounds for the auto-fitted quote text, in px.
const FONT_RANGE = { base: { min: 14, max: 22 }, md: { min: 15, max: 26 } }

export function CommentCard({ comment }: { comment: string }) {
  const { min, max } = useBreakpointValue(FONT_RANGE) ?? FONT_RANGE.base
  const { boxRef, textRef, fontSize } = useFitFontSize<HTMLDivElement, HTMLParagraphElement>(
    comment,
    min,
    max
  )

  return (
    <Card.Root
      variant="elevated"
      bg="paper"
      borderRadius="xl"
      height={{ base: "300px", md: "330px" }}
      m={{ base: 10, md: 0 }}
      width="100%"
      boxShadow="0 12px 30px rgba(11,33,29,0.18)"
    >
      <Card.Body p={{ base: 5, md: 6 }} height="100%" overflow="hidden">
        <VStack ref={boxRef} align="start" justify="center" gap={4} height="100%" overflow="hidden">
          <Text ref={textRef} fontFamily="body" color="text.onLight" fontSize={`${fontSize}px`} lineHeight="1.6">
            {comment}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
