import { useMemo, useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const rentals = [
  {
    id: 'cars',
    title: 'Premium Self-Drive Cars',
    type: 'Cars',
    location: 'Major Cities',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920',
    description: 'Verified partners, transparent pricing, and premium comfort—built for business-class travel.',
  },
  {
    id: 'bikes',
    title: 'City Bike Rentals',
    type: 'Bikes',
    location: 'Tourist Zones',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?w=1920',
    description: 'Fast pickups, curated routes, and safe rides for flexible exploration.',
  },
  {
    id: 'suvs',
    title: 'SUVs for Hills & Highways',
    type: 'SUVs',
    location: 'Pan-India',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920',
    description: 'Space, stability, and confidence—ideal for family travel and hill drives.',
  },
  {
    id: 'luxury',
    title: 'Luxury Cars',
    type: 'Luxury Cars',
    location: 'Metro Cities',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1920',
    description: 'Arrive like it’s an event. Premium vehicles for premium moments.',
  },
  {
    id: 'ev',
    title: 'Electric Vehicles',
    type: 'Electric Vehicles',
    location: 'Metro Areas',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1920',
    description: 'Silent luxury for modern, mindful travel—clean and effortless.',
  },
]

export default function Rentals() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rentals
    return rentals.filter((r) => `${r.title} ${r.type} ${r.location}`.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920"
          alt="Rentals"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Mobility Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Rentals</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Premium vehicles. Verified partners. Seamless planning.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SearchBar value={query} onChange={setQuery} placeholder="Search rental type or location…" />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.location)}`
            return (
              <Card key={r.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">{r.type}</div>
                </div>
                <div className="p-5">
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">{r.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{r.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{r.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-300">₹{r.price.toLocaleString()}</div>
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-extrabold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
