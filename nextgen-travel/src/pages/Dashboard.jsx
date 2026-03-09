import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import FilterPanel from '../components/FilterPanel'
import SearchBar, { highlightText } from '../components/SearchBar'
import TravelCard from '../components/TravelCard'
import Card from '../components/Card'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'
import { events } from '../data/events'
import { useLanguage } from '../context/LanguageContext'

const heroImages = [
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920',
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920',
]

const statesDataset = [
  { id: 'state-rajasthan', title: 'Rajasthan', location: 'India', category: 'State', type: 'Historical', placeType: 'Historical', image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=800', description: 'Palaces, forts, and desert culture.', price: 0 },
  { id: 'state-goa', title: 'Goa', location: 'India', category: 'State', type: 'Beach', placeType: 'Beach', image: 'https://images.unsplash.com/photo-1555881404-251498ef9dba?w=800', description: 'Beaches, nightlife, and Portuguese heritage.', price: 0 },
  { id: 'state-kerala', title: 'Kerala', location: 'India', category: 'State', type: 'Spiritual', placeType: 'Forest', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a028?w=800', description: 'Backwaters, hills, and Ayurveda.', price: 0 },
]

const hiddenPalacesDataset = [
  { id: 'hp-bundi', title: 'Bundi Palace', location: 'Rajasthan, India', category: 'HiddenPalaces', type: 'Palace', placeType: 'Palace', image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=800', description: 'Quiet grandeur and hand-painted corridors.' },
  { id: 'hp-neemrana', title: 'Neemrana Fort', location: 'Rajasthan, India', category: 'HiddenPalaces', type: 'Historical', placeType: 'Historical', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800', description: 'Heritage fort stay with sunset views.' },
  { id: 'hp-orchha', title: 'Orchha Palace', location: 'Madhya Pradesh, India', category: 'HiddenPalaces', type: 'Historical', placeType: 'Historical', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800', description: 'Riverside history with cinematic arches.' },
]

const foreignPalacesDataset = [
  { id: 'fp-versailles', title: 'Palace of Versailles', location: 'France', category: 'ForeignPalaces', type: 'Palace', placeType: 'Palace', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', description: 'Royal scale, gardens, and museum-grade detail.' },
  { id: 'fp-buckingham', title: 'Buckingham Palace', location: 'London, UK', category: 'ForeignPalaces', type: 'Historical', placeType: 'Historical', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', description: 'Ceremonial tradition and iconic city prestige.' },
  { id: 'fp-topkapi', title: 'Topkapi Palace', location: 'Istanbul, Turkey', category: 'ForeignPalaces', type: 'Historical', placeType: 'Historical', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', description: 'Ottoman legacy with waterfront brilliance.' },
]

const rentalsDataset = [
  { id: 'rental-car', title: 'Self-Drive Cars', location: 'Major Cities', category: 'Rentals', type: 'Cars', rentalType: 'Cars', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', description: 'Premium cars with transparent pricing and verified partners.', price: 7500 },
  { id: 'rental-bike', title: 'City Bike Rentals', location: 'Tourist Zones', category: 'Rentals', type: 'Bikes', rentalType: 'Bikes', image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800', description: 'Fast pickups, safe rides, and curated routes.', price: 1800 },
  { id: 'rental-ev', title: 'Electric Vehicles', location: 'Metro Areas', category: 'Rentals', type: 'Electric Vehicles', rentalType: 'Electric Vehicles', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800', description: 'Silent luxury for modern, mindful travel.', price: 12500 },
]

function normalizeText(value) {
  return String(value || '').trim().toLowerCase()
}

function budgetBucket(price) {
  const p = Number(price || 0)
  if (!p) return null
  if (p < 5000) return 'under_5000'
  if (p >= 5000 && p < 15000) return '5000_15000'
  if (p >= 15000 && p < 50000) return '15000_50000'
  return 'luxury'
}

function getPreferences() {
  try {
    const raw = localStorage.getItem('ntp_profile_preferences')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const FAVORITES_KEY = 'ntp_favorites'
const SEARCH_EVENTS_KEY = 'ntp_search_events'

export default function Dashboard() {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ budgets: [], placeTypes: [], rentalTypes: [] })
  const [favorites, setFavorites] = useState([])
  const [bookingItem, setBookingItem] = useState(null)

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY)
      const parsed = JSON.parse(raw || '[]')
      setFavorites(Array.isArray(parsed) ? parsed : [])
    } catch {
      setFavorites([])
    }
  }, [])

  const unified = useMemo(() => {
    const hotelItems = hotels.map((h) => ({
      ...h,
      id: `hotel-${h.id}`,
      title: h.name,
      location: h.city,
      category: 'Hotels',
      placeType: 'Luxury',
      type: 'Luxury',
    }))

    const restaurantItems = restaurants.map((r) => ({
      ...r,
      id: `restaurant-${r.id}`,
      title: r.name,
      location: r.city,
      category: 'Restaurants',
      placeType: 'Nightlife',
      type: r.cuisine,
      price: 0,
      description: `${r.cuisine} dining with premium ambience.`,
    }))

    const eventItems = events.map((e) => ({
      ...e,
      id: `event-${e.id}`,
      title: e.name,
      category: 'Events',
      type: 'Experience',
      placeType: 'Cultural',
      price: 0,
    }))

    return [
      ...statesDataset,
      ...hotelItems,
      ...restaurantItems,
      ...eventItems,
      ...rentalsDataset,
      ...hiddenPalacesDataset,
      ...foreignPalacesDataset,
    ]
  }, [])

  const filtered = useMemo(() => {
    const q = normalizeText(query)

    return unified.filter((item) => {
      const category = normalizeText(item.category)
      const title = normalizeText(item.title || item.name)
      const location = normalizeText(item.location || item.city)
      const type = normalizeText(item.type)

      const searchOk = !q
        ? true
        : title.includes(q) || location.includes(q) || category.includes(q) || type.includes(q)

      if (!searchOk) return false

      const b = budgetBucket(item.price)
      const budgetOk = !filters.budgets?.length ? true : (b ? filters.budgets.includes(b) : false)
      if (!budgetOk) return false

      const pt = item.placeType || item.type
      const placeTypeOk = !filters.placeTypes?.length ? true : filters.placeTypes.includes(String(pt))
      if (!placeTypeOk) return false

      const rentalOk = !filters.rentalTypes?.length
        ? true
        : filters.rentalTypes.includes(String(item.rentalType || item.type || ''))
      if (!rentalOk) return false

      return true
    })
  }, [filters.budgets, filters.placeTypes, filters.rentalTypes, query, unified])

  const favoriteIds = useMemo(() => new Set((favorites || []).map((f) => f.id)), [favorites])

  const toggleFavorite = (item) => {
    setFavorites((cur) => {
      const next = Array.isArray(cur) ? [...cur] : []
      const idx = next.findIndex((x) => x.id === item.id)
      if (idx >= 0) next.splice(idx, 1)
      else next.unshift({ ...item })
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next))
      return next
    })
  }

  useEffect(() => {
    const q = query.trim()
    if (!q) return
    try {
      const stored = JSON.parse(localStorage.getItem(SEARCH_EVENTS_KEY) || '[]')
      const next = Array.isArray(stored) ? stored : []
      next.push({ id: `${Date.now()}`, q, category: 'Unified', at: new Date().toISOString() })
      localStorage.setItem(SEARCH_EVENTS_KEY, JSON.stringify(next.slice(-50)))
    } catch {
    }
  }, [query])

  const preferences = useMemo(() => getPreferences(), [])

  const recommended = useMemo(() => {
    if (!preferences) return []
    const b = preferences.budgetLevel
    const style = normalizeText(preferences.travelStyle)

    const candidates = unified.filter((it) => {
      const bucket = budgetBucket(it.price)
      const budgetOk = b ? bucket === b : true
      const styleOk = style
        ? normalizeText(it.type).includes(style) || normalizeText(it.placeType).includes(style) || normalizeText(it.category).includes(style)
        : true
      return budgetOk || styleOk
    })

    const uniq = []
    const seen = new Set()
    for (const c of candidates) {
      if (seen.has(c.id)) continue
      seen.add(c.id)
      uniq.push(c)
      if (uniq.length >= 6) break
    }
    return uniq
  }, [preferences, unified])

  const highlight = (text) => highlightText(text, query)

  return (
    <div>
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
          </div>
        ))}

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Official · Premium · Intelligent</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              {t('brand')}
            </h1>
            <p className="mt-4 text-lg font-medium text-white/80">{t('tagline')}</p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
            <SearchBar value={query} onChange={setQuery} placeholder={t('searchPlaceholder')} />
            <FilterPanel value={filters} onChange={setFilters} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/profile-preferences"
              className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-extrabold text-white backdrop-blur transition duration-300 hover:bg-white/15"
            >
              {t('openPreferences')}
            </Link>
            <Link
              to="/best-time"
              className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition duration-300 hover:opacity-95"
            >
              {t('explore')}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {recommended.length ? (
          <div className="mb-10">
            <div className="mb-4 flex items-end justify-between gap-3">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{t('recommended')}</h2>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{recommended.length}</div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommended.map((item) => (
                <div key={item.id} className="animate-fade-in">
                  <TravelCard
                    item={item}
                    highlight={highlight}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favoriteIds.has(item.id)}
                    onOpenBooking={setBookingItem}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Card className="mb-10 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">Recommendations unlock with your profile.</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Set budget, style, season, and time-of-day for smarter discovery.</p>
              </div>
              <Link
                to="/profile-preferences"
                className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-3 text-sm font-extrabold text-white transition duration-300 hover:opacity-95"
              >
                {t('preferences')}
              </Link>
            </div>
          </Card>
        )}

        {favorites.length ? (
          <div className="mb-10">
            <div className="mb-4 flex items-end justify-between gap-3">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{t('favorites')}</h2>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{favorites.length}</div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favorites.slice(0, 6).map((item) => (
                <div key={item.id} className="animate-fade-in">
                  <TravelCard
                    item={item}
                    highlight={highlight}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={favoriteIds.has(item.id)}
                    onOpenBooking={setBookingItem}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Global Discovery</h2>
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{filtered.length} results</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <TravelCard
                item={item}
                highlight={highlight}
                onToggleFavorite={toggleFavorite}
                isFavorite={favoriteIds.has(item.id)}
                onOpenBooking={setBookingItem}
              />
            </div>
          ))}
        </div>
      </section>

      <BookingModal isOpen={!!bookingItem} onClose={() => setBookingItem(null)} item={bookingItem} />
    </div>
  )
}
