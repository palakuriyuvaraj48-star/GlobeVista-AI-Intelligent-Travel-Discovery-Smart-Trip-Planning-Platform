import { useState } from 'react'
import Card from '../components/Card'
import MapModal from '../components/MapModal'
import { places } from '../data/places'

export default function PopularPlaces() {
  const [mapItem, setMapItem] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Popular Places</h1>
        <p className="text-slate-600 mt-1">Best time, entry fee, dress tip, and coordinates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div key={place.id} className="transition duration-300">
            <Card>
              <div className="aspect-[16/10] overflow-hidden">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-lg">{place.name}</h3>
                <p className="text-slate-600 text-sm">{place.city}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  <li><strong>Best time:</strong> {place.bestTime}</li>
                  <li><strong>Entry fee:</strong> {place.entryFee}</li>
                  <li><strong>Dress tip:</strong> {place.dressTip}</li>
                </ul>
                <button
                  type="button"
                  onClick={() => setMapItem({ lat: place.lat, lng: place.lng, title: place.name })}
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
    </div>
  )
}
