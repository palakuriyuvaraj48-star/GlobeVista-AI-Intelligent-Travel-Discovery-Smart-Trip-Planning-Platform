import { useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import MapModal from '../components/MapModal'

const theaters = [
  {
    id: 1,
    name: 'PVR Cinemas',
    location: 'Mumbai',
    lat: 19.076,
    lng: 72.8777,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    rating: 4.6,
    nowShowing: ['Dune 2', 'Oppenheimer', 'Avatar'],
    showtimes: ['10:00', '13:00', '16:00', '19:00'],
  },
  {
    id: 2,
    name: 'INOX Megaplex',
    location: 'Delhi',
    lat: 28.7041,
    lng: 77.1025,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
    rating: 4.5,
    nowShowing: ['Interstellar', 'Pathaan', 'Dune 2'],
    showtimes: ['11:00', '14:00', '17:00', '20:00'],
  },
  {
    id: 3,
    name: 'Cinepolis',
    location: 'Bengaluru',
    lat: 12.9716,
    lng: 77.5946,
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
    rating: 4.4,
    nowShowing: ['Avatar', 'Leo', 'Oppenheimer'],
    showtimes: ['09:30', '12:30', '15:30', '18:30'],
  },
  {
    id: 4,
    name: 'Raj Mandir',
    location: 'Jaipur',
    lat: 26.9124,
    lng: 75.7873,
    image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    nowShowing: ['Jawan', 'RRR', 'Dune 2'],
    showtimes: ['10:15', '13:15', '16:15', '19:15'],
  },
  {
    id: 5,
    name: 'DLF IMAX',
    location: 'Noida',
    lat: 28.5355,
    lng: 77.391,
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=1200&q=80',
    rating: 4.5,
    nowShowing: ['Avatar', 'The Batman', 'Dune 2'],
    showtimes: ['11:30', '14:30', '17:30', '20:30'],
  },
  {
    id: 6,
    name: 'Escape Cinemas',
    location: 'Hyderabad',
    lat: 17.385,
    lng: 78.4867,
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=80',
    rating: 4.3,
    nowShowing: ['Kalki', 'Oppenheimer', 'Avatar'],
    showtimes: ['10:45', '13:45', '16:45', '19:45'],
  },
]

export default function Movies() {
  const [mapItem, setMapItem] = useState(null)
  const fallbackImage =
    'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80'

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1920&q=80"
        title="Movies & Theaters"
        subtitle="Find now showing movies and showtimes"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slideUp">
          <h1 className="text-3xl font-bold text-slate-800">Movies</h1>
          <p className="mt-1 text-slate-600">Theater details, live screenings, and booking shortcuts</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {theaters.map((theater, i) => (
            <div key={theater.id} className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
              <Card className="h-full">
                <img
                  src={theater.image || fallbackImage}
                  alt={theater.name}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage
                  }}
                  className="h-48 w-full object-cover"
                />
                <div className="flex h-[calc(100%-12rem)] flex-col p-5">
                  <h3 className="text-lg font-semibold text-slate-800">{theater.name}</h3>
                  <p className="text-sm text-slate-600">{theater.location}</p>
                  <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {theater.rating} rating</p>
                  <p className="mt-3 text-sm text-slate-600">Premium movie experience with recliner seats, digital booking, and city-center access.</p>
                  <p className="mt-3 text-sm font-semibold text-slate-700">Now Showing:</p>
                  <ul className="mt-1 text-sm text-slate-600">
                    {theater.nowShowing.map((movie) => (
                      <li key={movie}>{'\u2022'} {movie}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-slate-700">Showtimes:</p>
                  <p className="text-sm text-slate-600">{theater.showtimes.join(' | ')}</p>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                    >
                      Book Ticket
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapItem({ lat: theater.lat, lng: theater.lng, title: theater.name })}
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
