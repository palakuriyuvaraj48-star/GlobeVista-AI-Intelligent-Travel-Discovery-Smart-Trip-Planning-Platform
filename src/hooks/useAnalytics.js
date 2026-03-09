import { useCallback, useMemo } from 'react'

const DEFAULT_STORAGE_KEY = 'travel_analytics_v1'

function readEvents(storageKey) {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(storageKey)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function useAnalytics(storageKey = DEFAULT_STORAGE_KEY) {
  const trackEvent = useCallback(
    (eventType, payload = {}) => {
      if (typeof window === 'undefined') return
      const currentEvents = readEvents(storageKey)
      const nextEvents = [
        ...currentEvents,
        {
          eventType,
          payload,
          timestamp: new Date().toISOString(),
        },
      ].slice(-1000)

      localStorage.setItem(storageKey, JSON.stringify(nextEvents))
    },
    [storageKey],
  )

  const getEvents = useCallback(() => readEvents(storageKey), [storageKey])

  const clearEvents = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(storageKey)
  }, [storageKey])

  const eventCount = useMemo(() => getEvents().length, [getEvents])

  return {
    trackEvent,
    getEvents,
    clearEvents,
    eventCount,
  }
}
