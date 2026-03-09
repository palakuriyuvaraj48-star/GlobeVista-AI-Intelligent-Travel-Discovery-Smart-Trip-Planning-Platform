import { useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import MapModal from '../components/MapModal'

const pubs = [
  {
    id: 1,
    name: 'Sky Bar',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    location: 'Bengaluru',
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    description: 'Rooftop music lounge with skyline views and craft cocktails.',
  },
  {
    id: 2,
    name: 'The Irish House',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80',
    location: 'Mumbai',
    lat: 19.076,
    lng: 72.8777,
    rating: 4.4,
    description: 'Lively pub with themed nights, global bites, and sports screenings.',
  },
  {
    id: 3,
    name: 'High Spirits',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80',
    location: 'Goa',
    lat: 15.2993,
    lng: 74.124,
    rating: 4.7,
    description: 'Late-night dance venue known for DJ sets and energetic crowd.',
  },
  {
    id: 4,
    name: 'The White Owl',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    location: 'Chennai',
    lat: 13.0827,
    lng: 80.2707,
    rating: 4.3,
    description: 'Contemporary brewpub serving signature ales and fusion snacks.',
  },
  {
    id: 5,
    name: 'Prost Brew Pub',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    location: 'Hyderabad',
    lat: 17.385,
    lng: 78.4867,
    rating: 4.5,
    description: 'Spacious social hub with live acts and rooftop seating.',
  },
  {
    id: 6,
    name: 'The Beer Cafe',
    image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=1200&q=80',
    location: 'Delhi',
    lat: 28.7041,
    lng: 77.1025,
    rating: 4.2,
    description: 'Casual pub experience with rotating taps and late-evening menus.',
  },
]

export default function Pubs() {
  const [mapItem, setMapItem] = useState(null)
  const fallbackImage = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
        title="Pubs & Nightlife"
        subtitle="Top spots for after-dark entertainment"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slideUp">
          <h1 className="text-3xl font-bold text-slate-800">Pubs</h1>
          <p className="mt-1 text-slate-600">Nightlife spots with ratings and map access</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pubs.map((pub, i) => (
            <div key={pub.id} className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
              <Card className="h-full">
                <img
                  src={pub.image || fallbackImage}
                  alt={pub.name}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage
                  }}
                  className="h-48 w-full object-cover"
                />
                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                  <h3 className="text-lg font-semibold text-slate-800">{pub.name}</h3>
                  <p className="text-sm text-slate-600">{pub.location}</p>
                  <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {pub.rating} rating</p>
                  <p className="mt-3 text-sm text-slate-600">{pub.description}</p>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapItem({ lat: pub.lat, lng: pub.lng, title: pub.name })}
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
