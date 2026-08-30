import {Box, Flex, HStack, Link, Image, IconButton, Icon} from "@chakra-ui/react"
import { useState } from "react"
import {Menu, X} from "lucide-react"
import {NAV_LINKS, SOCIAL_LINKS} from "@/pages/content.ts";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import TiktokIcon from "@/assets/icons/tiktok2.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import Logo from "@/assets/logos/logo.png"

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
        h="80px"
        align="center"
        justify="space-between"
      >
        <Link
          href="#top"
          h="100%"
          display="flex"
          alignItems="center"
        >
          <Image
            src={Logo}
            maxH="100%"
            w="auto"
            objectFit="contain"
          />
        </Link>

        <Box display={{ base: "none", lg: "block" }}>
          <HStack gap={6}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontFamily="body"
                fontSize="md"
                color="text.onDark"
                opacity={0.85}
                _hover={{ opacity: 1, color: "accent.solid" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Box>

        <HStack gap={3}>
          <Box display={{ base: "none", lg: "block" }}>
            <SocialIcons />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="פתיחת תפריט"
              variant="ghost"
              color="text.onDark"
              size="lg"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
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
    <HStack gap={4} color="text.onDark">
      <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer">
        <Icon as={FacebookIcon} boxSize={7} />
      </a>
      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">
        <Icon as={InstagramIcon} boxSize={7} />
      </a>
      <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer">
        <Icon as={TiktokIcon} boxSize={7} />
      </a>
    </HStack>
  )
}