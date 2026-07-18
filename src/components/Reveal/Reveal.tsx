import { Box, type BoxProps } from "@chakra-ui/react"
import {useReveal} from "@/hooks/useReveal.ts";

interface RevealProps extends BoxProps {
  delay?: number
  children: React.ReactNode
}

/**
 * Wrap any section/card with <Reveal> to make it float & fade up into
 * place the first time it scrolls into the viewport. Respects
 * prefers-reduced-motion by skipping the transform.
 */
export default function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)"}
      transition={`opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`}
      css={{ "@media (prefers-reduced-motion: reduce)": { transform: "none", transition: "opacity 0.4s ease" } }}
      {...rest}
    >
      {children}
    </Box>
  )
}