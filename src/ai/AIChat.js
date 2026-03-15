const cannedAnswers = [
  {
    match: 'goa',
    answer: 'Baga Beach, Fort Aguada, Dudhsagar Falls, and Goa night markets are must-see destinations.',
  },
  {
    match: 'bali',
    answer: 'For a 3-day Bali trip, explore Ubud temples, enjoy beach sunsets, visit local food markets, and relax at Seminyak Beach.',
  },
  {
    match: 'dubai',
    answer: 'Dubai highlights include the Marina skyline, desert safari, and Al Fahidi heritage district.',
  },
]

export function getResponse(question = '') {
  const lower = question.toLowerCase()
  const matched = cannedAnswers.find((item) => lower.includes(item.match))
  return matched
    ? matched.answer
    : 'Try focusing on a destination, dates, or budget and I will suggest a smart itinerary.'
}

export default {
  getResponse,
}
