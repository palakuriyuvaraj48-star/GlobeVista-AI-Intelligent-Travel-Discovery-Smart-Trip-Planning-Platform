const fallbackActivities = [
  'Arrival and hotel check-in',
  'Visit attractions and museums',
  'Food tour and local restaurants',
  'Events and nightlife',
  'Shopping and departure',
]

export function generateTrip(destination = 'your destination', days = 5, style = 'Relax') {
  const totalDays = Math.max(1, Number(days) || 1)
  const plan = []
  for (let day = 1; day <= totalDays; day += 1) {
    const activity = fallbackActivities[(day - 1) % fallbackActivities.length]
    plan.push({
      day,
      activity: `${activity} in ${destination} (${style})`,
    })
  }
  return plan
}

export default {
  generateTrip,
}
