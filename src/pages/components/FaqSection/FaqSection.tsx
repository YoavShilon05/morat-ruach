import { Box, VStack, Accordion, For } from "@chakra-ui/react"
import SectionHeading from "@/components/SectionHeading/SectionHeading.tsx"
import Reveal from "@/components/Reveal/Reveal.tsx"
import { FAQ_ITEMS } from "@/pages/content.ts"

export default function FAQSection() {
  return (
    <Box as="section" id="faq" bg="bg.surface" py={{ base: 16, md: 24 }} px={6}>
      <VStack maxW="3xl" mx="auto" gap={10}>
        <Reveal>
          <SectionHeading eyebrow="שאלות ותשובות" title="שאלות שאתם בטח שואלים" />
        </Reveal>

        <Accordion.Root dir="rtl" variant="enclosed" multiple width="100%" as={VStack} gap={3} border="none">
          <For each={FAQ_ITEMS}>
            {(item, i) => (
              <Reveal key={item.q} delay={i * 0.04} width="100%" border="1px solid" borderColor="blackAlpha.100">
                <Accordion.Item value={`faq-${i}`} bg="white">
                  <Accordion.ItemTrigger
                    dir="rtl"
                    py={4}
                    textAlign="start"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box fontFamily="heading" fontWeight="700" color="text.onLight">
                      {item.q}
                    </Box>
                    <Accordion.ItemIndicator color="board.500" />
                  </Accordion.ItemTrigger>

                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      dir="rtl"
                      fontFamily="body"
                      color="text.onLight"
                      opacity={0.8}
                      lineHeight="1.8"
                    >
                      {item.a}
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              </Reveal>
            )}
          </For>
        </Accordion.Root>
      </VStack>
    </Box>
  )
}