import { useMemo } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function usePagination({
  totalItems,
  page,
  limit,
  onPageChange,
  onLimitChange,
  siblingCount = 1,
}) {
  const totalPages = useMemo(() => Math.max(1, Math.ceil(totalItems / limit)), [totalItems, limit])

  const safePage = useMemo(() => clamp(page, 1, totalPages), [page, totalPages])
  const startIndex = useMemo(() => (safePage - 1) * limit, [safePage, limit])
  const endIndex = useMemo(() => startIndex + limit, [startIndex, limit])

  const pageNumbers = useMemo(() => {
    const pages = []
    const left = Math.max(1, safePage - siblingCount)
    const right = Math.min(totalPages, safePage + siblingCount)

    for (let index = left; index <= right; index += 1) {
      pages.push(index)
    }
    if (!pages.includes(1)) pages.unshift(1)
    if (!pages.includes(totalPages)) pages.push(totalPages)
    return [...new Set(pages)]
  }, [safePage, siblingCount, totalPages])

  const setPage = (nextPage) => onPageChange(clamp(nextPage, 1, totalPages))
  const setLimit = (nextLimit) => onLimitChange(Number(nextLimit))

  return {
    totalPages,
    pageNumbers,
    safePage,
    startIndex,
    endIndex,
    setPage,
    setLimit,
    hasNextPage: safePage < totalPages,
    hasPrevPage: safePage > 1,
  }
}
