import { useEffect, useRef, useState } from "react"

/**
 * Returns a ref to attach to any element, and a boolean that flips to true
 * once the element scrolls into view. Used by <Reveal> to drive the
 * "float / bubble up" entrance animation across the page.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}