import type {Video} from "@/types/video.ts";
import {useState} from "react";
import {AspectRatio, Button, Card} from "@chakra-ui/react";
import {Play} from "lucide-react";
import {VideoLightbox} from "@/pages/components/VideoGallery/VideoLightbox.tsx";

function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export function VideoCard({ video, index }: { video: Video, index: number }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeId(video.href)

  return (
    <Card.Root
      variant="elevated"
      bg="board.700"
      borderColor="whiteAlpha.100"
      width="100%"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-6px)", boxShadow: "0 16px 30px rgba(0,0,0,0.35)" }}
    >
      <AspectRatio ratio={16 / 9} width="100%" bg="board.600" position="relative">
        <Button
          onClick={() => setIsPlaying(true)}
          disabled={!videoId}
          aria-label={`נגן וידאו — קליפ מס' ${index}`}
          variant="ghost"
          width="100%"
          height="100%"
          p={0}
          backgroundImage={videoId ? `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)` : undefined}
          backgroundSize="cover"
          backgroundPosition="center"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bg: "blackAlpha.400",
            transition: "background 0.2s",
          }}
          _hover={{ _before: { bg: "blackAlpha.600" } }}
        >
          <Button
            as="span"
            position="relative"
            zIndex={1}
            borderRadius="full"
            boxSize={{ base: "44px", md: "52px" }}
            bg="whiteAlpha.300"
            backdropFilter="blur(4px)"
            _hover={{ transform: "scale(1.1)", bg: "whiteAlpha.400" }}
            transition="all 0.2s"
          >
            <Play size={22} fill="white" color="white" />
          </Button>
        </Button>
      </AspectRatio>

      <Card.Body py={3} px={4}>
        <Card.Title fontFamily="body" color="text.onDark" fontSize="sm" opacity={0.85} truncate>
          {video.title}
        </Card.Title>
      </Card.Body>

      {isPlaying && videoId && (
        <VideoLightbox
          videoId={videoId}
          title={video.title}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </Card.Root>
  )
}
