import { useEffect, useRef } from 'react'

export default function useInfiniteScroll({
  enabled,
  hasMore,
  isLoading = false,
  onLoadMore,
  threshold = 240,
}) {
  const tickingRef = useRef(false)

  useEffect(() => {
    if (!enabled) return undefined

    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true

      window.requestAnimationFrame(() => {
        const scrollPosition = window.innerHeight + window.scrollY
        const triggerPoint = document.documentElement.scrollHeight - threshold

        if (scrollPosition >= triggerPoint && hasMore && !isLoading) {
          onLoadMore()
        }

        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled, hasMore, isLoading, onLoadMore, threshold])
}
