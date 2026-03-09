import { useCallback, useEffect, useMemo, useState } from 'react'

const CATEGORY_FILTER_GROUPS = {
  Hotel: [
    { key: 'priceRange', label: 'Price Range', options: ['Budget', 'Mid', 'Luxury'] },
    { key: 'rating', label: 'Rating', options: ['4+', '5'] },
  ],
  Restaurant: [
    {
      key: 'type',
      label: 'Food Type',
      options: ['South Indian', 'North Indian', 'Chinese', 'Fast Food', 'Continental'],
    },
    { key: 'rating', label: 'Rating', options: ['4+', '5'] },
  ],
  'Popular Place': [
    { key: 'domain', label: 'Domain', options: ['Temple', 'Mountain', 'Hill', 'Island', 'Beach'] },
    { key: 'rating', label: 'Rating', options: ['4+', '5'] },
  ],
  Transportation: [{ key: 'type', label: 'Type', options: ['Car', 'Flight', 'Bike', 'Train'] }],
  Rental: [{ key: 'type', label: 'Type', options: ['Car', 'Bus', 'Scooter', 'Bike'] }],
}

function serializeFilter(key, value) {
  return `${key}:${value}`
}

function parseFilter(token) {
  const [key, ...rest] = token.split(':')
  return { key, value: rest.join(':') }
}

function isRatingMatch(rating, selectedValue) {
  if (selectedValue === '5') return rating >= 5
  if (selectedValue === '4+') return rating >= 4
  return true
}

function getReviewCount(item) {
  return item?.reviews?.length || 0
}

export default function useAdvancedFilter(data) {
  const [activeCategory, setActiveCategory] = useState('Hotel')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [sortOption, setSortOption] = useState('rating_desc')
  const [filteredData, setFilteredData] = useState([])

  const activeFilterConfig = useMemo(
    () => CATEGORY_FILTER_GROUPS[activeCategory] || [],
    [activeCategory],
  )

  const groupedSelectedFilters = useMemo(() => {
    return selectedFilters.reduce((accumulator, token) => {
      const { key, value } = parseFilter(token)
      if (!accumulator[key]) accumulator[key] = []
      accumulator[key].push(value)
      return accumulator
    }, {})
  }, [selectedFilters])

  const applyCategorySpecificFilters = useCallback(
    (item) => {
      if (activeCategory === 'Hotel') {
        const selectedPriceRanges = groupedSelectedFilters.priceRange || []
        const selectedRatings = groupedSelectedFilters.rating || []
        const matchesPrice = selectedPriceRanges.length ? selectedPriceRanges.includes(item.priceRange) : true
        const matchesRating = selectedRatings.length
          ? selectedRatings.some((value) => isRatingMatch(item.rating, value))
          : true
        return matchesPrice && matchesRating
      }

      if (activeCategory === 'Restaurant') {
        const selectedTypes = groupedSelectedFilters.type || []
        const selectedRatings = groupedSelectedFilters.rating || []
        const matchesType = selectedTypes.length ? selectedTypes.includes(item.type) : true
        const matchesRating = selectedRatings.length
          ? selectedRatings.some((value) => isRatingMatch(item.rating, value))
          : true
        return matchesType && matchesRating
      }

      if (activeCategory === 'Popular Place') {
        const selectedDomains = groupedSelectedFilters.domain || []
        const selectedRatings = groupedSelectedFilters.rating || []
        const matchesDomain = selectedDomains.length ? selectedDomains.includes(item.domain) : true
        const matchesRating = selectedRatings.length
          ? selectedRatings.some((value) => isRatingMatch(item.rating, value))
          : true
        return matchesDomain && matchesRating
      }

      if (activeCategory === 'Transportation') {
        const selectedTypes = groupedSelectedFilters.type || []
        return selectedTypes.length ? selectedTypes.includes(item.type) : true
      }

      if (activeCategory === 'Rental') {
        const selectedTypes = groupedSelectedFilters.type || []
        return selectedTypes.length ? selectedTypes.includes(item.type) : true
      }

      return true
    },
    [activeCategory, groupedSelectedFilters],
  )

  useEffect(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const nextFilteredData = data
      .filter((item) => item.category === activeCategory)
      .filter((item) => {
        if (!normalizedSearch) return true
        return (
          item.title.toLowerCase().includes(normalizedSearch) ||
          item.location.toLowerCase().includes(normalizedSearch)
        )
      })
      .filter((item) => applyCategorySpecificFilters(item))
      .sort((a, b) => {
        if (sortOption === 'price_asc') {
          return (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER)
        }
        return b.rating - a.rating
      })

    setFilteredData(nextFilteredData)
  }, [activeCategory, applyCategorySpecificFilters, data, searchTerm, sortOption])

  const trending = useMemo(() => {
    return [...filteredData]
      .sort((a, b) => getReviewCount(b) - getReviewCount(a))
      .slice(0, 3)
  }, [filteredData])

  const recommendations = useMemo(() => {
    if (filteredData.length > 0) return filteredData.slice(0, 3)

    const categoryData = data.filter((item) => item.category === activeCategory)
    if (!categoryData.length) return []
    const highestRating = Math.max(...categoryData.map((item) => item.rating))
    return categoryData.filter((item) => item.rating === highestRating).slice(0, 3)
  }, [activeCategory, data, filteredData])

  const toggleFilter = useCallback((key, value) => {
    const token = serializeFilter(key, value)
    setSelectedFilters((previous) =>
      previous.includes(token) ? previous.filter((item) => item !== token) : [...previous, token],
    )
  }, [])

  const resetAll = useCallback(() => {
    setSearchTerm('')
    setSelectedFilters([])
    setSortOption('rating_desc')
  }, [])

  const switchCategory = useCallback((category) => {
    setActiveCategory(category)
    setSearchTerm('')
    setSelectedFilters([])
    setSortOption('rating_desc')
  }, [])

  const relatedMap = useMemo(() => {
    const map = {}
    for (const item of filteredData) {
      map[item.id] = filteredData
        .filter((candidate) => candidate.id !== item.id && candidate.domain === item.domain)
        .slice(0, 3)
    }
    return map
  }, [filteredData])

  const getRelatedSuggestions = useCallback((item) => relatedMap[item.id] || [], [relatedMap])

  return {
    activeCategory,
    searchTerm,
    selectedFilters,
    sortOption,
    filteredData,
    trending,
    recommendations,
    activeFilterConfig,
    groupedSelectedFilters,
    setSearchTerm,
    setSortOption,
    switchCategory,
    toggleFilter,
    resetAll,
    getRelatedSuggestions,
  }
}
