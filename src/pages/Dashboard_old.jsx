import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import TravelCard from '../TravelCard'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'
import { places } from '../data/places'
import { events } from '../data/events'

const heroImages = [
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920',
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
]

const featured = [
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600', slug: 'paris' },
  { name: 'Jaipur', image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=600', slug: 'jaipur' },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600', slug: 'bali' },
  { name: 'Santorini', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600', slug: 'santorini' },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=600', slug: 'dubai' },
]

export default function Dashboard() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [profilePrefs, setProfilePrefs] = useState(null)

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(saved)
    const prefs = localStorage.getItem('profilePrefs')
    if (prefs) setProfilePrefs(JSON.parse(prefs))
  }, [])

  const performSearch = (query) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      setShowSearch(false)
      return
    }

    const lowerQuery = query.toLowerCase()
    const combine = (items, type) =>
      items
        .filter(
          (item) =>
            item.name?.toLowerCase().includes(lowerQuery) ||
            item.title?.toLowerCase().includes(lowerQuery) ||
            item.city?.toLowerCase().includes(lowerQuery) ||
            item.location?.toLowerCase().includes(lowerQuery) ||
            item.cuisine?.toLowerCase().includes(lowerQuery) ||
            item.category?.toLowerCase().includes(lowerQuery)
        )
        .map((item) => ({
          ...item,
          type,
          id: item.id || Math.random(),
        }))

    const results = [
      ...combine(hotels, 'hotel').slice(0, 3),
      ...combine(restaurants, 'restaurant').slice(0, 3),
      ...combine(places, 'place').slice(0, 3),
      ...combine(events, 'event').slice(0, 3),
    ]

    setSearchResults(results)
    setShowSearch(query.length > 0)
  }

  const favoritesList = [
    ...hotels.filter((h) => favorites.includes(h.id)),
    ...restaurants.filter((r) => favorites.includes(r.id)),
    ...places.filter((p) => favorites.includes(p.id)),
  ]

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 opacity-0 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">NextGen Travel Explorer</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Discover luxury destinations, book with confidence, travel with intelligence
          </p>

          <div className="w-full max-w-2xl">
            <SearchBar onSearch={performSearch} placeholder="Search 1000+ destinations..." />
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showSearch && searchResults.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 opacity-0 animate-fadeIn">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Search Results ({searchResults.length})
            </h2>
            <button
              onClick={() => {
                setShowSearch(false)
                setSearchQuery('')
              }}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              Clear
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, i) => (
              <div key={result.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${i * 50}ms` }}>
                <TravelCard
                  id={result.id}
                  title={result.name || result.title}
                  image={result.image}
                  description={result.description || result.city || result.location}
                  price={result.price}
                  rating={result.rating}
                  category={result.type}
                  location={result.city || result.location}
                  badge={result.type.toUpperCase()}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 opacity-0 animate-fadeIn" style={{ animationDelay: '100ms' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Hotels', value: hotels.length + '+' },
            { label: 'Restaurants', value: restaurants.length + '+' },
            { label: 'Destinations', value: places.length + '+' },
            { label: 'Events', value: events.length + '+' },
          ].map((stat, i) => (
            <div key={stat.label} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
              <Card className="p-6 text-center hover:shadow-lg transition duration-300">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Personalized Recommendations */}
      {profilePrefs && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              ✨ Recommended For You
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Personalized picks for your {profilePrefs.budget} budget, {profilePrefs.purpose} trip
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotels.slice(0, 4).map((hotel, i) => (
                <div key={hotel.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
                  <TravelCard
                    id={hotel.id}
                    title={hotel.name}
                    image={hotel.image}
                    description={hotel.description}
                    price={hotel.price}
                    rating={hotel.rating}
                    location={hotel.city}
                    category="Hotel"
                    badge="Hotel"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* My Favorites Section */}
      {favoritesList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
            ❤️ My Favorites ({favoritesList.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritesList.slice(0, 6).map((item, i) => (
              <div key={item.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
                <TravelCard
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  description={item.description || item.cuisine}
                  price={item.price}
                  rating={item.rating}
                  location={item.city || item.location}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '400ms' }}>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">🌍 Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featured.map((dest, i) => (
            <Link key={dest.name} to="/places">
              <div className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
                <Card className="overflow-hidden group h-full cursor-pointer hover:shadow-2xl transition duration-300 transform hover:scale-105">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="relative -mt-16 p-4 text-white">
                    <h3 className="font-semibold text-lg">{dest.name}</h3>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">🏨 Premium Hotels</h2>
          <Link
            to="/hotels"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.slice(0, 3).map((h, i) => (
            <div key={h.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
              <TravelCard
                id={h.id}
                title={h.name}
                image={h.image}
                description={h.description}
                price={h.price}
                rating={h.rating}
                location={h.city}
                category="Hotel"
                badge="Hotel"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '600ms' }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">🍽️ Featured Restaurants</h2>
          <Link
            to="/restaurants"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 3).map((r, i) => (
            <div key={r.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
              <TravelCard
                id={r.id}
                title={r.name}
                image={r.image}
                description={r.cuisine}
                rating={r.rating}
                location={r.city}
                category="Restaurant"
                badge={r.cuisine}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '700ms' }}>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">💡 Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '📦 Pack Smart', desc: 'Carry essentials and mix-n-match outfits for convenience.' },
            { title: '💧 Stay Hydrated', desc: 'Keep a water bottle handy, especially in summer.' },
            { title: '🙏 Respect Culture', desc: 'Respect cultural norms and dress codes.' },
          ].map((tip, i) => (
            <div key={tip.title} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${(i + 1) * 50}ms` }}>
              <Card className="p-6 hover:shadow-lg transition duration-300 h-full">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{tip.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{tip.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 opacity-0 animate-fadeIn" style={{ animationDelay: '800ms' }}>
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Explore 1000+ destinations, book with confidence, travel with luxury
          </p>
          <Link
            to="/preferences"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            Set Your Preferences
          </Link>
        </div>
      </section>
    </div>
  )
}

  const favoritesList = [
    ...hotels.filter((h) => favorites.includes(h.id)),
    ...restaurants.filter((r) => favorites.includes(r.id)),
    ...places.filter((p) => favorites.includes(p.id)),
  ]

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            NextGen Travel Explorer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-200 mb-8"
          >
            Discover luxury destinations, book with confidence
          </motion.p>

          {/* Hero Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            <SearchBar onSearch={performSearch} placeholder="Search 1000+ destinations..." />
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {showSearch && searchResults.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Search Results ({searchResults.length})
            </h2>
            <button
              onClick={() => {
                setShowSearch(false)
                setSearchQuery('')
              }}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-800 dark:text-white"
            >
              Clear
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <TravelCard
                  id={result.id}
                  title={result.name || result.title}
                  image={result.image}
                  description={result.description || result.city || result.location}
                  price={result.price}
                  rating={result.rating}
                  category={result.type}
                  location={result.city || result.location}
                  badge={result.type.toUpperCase()}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Hotels', value: hotels.length + '+' },
            { label: 'Restaurants', value: restaurants.length + '+' },
            { label: 'Destinations', value: places.length + '+' },
            { label: 'Events', value: events.length + '+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personalized Recommendations */}
      {profilePrefs && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            ? Recommended Based On Your Interests
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Personalized picks for your {profilePrefs.budget} budget, {profilePrefs.purpose} trip
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.slice(0, 4).map((hotel) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <TravelCard
                  id={hotel.id}
                  title={hotel.name}
                  image={hotel.image}
                  description={hotel.description}
                  price={hotel.price}
                  rating={hotel.rating}
                  location={hotel.city}
                  category="Hotel"
                  badge="Hotel"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* My Favorites Section */}
      {favoritesList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
            ?? My Favorites ({favoritesList.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritesList.slice(0, 6).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <TravelCard
                  id={item.id}
                  title={item.name}
                  image={item.image}
                  description={item.description || item.cuisine}
                  price={item.price}
                  rating={item.rating}
                  location={item.city || item.location}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">?? Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featured.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/places">
                <Card className="overflow-hidden group h-full cursor-pointer hover:shadow-2xl transition">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="relative -mt-16 p-4 text-white">
                    <h3 className="font-semibold text-lg">{dest.name}</h3>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">?? Premium Hotels</h2>
          <Link
            to="/hotels"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium"
          >
            View All ?
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.slice(0, 3).map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TravelCard
                id={h.id}
                title={h.name}
                image={h.image}
                description={h.description}
                price={h.price}
                rating={h.rating}
                location={h.city}
                category="Hotel"
                badge="Hotel"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">??? Featured Restaurants</h2>
          <Link
            to="/restaurants"
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-medium"
          >
            View All ?
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TravelCard
                id={r.id}
                title={r.name}
                image={r.image}
                description={r.cuisine}
                rating={r.rating}
                location={r.city}
                category="Restaurant"
                badge={r.cuisine}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 dark:bg-slate-800 rounded-3xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">?? Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '?? Pack Smart', desc: 'Carry essentials and mix-n-match outfits for convenience.' },
            { title: '?? Stay Hydrated', desc: 'Keep a water bottle handy, especially in summer.' },
            { title: '?? Respect Culture', desc: 'Respect cultural norms and dress codes.' },
          ].map((tip) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition h-full">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{tip.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{tip.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Explore 1000+ destinations, book with confidence, travel with luxury
          </p>
          <Link
            to="/preferences"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:shadow-lg transition duration-300"
          >
            Set Your Preferences
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
