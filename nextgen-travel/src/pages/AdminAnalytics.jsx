import { useMemo } from 'react'
import Card from '../components/Card'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'
import { events } from '../data/events'
import { places } from '../data/places'

function safeParseArray(key) {
  try {
    const raw = localStorage.getItem(key)
    const parsed = JSON.parse(raw || '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function mostFrequent(items, keyFn) {
  const map = new Map()
  for (const it of items) {
    const k = keyFn(it)
    if (!k) continue
    map.set(k, (map.get(k) || 0) + 1)
  }
  let best = null
  let bestCount = 0
  for (const [k, count] of map.entries()) {
    if (count > bestCount) {
      best = k
      bestCount = count
    }
  }
  return { value: best, count: bestCount }
}

export default function AdminAnalytics() {
  const favorites = useMemo(() => safeParseArray('ntp_favorites'), [])
  const bookings = useMemo(() => safeParseArray('ntp_mock_bookings'), [])
  const searches = useMemo(() => safeParseArray('ntp_search_events'), [])

  const totalDestinations = hotels.length + restaurants.length + events.length + places.length

  const mostSearchedCategory = useMemo(
    () => mostFrequent(searches, (s) => s?.category),
    [searches]
  )

  const mostSavedLocation = useMemo(
    () => mostFrequent(favorites, (f) => f?.title || f?.name),
    [favorites]
  )

  const seasonal = useMemo(() => {
    const counts = { Winter: 0, Summer: 0, Monsoon: 0, Spring: 0 }
    for (const f of favorites) {
      const season = f?.bestSeason
      if (season && counts[season] !== undefined) counts[season] += 1
    }
    const max = Math.max(1, ...Object.values(counts))
    return { counts, max }
  }, [favorites])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Admin Analytics</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">Corporate overview (mock data, local storage signals).</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total destinations</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">{totalDestinations}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mock bookings</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">{bookings.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Favorites saved</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">{favorites.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Most searched</p>
          <p className="mt-2 text-lg font-extrabold text-indigo-600 dark:text-indigo-300">
            {mostSearchedCategory.value || '—'}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{mostSearchedCategory.count} searches</p>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <p className="text-sm font-extrabold text-slate-900 dark:text-white">Most saved location</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{mostSavedLocation.value || '—'}</p>
          <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{mostSavedLocation.count} saves</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-extrabold text-slate-900 dark:text-white">Seasonal popularity</p>
          <div className="mt-4 space-y-3">
            {Object.entries(seasonal.counts).map(([label, count]) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-20 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</div>
                <div className="flex-1 rounded-full bg-slate-100 dark:bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                    style={{ width: `${Math.round((count / seasonal.max) * 100)}%` }}
                  />
                </div>
                <div className="w-10 text-right text-xs font-extrabold text-slate-700 dark:text-slate-200">{count}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
