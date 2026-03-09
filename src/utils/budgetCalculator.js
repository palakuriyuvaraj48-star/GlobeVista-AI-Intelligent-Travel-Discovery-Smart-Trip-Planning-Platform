const HOTEL_RATES = {
  budget: 55,
  standard: 110,
  luxury: 240,
}

const TRANSPORT_RATES = {
  flight: 320,
  train: 140,
  car: 180,
}

const DESTINATION_MULTIPLIERS = {
  bali: 1.15,
  dubai: 1.3,
  goa: 0.9,
  london: 1.4,
  paris: 1.35,
  singapore: 1.25,
  tokyo: 1.45,
}

const MEALS_PER_DAY = 35
const LOCAL_TRAVEL_PER_DAY = 18
const ACTIVITIES_PER_DAY = 45

export function calculateBudgetEstimate({
  destination = '',
  days = 1,
  travelers = 1,
  hotelType = 'standard',
  transportType = 'flight',
}) {
  const safeDays = Math.max(1, Number(days) || 1)
  const safeTravelers = Math.max(1, Number(travelers) || 1)
  const normalizedDestination = destination.trim().toLowerCase()
  const destinationMultiplier = DESTINATION_MULTIPLIERS[normalizedDestination] || 1
  const hotelRate = HOTEL_RATES[hotelType] || HOTEL_RATES.standard
  const transportRate = TRANSPORT_RATES[transportType] || TRANSPORT_RATES.flight

  const hotelCost = hotelRate * safeDays * safeTravelers * destinationMultiplier
  const transportCost = transportRate * safeTravelers * destinationMultiplier
  const mealsCost = MEALS_PER_DAY * safeDays * safeTravelers * destinationMultiplier
  const localTravelCost = LOCAL_TRAVEL_PER_DAY * safeDays * safeTravelers * destinationMultiplier
  const activitiesCost = ACTIVITIES_PER_DAY * safeDays * safeTravelers * destinationMultiplier
  const total = hotelCost + transportCost + mealsCost + localTravelCost + activitiesCost

  return {
    destinationLabel: normalizedDestination
      ? `${destination.trim()} x${destinationMultiplier.toFixed(2)}`
      : 'General estimate x1.00',
    days: safeDays,
    travelers: safeTravelers,
    total: Math.round(total),
    dailyAverage: Math.round(total / safeDays),
    breakdown: [
      {
        label: 'Stay',
        description: `${hotelType} hotel for the full trip`,
        amount: Math.round(hotelCost),
      },
      {
        label: 'Transport',
        description: `${transportType} fare and arrival mobility`,
        amount: Math.round(transportCost + localTravelCost),
      },
      {
        label: 'Meals',
        description: 'Daily food estimate for all travelers',
        amount: Math.round(mealsCost),
      },
      {
        label: 'Activities',
        description: 'Sightseeing and flexible daily spend',
        amount: Math.round(activitiesCost),
      },
    ],
  }
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}
