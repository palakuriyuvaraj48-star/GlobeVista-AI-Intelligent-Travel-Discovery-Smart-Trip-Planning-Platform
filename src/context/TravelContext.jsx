import { createContext, useContext, useState, useEffect } from 'react'

const TravelContext = createContext()

export function TravelProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    destinations: [],
    bookings: [],
    savedItems: [],
    recentlyViewed: [],
    searchHistory: [],
    preferences: {
      language: 'en',
      currency: 'INR',
      travelStyle: '',
      interests: []
    }
  })

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('travelAppData')
    if (savedData) {
      setState(prev => ({ ...prev, ...JSON.parse(savedData) }))
    }
  }, [])

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('travelAppData', JSON.stringify(state))
  }, [state])

  const addToSavedItems = (item) => {
    setState(prev => ({
      ...prev,
      savedItems: prev.savedItems.find(i => i.id === item.id)
        ? prev.savedItems
        : [...prev.savedItems, { ...item, savedAt: new Date().toISOString() }]
    }))
  }

  const removeFromSavedItems = (itemId) => {
    setState(prev => ({
      ...prev,
      savedItems: prev.savedItems.filter(item => item.id !== itemId)
    }))
  }

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    }
    setState(prev => ({
      ...prev,
      bookings: [...prev.bookings, newBooking]
    }))
    return newBooking
  }

  const addToRecentlyViewed = (item) => {
    setState(prev => ({
      ...prev,
      recentlyViewed: [
        { ...item, viewedAt: new Date().toISOString() },
        ...prev.recentlyViewed.filter(i => i.id !== item.id)
      ].slice(0, 10) // Keep only last 10 items
    }))
  }

  const updatePreferences = (preferences) => {
    setState(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...preferences }
    }))
  }

  const searchDestinations = (query) => {
    setState(prev => ({
      ...prev,
      searchHistory: [
        { query, timestamp: new Date().toISOString() },
        ...prev.searchHistory.filter(s => s.query !== query)
      ].slice(0, 20) // Keep last 20 searches
    }))
  }

  const value = {
    ...state,
    addToSavedItems,
    removeFromSavedItems,
    addBooking,
    addToRecentlyViewed,
    updatePreferences,
    searchDestinations,
    isSaved: (itemId) => state.savedItems.some(item => item.id === itemId)
  }

  return (
    <TravelContext.Provider value={value}>
      {children}
    </TravelContext.Provider>
  )
}

export function useTravel() {
  const context = useContext(TravelContext)
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider')
  }
  return context
}

export default TravelContext
