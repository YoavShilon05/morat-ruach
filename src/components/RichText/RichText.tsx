import Markdown, { type Components } from "react-markdown"
import remarkBreaks from "remark-breaks"
import { Box, Link, List, Text } from "@chakra-ui/react"

// Renders Markdown copy from content.ts, so text edits stay in one place.
// Supported: paragraphs, [text](url) links, bold/italic, and ordered/unordered lists.
// Raw HTML is not rendered (react-markdown default), so client copy can't break the page.
const components: Components = {
  p: ({ children }) => (
    <Text _notLast={{ mb: 3 }}>{children}</Text>
  ),

  a: ({ href, children }) => {
    const isSection = href?.startsWith("#")

    return (
      <Link
        href={href}
        target={isSection ? undefined : "_blank"}
        rel={isSection ? undefined : "noreferrer"}
        variant="underline"
        color="accent.emphasis"
        fontWeight="600"
        textUnderlineOffset="3px"
        _hover={{ color: "accent.cta" }}
      >
        {children}
      </Link>
    )
  },

  ul: ({ children }) => (
    <List.Root ps="1.25em" _notLast={{ mb: 3 }}>
      {children}
    </List.Root>
  ),

  ol: ({ children }) => (
    <List.Root as="ol" listStyleType="decimal" ps="1.25em" _notLast={{ mb: 3 }}>
      {children}
    </List.Root>
  ),

  li: ({ children }) => <List.Item>{children}</List.Item>,

  strong: ({ children }) => (
    <Box as="strong" fontWeight="700">
      {children}
    </Box>
  ),
}

export default function RichText({ children }: { children: string }) {
  return (
    <Markdown remarkPlugins={[remarkBreaks]} components={components}>
      {children}
    </Markdown>
  )
}
