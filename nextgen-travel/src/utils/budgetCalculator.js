export function calculateBudget({ days, hotelCost, mealsPerDay, transport, activities }) {
  const totalHotel = days * hotelCost
  const totalMeals = days * mealsPerDay
  const totalTransport = days * transport
  const totalActivities = days * activities
  const total = totalHotel + totalMeals + totalTransport + totalActivities
  const daily = total / days

  return {
    totalHotel,
    totalMeals,
    totalTransport,
    totalActivities,
    total,
    daily,
    breakdown: [
      { label: 'Hotel', value: totalHotel, color: '#3b82f6' },
      { label: 'Meals', value: totalMeals, color: '#10b981' },
      { label: 'Transport', value: totalTransport, color: '#f59e0b' },
      { label: 'Activities', value: totalActivities, color: '#8b5cf6' },
    ],
  }
}
