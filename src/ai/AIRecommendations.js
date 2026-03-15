const recommendations = {
  'Adventure Seeker': [
    'Manali',
    'Patagonia',
    'Nepal',
  ],
  'Food Explorer': [
    'Bangkok',
    'Tokyo',
    'Delhi',
  ],
  'Luxury Traveler': [
    'Dubai',
    'Paris',
    'Maldives',
  ],
  'Budget Traveler': [
    'Goa',
    'Hanoi',
    'Istanbul',
  ],
  'Nightlife Explorer': [
    'Las Vegas',
    'Bangkok',
    'Barcelona',
  ],
}

const destinationMeta = {
  Bali: {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
    description: 'Tropical beaches, temples, and vibrant nightlife.',
  },
  Manali: {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    description: 'Snowy adventures and cozy mountain retreats.',
  },
  Paris: {
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
    description: 'Iconic landmarks, art districts, and romance.',
  },
  Bangkok: {
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200',
    description: 'Food trails, floating markets, and nightlife.',
  },
  Tokyo: {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200',
    description: 'Futuristic city meets timeless tradition.',
  },
  Dubai: {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=1200',
    description: 'Luxury skyline stays and desert adventures.',
  },
  Maldives: {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    description: 'Overwater villas and serene ocean views.',
  },
  Goa: {
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200',
    description: 'Beach clubs, surf vibes, and coastal escapes.',
  },
  Patagonia: {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    description: 'Glacial landscapes and rugged adventures.',
  },
  Nepal: {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    description: 'Himalayan trails and cultural heritage.',
  },
  Hanoi: {
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200',
    description: 'Historic streets with modern food scenes.',
  },
  Istanbul: {
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=1200',
    description: 'Bazaars, heritage mosques, and sea views.',
  },
  'Las Vegas': {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    description: 'Electric nightlife and entertainment districts.',
  },
  Barcelona: {
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200',
    description: 'Art, beaches, and late-night energy.',
  },
}

export function getRecommendedDestinations(personality = 'Adventure Seeker') {
  const picks = recommendations[personality] || recommendations['Adventure Seeker']
  return picks.map((name) => ({
    name,
    ...(destinationMeta[name] || {
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200',
      description: 'A curated destination pick from GlobeVista AI.',
    }),
  }))
}

export default {
  getRecommendedDestinations,
}
