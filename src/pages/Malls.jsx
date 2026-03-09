import { useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import MapModal from '../components/MapModal'

const malls = [
  {
    id: 1,
    name: 'Phoenix Marketcity',
    location: 'Mumbai',
    lat: 19.1186,
    lng: 72.9106,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium retail destination with food courts and multiplex entertainment.',
  },
  {
    id: 2,
    name: 'DLF Mall of India',
    location: 'Noida',
    lat: 28.5355,
    lng: 77.391,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    description: 'Large-scale lifestyle mall with fashion, gaming zones, and family dining.',
  },
  {
    id: 3,
    name: 'Lulu Mall',
    location: 'Kochi',
    lat: 10.0209,
    lng: 76.3173,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern mall offering international brands and high-traffic leisure spaces.',
  },
  {
    id: 4,
    name: 'Forum Mall',
    location: 'Bengaluru',
    lat: 12.9756,
    lng: 77.6051,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Urban shopping hotspot with theaters, quick bites, and branded outlets.',
  },
  {
    id: 5,
    name: 'Ambience Mall',
    location: 'Gurgaon',
    lat: 28.4817,
    lng: 77.0937,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    description: 'Luxury and mid-range shopping blend with live events and entertainment.',
  },
  {
    id: 6,
    name: 'Mall of the Emirates',
    location: 'Dubai',
    lat: 25.1184,
    lng: 55.2,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic shopping complex featuring designer stores and major attractions.',
  },
]

export default function Malls() {
  const [mapItem, setMapItem] = useState(null)
  const fallbackImage = 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80'

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1920&q=80"
        title="Shopping Malls"
        subtitle="Top destinations for retail therapy"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slideUp">
          <h1 className="text-3xl font-bold text-slate-800">Malls</h1>
          <p className="mt-1 text-slate-600">Top shopping malls with details, ratings, and locations</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {malls.map((mall, i) => (
            <div key={mall.id} className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
              <Card className="h-full">
                <img
                  src={mall.image || fallbackImage}
                  alt={mall.name}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage
                  }}
                  className="h-48 w-full object-cover"
                />
                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                  <h3 className="text-lg font-semibold text-slate-800">{mall.name}</h3>
                  <p className="text-sm text-slate-600">{mall.location}</p>
                  <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {mall.rating} rating</p>
                  <p className="mt-3 text-sm text-slate-600">{mall.description}</p>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapItem({ lat: mall.lat, lng: mall.lng, title: mall.name })}
                      className="rounded-lg bg-cyan-100 px-3 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-200"
                    >
                      View on Map
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <MapModal
          isOpen={Boolean(mapItem)}
          onClose={() => setMapItem(null)}
          lat={mapItem?.lat}
          lng={mapItem?.lng}
          title={mapItem?.title}
        />
      </div>
    </>
  )
}
