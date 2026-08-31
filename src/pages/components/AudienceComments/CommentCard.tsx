import { Card, Text, VStack } from "@chakra-ui/react"

export function CommentCard({ comment }: { comment: string }) {
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
        <VStack align="start" justify="center" gap={4} height="100%">
          <Text fontFamily="body" color="text.onLight" fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
            {comment}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
