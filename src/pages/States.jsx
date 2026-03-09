import Hero from '../components/Hero'
import Card from '../components/Card'

const states = [
  {
    id: 1,
    name: 'Rajasthan',
    location: 'Northwest India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    highlights: '\ud83c\udff0 Palaces • \ud83d\udc2b Desert • \ud83c\udfad Culture',
    destinations: ['Jaipur', 'Udaipur', 'Jaisalmer'],
    description: 'Royal forts, desert escapes, heritage hotels, and vibrant cultural circuits.',
  },
  {
    id: 2,
    name: 'Goa',
    location: 'West Coast India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    highlights: '\ud83c\udfdd Beaches • \ud83c\udfb6 Nightlife • \ud83c\udf74 Seafood',
    destinations: ['Panaji', 'Calangute', 'Palolem'],
    description: 'Beachside stays, lively nightlife, Portuguese quarters, and water activities.',
  },
  {
    id: 3,
    name: 'Kerala',
    location: 'South India',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    highlights: '\ud83c\udf34 Backwaters • \ud83c\udf3f Nature • \ud83e\uddd6 Wellness',
    destinations: ['Munnar', 'Alleppey', 'Kochi'],
    description: 'Backwater cruises, hill stations, Ayurveda retreats, and lush scenery.',
  },
  {
    id: 4,
    name: 'Himachal Pradesh',
    location: 'Himalayan India',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    highlights: '\u26f0\ufe0f Mountains • \u2744\ufe0f Snow • \ud83e\uddfe Adventure',
    destinations: ['Shimla', 'Manali', 'Kasol'],
    description: 'Mountain roads, winter escapes, alpine villages, and scenic adventure routes.',
  },
  {
    id: 5,
    name: 'Tamil Nadu',
    location: 'Southeast India',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    highlights: '\ud83d\uded5 Temples • \ud83c\udf8f Heritage • \ud83c\udf0a Coast',
    destinations: ['Chennai', 'Madurai', 'Rameswaram'],
    description: 'Temple architecture, classical culture, coastal drives, and culinary depth.',
  },
  {
    id: 6,
    name: 'Sikkim',
    location: 'Northeast India',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    highlights: '\ud83c\udf3f Valleys • \ud83d\udef0\ufe0f Monasteries • \ud83c\udfd4\ufe0f Peaks',
    destinations: ['Gangtok', 'Pelling', 'Lachung'],
    description: 'High-altitude landscapes, monasteries, mountain towns, and clean eco-tourism.',
  },
]

export default function States() {
  const fallbackImage = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80"
        title="Explore Indian States"
        subtitle="Culture-rich destinations with standout travel highlights"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slideUp">
          <h1 className="text-3xl font-bold text-slate-800">States</h1>
          <p className="mt-1 text-slate-600">Plan by region with top highlights and destination shortcuts.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {states.map((state, index) => (
            <div key={state.id} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full">
                <img
                  src={state.image || fallbackImage}
                  alt={state.name}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage
                  }}
                  className="h-48 w-full object-cover"
                />
                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                  <h3 className="text-xl font-bold text-slate-800">{state.name}</h3>
                  <p className="text-sm text-slate-600">{state.location}</p>
                  <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {state.rating} rating</p>
                  <p className="mt-3 text-sm font-semibold text-slate-700">{state.highlights}</p>
                  <p className="mt-3 text-sm text-slate-600">{state.description}</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-700">Top destinations:</p>
                    <ul className="mt-1 space-y-1 text-sm text-slate-600">
                      {state.destinations.map((destination) => (
                        <li key={destination}>{'\u2022'} {destination}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      type="button"
                      className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition duration-300 hover:bg-indigo-700"
                    >
                      Explore {state.name}
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
