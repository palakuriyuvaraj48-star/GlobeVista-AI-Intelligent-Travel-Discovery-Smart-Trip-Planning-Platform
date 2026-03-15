const STORAGE_KEY = 'travelPersonality'

export const travelPersonalities = [
  'Adventure Seeker',
  'Food Explorer',
  'Luxury Traveler',
  'Budget Traveler',
  'Nightlife Explorer',
]

export function getTravelPersonality() {
  return localStorage.getItem(STORAGE_KEY)
}

export function setTravelPersonality(personality) {
  localStorage.setItem(STORAGE_KEY, personality)
}

export function clearTravelPersonality() {
  localStorage.removeItem(STORAGE_KEY)
}
