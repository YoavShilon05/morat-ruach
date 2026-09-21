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
        maxW="8xl"
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

      {/* Mobile side drawer */}
      <Box
        display={{ base: "block", lg: "none" }}
        position="fixed"
        inset={0}
        zIndex={60}
        bg="blackAlpha.600"
        opacity={open ? 1 : 0}
        pointerEvents={open ? "auto" : "none"}
        transition="opacity 0.25s ease"
        onClick={() => setOpen(false)}
      />
      <Flex
        dir="rtl"
        display={{ base: "flex", lg: "none" }}
        direction="column"
        position="fixed"
        top={0}
        right={0}
        h="100dvh"
        w="min(64vw, 260px)"
        zIndex={70}
        bg="board.900"
        borderLeft="1px solid"
        borderColor="whiteAlpha.100"
        boxShadow="dark-lg"
        transform={open ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.3s ease"
        px={6}
        py={5}
        gap={6}
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="סגירת תפריט"
            variant="ghost"
            color="text.onDark"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </IconButton>
        </Flex>

        <Flex direction="column" gap={5} align="flex-start" textAlign="start">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontFamily="body"
              fontSize="lg"
              color="text.onDark"
              opacity={0.9}
              _hover={{ opacity: 1, color: "accent.solid" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        <Box mt="auto" pt={4} borderTop="1px solid" borderColor="whiteAlpha.100">
          <SocialIcons />
        </Box>
      </Flex>
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