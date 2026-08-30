import { Card, Icon, Text, VStack } from "@chakra-ui/react"
import { Quote } from "lucide-react"

export function CommentCard({ comment }: { comment: string }) {
  return (
    <Card.Root
      variant="elevated"
      bg="paper"
      borderRadius="xl"
      height={{ base: "300px", md: "200px" }}
      width="100%"
      boxShadow="0 12px 30px rgba(11,33,29,0.18)"
    >
      <Card.Body p={{ base: 5, md: 6 }} height="100%" overflow="hidden">
        <Icon as={Quote} boxSize={7} color="accent.emphasis" transform="scaleX(-1)" />
        
        <VStack align="start" justify="center" gap={4} height="100%">
          <Text fontFamily="body" color="text.onLight" fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
            {comment}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
