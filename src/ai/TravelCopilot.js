export const travelMoods = ['Relax', 'Adventure', 'Food', 'Nature', 'Nightlife']

const smartSuggestionsByDestination = {
  Goa: ['Popular in Goa this week', 'Best sunset spot nearby', 'Top rated restaurant within 2km'],
  Bali: ['Popular in Bali this week', 'Best sunset spot nearby', 'Hidden jungle waterfall'],
  Paris: ['Popular in Paris this week', 'Top rated restaurant within 2km', 'Iconic city lights walk'],
  Tokyo: ['Popular in Tokyo this week', 'Best ramen spot nearby', 'Skyline viewing deck'],
}

export const getSmartSuggestions = (destination) => {
  if (!destination) return ['Popular destinations this week', 'Top rated restaurants nearby', 'Hidden gem attractions']
  return smartSuggestionsByDestination[destination] || [
    `Popular in ${destination} this week`,
    'Best sunset spot nearby',
    'Top rated restaurant within 2km',
  ]
}

export const getLiveRecommendation = (pathname) => {
  if (pathname.startsWith('/destination')) {
    return 'Would you like to see the top hotels here?'
  }
  if (pathname.startsWith('/hotels')) {
    return 'Want me to add this hotel to your trip plan?'
  }
  if (pathname.startsWith('/restaurants')) {
    return 'Here are restaurants nearby for tonight.'
  }
  if (pathname.startsWith('/places')) {
    return 'Looking for the best time to visit or a sample itinerary?'
  }
  if (pathname.startsWith('/events')) {
    return 'Want me to find events near your destination?'
  }
  if (pathname.startsWith('/travel-map')) {
    return 'Need help plotting a route between your stops?'
  }
  return 'Tell me what kind of trip you want and I will help plan it.'
}

export const buildTripItinerary = ({ destination, days }) => {
  const totalDays = Math.min(10, Math.max(1, Number(days) || 5))
  const base = [
    'Arrival and hotel check-in',
    'Explore major attractions',
    'Local food discovery',
    'Adventure activity',
    'Shopping and departure',
  ]

  return Array.from({ length: totalDays }, (_, index) => ({
    day: index + 1,
    title: base[index % base.length],
    destination,
  }))
}
