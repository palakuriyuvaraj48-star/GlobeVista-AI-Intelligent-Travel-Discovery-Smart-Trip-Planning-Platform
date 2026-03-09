export const tripDetailsData = [
  {
    id: 'taj-exotica-resort-spa',
    title: 'Taj Exotica Resort & Spa',
    duration: '4 Days / 3 Nights',
    rating: 4.9,
    description: 'Beachfront luxury itinerary with leisure, local culture, and curated dining experiences.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900',
    ],
    itinerary: [
      {
        day: 'Day 01',
        activities: ['Resort check-in and welcome drink', 'Sunset walk on the beach', 'Live music dinner'],
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700',
      },
      {
        day: 'Day 02',
        activities: ['Morning yoga session', 'Goa heritage trail', 'Private seafood tasting'],
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700',
      },
      {
        day: 'Day 03',
        activities: ['Water sports experience', 'Poolside relaxation', 'Night market visit'],
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=700',
      },
    ],
  },
  {
    id: 'rambagh-palace',
    title: 'Rambagh Palace',
    duration: '3 Days / 2 Nights',
    rating: 4.9,
    description: 'Royal Jaipur journey with palace tours, local shopping, and evening cultural performance.',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900',
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=900',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900',
    ],
    itinerary: [
      {
        day: 'Day 01',
        activities: ['Palace check-in', 'High tea at the garden lounge', 'Traditional dinner'],
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700',
      },
      {
        day: 'Day 02',
        activities: ['Amber Fort excursion', 'City Palace guided tour', 'Handicraft market walk'],
        image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=700',
      },
      {
        day: 'Day 03',
        activities: ['Breakfast and spa session', 'Photowalk in old city lanes', 'Departure'],
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700',
      },
    ],
  },
  {
    id: 'four-seasons-resort-bali',
    title: 'Four Seasons Resort Bali',
    duration: '5 Days / 4 Nights',
    rating: 4.8,
    description: 'Ubud and coast blend featuring wellness, cultural immersion, and curated island adventures.',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900',
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=900',
    ],
    itinerary: [
      {
        day: 'Day 01',
        activities: ['Villa check-in', 'Balinese welcome ritual', 'Cliffside dinner'],
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=700',
      },
      {
        day: 'Day 02',
        activities: ['Rice terrace tour', 'Temple visit', 'Local cuisine workshop'],
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700',
      },
      {
        day: 'Day 03',
        activities: ['Island snorkel trip', 'Beach lounge time', 'Sunset cruise'],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=700',
      },
    ],
  },
]

const detailsByTitle = Object.fromEntries(
  tripDetailsData.map((trip) => [trip.title.toLowerCase(), trip])
)

export function buildTripDetails({ id, title, rating, description, image, location, category }) {
  const matched = detailsByTitle[String(title || '').toLowerCase()]
  if (matched) return matched

  return {
    id: id || String(title || 'trip').toLowerCase().replace(/\s+/g, '-'),
    title: title || 'Trip Plan',
    duration: '3 Days / 2 Nights',
    rating: rating || 'N/A',
    description:
      description ||
      `A curated ${category || 'travel'} plan for ${location || 'your selected destination'} with balanced activities and comfort.`,
    images: [image].filter(Boolean),
    itinerary: [
      {
        day: 'Day 01',
        activities: ['Arrival and check-in', 'Local orientation walk', 'Leisure evening'],
        image: image || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700',
      },
      {
        day: 'Day 02',
        activities: ['Major attraction visit', 'Signature local meal', 'Evening entertainment'],
        image: image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700',
      },
      {
        day: 'Day 03',
        activities: ['Breakfast and short activity', 'Shopping or free time', 'Checkout and departure'],
        image: image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700',
      },
    ],
  }
}
