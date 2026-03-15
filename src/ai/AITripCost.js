export function estimateTripCost(destination = 'Goa', days = 5, style = 'Relax') {
  const multiplier = {
    Relax: 1,
    Adventure: 1.2,
    Food: 1.1,
    Nightlife: 1.3,
    Nature: 1.05,
  }
  const factor = multiplier[style] || 1
  const baseHotel = 4000 * days * factor
  const baseFood = 1200 * days * factor
  const baseTransport = 800 * days
  const baseActivities = 600 * days * factor
  return {
    destination,
    hotel: Math.round(baseHotel),
    food: Math.round(baseFood),
    transport: Math.round(baseTransport),
    activities: Math.round(baseActivities),
    total: Math.round(baseHotel + baseFood + baseTransport + baseActivities),
  }
}

export default {
  estimateTripCost,
}
