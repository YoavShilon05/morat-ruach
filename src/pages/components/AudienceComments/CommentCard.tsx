import { Card, Text, VStack } from "@chakra-ui/react"
import {
  DEFAULT_COMMENT_FONT_SIZE,
  type AudienceComment,
} from "@/pages/components/AudienceComments/AudienceComments.config.ts"

export function CommentCard({ comment }: { comment: AudienceComment }) {
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
        <VStack align="start" justify="center" gap={4} height="100%" overflow="hidden">
          <Text
            fontFamily="body"
            color="text.onLight"
            fontSize={comment.fontSize ?? DEFAULT_COMMENT_FONT_SIZE}
            lineHeight="1.6"
            whiteSpace="pre-line"
          >
            {comment.text}
          </Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  )
}
