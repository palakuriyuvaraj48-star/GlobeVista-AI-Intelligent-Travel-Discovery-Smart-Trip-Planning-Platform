import { useState } from 'react'
import Card from '../components/Card'
import MapModal from '../components/MapModal'
import { hotels } from '../data/hotels'

const cities = [...new Set(hotels.map((h) => h.city))]

export default function Hotels() {
  const [cityFilter, setCityFilter] = useState('')
  const [mapItem, setMapItem] = useState(null)

  const filtered = cityFilter
    ? hotels.filter((h) => h.city.toLowerCase() === cityFilter.toLowerCase())
    : hotels

  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
          alt="Hotels"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Verified Stays</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Hotels</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Curated luxury stays with coordinates and map access.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          type="button"
          onClick={() => setCityFilter('')}
          className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${
            !cityFilter ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          All
        </button>
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => setCityFilter(city)}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${
              cityFilter === city ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((hotel) => (
          <div key={hotel.id} className="transition duration-300">
            <Card>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-lg">{hotel.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{hotel.city}</p>
                <p className="text-slate-500 text-sm mt-2">{hotel.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-amber-500 font-medium">★ {hotel.rating}</span>
                  <span className="font-semibold text-indigo-600">₹{hotel.price.toLocaleString()}/night</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMapItem({ lat: hotel.lat, lng: hotel.lng, title: hotel.name })}
                  className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition"
                >
                  View on Map
                </button>
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
