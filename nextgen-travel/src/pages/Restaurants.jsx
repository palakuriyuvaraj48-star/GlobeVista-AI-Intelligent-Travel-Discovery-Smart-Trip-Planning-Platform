import { useState } from 'react'
import Card from '../components/Card'
import MapModal from '../components/MapModal'
import { restaurants } from '../data/restaurants'

export default function Restaurants() {
  const [showMap, setShowMap] = useState(false)
  const [mapItem, setMapItem] = useState(null)

  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920"
          alt="Restaurants"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Curated Dining</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Restaurants</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Cuisine, ratings, and map access—premium picks for your itinerary.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Explore curated restaurants</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Toggle map access to view coordinates.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="px-4 py-3 rounded-2xl bg-slate-100 text-slate-700 text-sm font-extrabold hover:bg-slate-200 transition dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
          >
            {showMap ? 'Hide map links' : 'Show map links'}
          </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((r) => (
          <div key={r.id} className="transition duration-300">
            <Card>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-lg">{r.name}</h3>
                <p className="text-slate-600 text-sm">{r.city} · {r.cuisine}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-amber-500 font-medium">★ {r.rating}</span>
                  <span className="text-slate-500">{r.priceRange}</span>
                </div>
                {showMap && (
                  <button
                    type="button"
                    onClick={() => setMapItem({ lat: r.lat, lng: r.lng, title: r.name })}
                    className="mt-4 w-full py-2 rounded-xl border border-indigo-600 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition"
                  >
                    View on Map
                  </button>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <MapModal
        isOpen={!!mapItem}
        onClose={() => setMapItem(null)}
        lat={mapItem?.lat}
        lng={mapItem?.lng}
        title={mapItem?.title}
      />
      </section>
    </div>
  )
}
