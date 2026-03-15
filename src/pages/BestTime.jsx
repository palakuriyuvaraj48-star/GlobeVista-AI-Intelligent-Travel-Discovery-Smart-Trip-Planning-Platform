import { useState, useContext } from 'react'
import { LanguageContext } from '../LanguageContext'
import Hero from '../components/Hero'
import TravelCard from '../TravelCard'

const bestTimeData = [
  {
    id: 1,
    place: 'Taj Mahal, Agra',
    bestMonth: 'October – March',
    bestTimeOfDay: 'Early Morning (6-8 AM)',
    festivalOrEvent: 'Agra Tourism Festival',
    experienceType: 'Photography',
    experienceHighlight: 'Golden light during sunrise, fewer crowds',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
    category: '📸',
  },
  {
    id: 2,
    place: 'Paris, Eiffel Tower',
    bestMonth: 'April – June, September – October',
    bestTimeOfDay: 'Sunset (7-8 PM)',
    festivalOrEvent: 'Bastille Day (July)',
    experienceType: 'Romantic',
    experienceHighlight: 'Sparkling lights at night, cool weather',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    category: '💕',
  },
  {
    id: 3,
    place: 'Bali Beach',
    bestMonth: 'April – October',
    bestTimeOfDay: 'Sunset (6 PM)',
    festivalOrEvent: 'Nyepi (Balinese New Year)',
    experienceType: 'Nightlife',
    experienceHighlight: 'Perfect beach clubs, warm sea, vibrant nightlife',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    category: '🌃',
  },
  {
    id: 4,
    place: 'Swiss Alps',
    bestMonth: 'June – September',
    bestTimeOfDay: 'Early Morning (5-7 AM)',
    festivalOrEvent: 'Alpine Hiking Season',
    experienceType: 'Sunrise',
    experienceHighlight: 'Crystal clear peaks, golden morning glow',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    category: '🌅',
  },
  {
    id: 5,
    place: 'Santorini, Greece',
    bestMonth: 'May – September',
    bestTimeOfDay: 'Evening (6-8 PM)',
    festivalOrEvent: 'Wine Harvest Festival',
    experienceType: 'Photography',
    experienceHighlight: 'Blue domes at golden hour, caldera views',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    category: '🌇',
  },
  {
    id: 6,
    place: 'Dubai Desert',
    bestMonth: 'October – April',
    bestTimeOfDay: 'Early Morning (5-6 AM)',
    festivalOrEvent: 'Dubai Shopping Festival',
    experienceType: 'Festival',
    experienceHighlight: 'Desert safari, cool temperatures, sand dunes',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=800',
    category: '🎉',
  },
]

export default function BestTime() {
  const [timeFilter, setTimeFilter] = useState('all')
  const { t } = useContext(LanguageContext)

  const filteredData = timeFilter === 'all' 
    ? bestTimeData 
    : bestTimeData.filter(item => item.category === timeFilter)

  const timeOfDayOptions = [
    { value: 'all', label: 'All Times' },
    { value: '🌅', label: 'Sunrise' },
    { value: '🌇', label: 'Sunset' },
    { value: '💕', label: 'Romantic' },
    { value: '📸', label: 'Photography' },
    { value: '🎉', label: 'Festival' },
    { value: '🌃', label: 'Nightlife' },
  ]

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <Hero
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920"
        title="Best Time to Travel"
        subtitle="Discover perfect moments for unforgettable experiences"
      />

      {/* Experience Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 opacity-0 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">
            Experience Types
          </h2>
          <p className="text-slate-600 dark:text-slate-300">Choose the perfect moment for your unique travel style</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          {timeOfDayOptions.map((exp, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-indigo-100 dark:border-slate-600 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{exp.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{exp.label}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Time of Day Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sticky top-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-0 rounded-2xl my-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {timeOfDayOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setTimeFilter(option.value)}
              className={`px-4 py-2 rounded-full font-semibold transition duration-300 ${
                timeFilter === option.value
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>

      {/* Best Time Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 opacity-0 animate-fadeIn">
          Perfect Experience For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, i) => (
            <div
              key={item.id}
              className="opacity-0 animate-fadeIn transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <TravelCard
                id={item.id}
                title={item.place}
                description={item.experienceHighlight}
                image={item.image}
                category={item.experienceType}
                badge={`${item.category} ${item.experienceType}`}
                link={`https://maps.google.com/?q=${encodeURIComponent(item.place)}`}
              />
              <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Best Month:</strong> {item.bestMonth}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mt-1">
                  <strong>Best Time:</strong> {item.bestTimeOfDay}
                </p>
                {item.festivalOrEvent && (
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    <strong>Event:</strong> {item.festivalOrEvent}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 text-lg">No experiences found for this filter</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-3">Ready for Your Perfect Travel Experience?</h3>
          <p className="text-slate-100 mb-6 max-w-2xl mx-auto">
            Explore thousands of destinations tailored to your preferred time and experience type.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-slate-100 transition duration-300 transform hover:scale-105">
            Start Planning Now
          </button>
        </div>
      </section>

      {/* Add animation CSS */}
    </div>
  )
}
