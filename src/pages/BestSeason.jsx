import { useState } from 'react'
import Hero from '../components/Hero'

const seasons = [
  {
    id: 'winter',
    name: 'Winter',
    temp: '5-15°C',
    months: 'December - February',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800',
    description: 'Cold, crisp air with clear skies. Perfect for hill stations, deserts, and outdoor exploration.',
    reasons: [
      'Crystal clear skies for sightseeing',
      'Ideal for trekking and adventure sports',
      'Comfortable temperatures for walking tours',
      'Perfect for desert destinations'
    ]
  },
  {
    id: 'summer',
    name: 'Summer',
    temp: '25-40°C',
    months: 'March - May',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    description: 'Hot and sunny. Best for hill stations, early mornings, and water-based activities.',
    reasons: [
      'Long daylight hours',
      'Perfect for water sports and beach activities',
      'Mountain destinations remain cool',
      'Great for photography'
    ]
  },
  {
    id: 'monsoon',
    name: 'Monsoon',
    temp: '20-30°C',
    months: 'June - September',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800',
    description: 'Lush, green landscapes with regular rainfall. Requires proper preparation.',
    reasons: [
      'Stunning green landscapes',
      'Lesser tourists, more peaceful',
      'Discounted hotel rates',
      'Perfect for nature lovers'
    ]
  },
  {
    id: 'autumn',
    name: 'Autumn',
    temp: '15-25°C',
    months: 'October - November',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800',
    description: 'Mild, pleasant weather with colorful foliage. Ideal for most destinations.',
    reasons: [
      'Pleasant weather day and night',
      'Reduced rainfall and humidity',
      'Festival season in many regions',
      'Excellent visibility for sightseeing'
    ]
  }
]

export default function BestSeason() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0])

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <Hero
        image="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920"
        title="Best Season to Travel"
        subtitle="Choose the perfect time for your journey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Best Seasons to Visit
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Discover the ideal time to visit different destinations based on weather and activities
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {seasons.map((season) => (
            <button
              key={season.id}
              onClick={() => setSelectedSeason(season)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 \
                ${selectedSeason.id === season.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}
              `}
            >
              {season.name}
            </button>
          ))}
        </div>

        <div className="mb-16 opacity-0 animate-fadeIn">
          <div className="bg-gradient-to-br from-indigo-50 dark:from-slate-800 to-cyan-50 dark:to-slate-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={selectedSeason.image}
                  alt={selectedSeason.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {selectedSeason.name} ({selectedSeason.months})
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {selectedSeason.description}
                </p>
                <div className="mb-6 p-4 bg-white dark:bg-slate-700 rounded-xl">
                  <p className="text-slate-600 dark:text-slate-300 text-lg font-semibold">
                    Temperature: {selectedSeason.temp}
                  </p>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">
                  Why visit in {selectedSeason.name}?
                </h4>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  {selectedSeason.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-1" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
