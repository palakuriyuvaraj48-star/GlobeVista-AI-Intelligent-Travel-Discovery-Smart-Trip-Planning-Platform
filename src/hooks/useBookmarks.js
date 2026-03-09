import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'travel_bookmarked_ids_v1'

function readBookmarks() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setBookmarks(readBookmarks())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
  }, [bookmarks])

  const bookmarkSet = useMemo(() => new Set(bookmarks), [bookmarks])

  const toggleBookmark = useCallback((id) => {
    setBookmarks((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }, [])

  const isBookmarked = useCallback((id) => bookmarkSet.has(id), [bookmarkSet])
  const clearBookmarks = useCallback(() => setBookmarks([]), [])

  return {
    bookmarks,
    bookmarkSet,
    bookmarkedCount: bookmarks.length,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
  }
}
