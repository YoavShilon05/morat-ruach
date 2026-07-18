import { Box, Flex, HStack, Link, Text, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import {Mic2, Menu, X, CircleFadingPlus} from "lucide-react"
import {NAV_LINKS, SOCIAL_LINKS} from "@/pages/content.ts";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={50}
      bg="board.900"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      css={{ backdropFilter: "blur(6px)" }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={3}
        align="center"
        justify="space-between"
      >
        {/* Logo placeholder — rightmost item in RTL flow */}
        <Text fontFamily="heading" fontSize="xl" fontWeight="800" color="text.onDark">
          מורת רוח{" "}
          <Text as="span" fontSize="xs" fontFamily="body" opacity={0.5}>
            (לוגו)
          </Text>
        </Text>

        <Box display={{ base: "none", lg: "block" }}>
          <HStack gap={6}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontFamily="body"
                fontSize="sm"
                color="text.onDark"
                opacity={0.85}
                _hover={{ opacity: 1, color: "accent.solid" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Box>

        <HStack gap={2}>
          <Box display={{ base: "none", lg: "block" }}>
            <SocialIcons />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="פתיחת תפריט"
              variant="ghost"
              color="text.onDark"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </IconButton>
          </Box>
        </HStack>
      </Flex>

      <Box display={{ base: open ? "block" : "none", lg: "none" }}>
        <Box px={4} pb={4} bg="board.900">
          <HStack wrap="wrap" gap={4} mb={3}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontFamily="body"
                fontSize="sm"
                color="text.onDark"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  )
}

function SocialIcons() {
  return (
    <HStack gap={1}>
      <IconButton asChild aria-label="פייסבוק" variant="ghost" color="text.onDark" size="sm">
        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer">
          <CircleFadingPlus size={18} />
        </a>
      </IconButton>
      <IconButton asChild aria-label="אינסטגרם" variant="ghost" color="text.onDark" size="sm">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
          <CircleFadingPlus size={18} />
        </a>
      </IconButton>
      <IconButton asChild aria-label="פודקאסט" variant="ghost" color="text.onDark" size="sm">
        <a href={SOCIAL_LINKS.podcast} target="_blank" rel="noreferrer">
          <Mic2 size={18} />
        </a>
      </IconButton>
    </HStack>
  )
}