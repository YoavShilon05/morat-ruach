import {VStack, Card, Text, Flex, Button, For, Link} from "@chakra-ui/react"
import { Calendar, Clock, MapPin } from "lucide-react"
import {useScrapeDates} from "@/hooks/useScrapeDates.ts";
import type {ShowEvent} from "@/types/show-event.ts";

export function EventCard({ event }: { event: ShowEvent }) {
  return (
    <Card.Root variant="elevated" width="100%" bg="white" overflow="hidden">
      <Card.Body p={5}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align={{ base: "stretch", sm: "center" }}
          gap={4}
        >
          {/* Event Details Group */}
          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 2, md: 6 }} flex="1">
            {/* Date & Time */}
            <Flex align="center" gap={2} minW="180px">
              <Calendar size={18} className="text-gray-500" />
              <Text fontFamily="heading" fontWeight="700" color="text.onLight">
                {event.date}
              </Text>
              <Text fontSize="sm" color="text.onLight" opacity={0.6} mx={1}>|</Text>
              <Clock size={16} className="text-gray-500" />
              <Text fontSize="sm" fontFamily="body" fontWeight="600" color="text.onLight">
                {event.hour}
              </Text>
            </Flex>

            {/* Location */}
            <Flex align="center" gap={2}>
              <MapPin size={18} className="text-gray-500" />
              <Text fontFamily="body" fontWeight="600" color="text.onLight">
                {event.location}
              </Text>
            </Flex>
          </Flex>

          {/* Action Link wrapper around the Button */}
          <Link href={event.link} target="_blank" rel="noreferrer" _hover={{ textDecoration: "none" }}>
            <Button bg="accent.cta" size="sm" px={6} width="100%">
              הזמנת כרטיסים
            </Button>
          </Link>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}


export function EventsList() {

  const events = useScrapeDates()

  return (
    <VStack gap={4} width="100%" maxW="3xl" mx="auto">
      <For each={events}>
        {(event, index) => (
          <EventCard key={`${event.location}-${index}`} event={event} />
        )}
      </For>
    </VStack>
  )
}