import { useState, useMemo } from 'react'
import Card from '../components/Card'
import { useJsApiLoader, GoogleMap, DirectionsRenderer } from '@react-google-maps/api'

const options = [
  { id: 'cab', name: 'Cab', desc: 'Book taxis and cabs for city and airport transfers.' },
  { id: 'bike', name: 'Bike rental', desc: 'Two-wheeler rentals for short trips.' },
  { id: 'car', name: 'Self-drive car', desc: 'Rent a car and drive yourself.' },
  { id: 'metro', name: 'Metro', desc: 'Public metro in major cities.' },
  { id: 'flight', name: 'Flight booking', desc: 'Book flights for long-distance travel.' },
]

const containerStyle = { width: '100%', height: '350px' }

function RoutePlannerMap({ origin, destination, showRoute }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: apiKey })
  const [directions, setDirections] = useState(null)

  if (!showRoute || !origin || !destination) {
    return (
      <div className="h-[350px] rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
        Enter origin and destination, then click Show route. Add VITE_GOOGLE_MAPS_API_KEY for map.
      </div>
    )
  }
  if (!apiKey) {
    return (
      <div className="h-[350px] rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
        Set VITE_GOOGLE_MAPS_API_KEY in .env to use the route planner.
      </div>
    )
  }
  if (!isLoaded) {
    return <div className="h-[350px] rounded-2xl bg-slate-100 flex items-center justify-center">Loading map...</div>
  }
  return (
    <DirectionsMap origin={origin} destination={destination} containerStyle={containerStyle} setDirections={setDirections}>
      {directions && <DirectionsRenderer directions={directions} />}
    </DirectionsMap>
  )
}

function DirectionsMap({ origin, destination, containerStyle, setDirections, children }) {
  const center = useMemo(() => ({ lat: 26.9124, lng: 75.7873 }), [])
  const onLoad = () => {
    const service = new window.google.maps.DirectionsService()
    service.route(
      { origin, destination, travelMode: window.google.maps.TravelMode.DRIVING },
      (result, status) => { if (status === 'OK') setDirections(result) }
    )
  }
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad}>
      {children}
    </GoogleMap>
  )
}

export default function Transportation() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [showRoute, setShowRoute] = useState(false)

  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920"
          alt="Transportation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Route Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Transportation</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Cab, bike, car, metro, flight—and a route planner built for airport-to-hotel clarity.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {options.map((opt) => (
          <Card key={opt.id} className="p-5">
            <h3 className="font-semibold text-slate-800">{opt.name}</h3>
            <p className="text-slate-600 text-sm mt-1">{opt.desc}</p>
          </Card>
        ))}
      </div>
      <Card className="p-6">
        <h2 className="font-semibold text-slate-800 mb-4">Google Directions - Route planner (airport to hotel)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Origin (e.g. airport)</label>
            <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="e.g. Jaipur Airport" className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Destination (e.g. hotel)</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Rambagh Palace" className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>
        <button type="button" onClick={() => setShowRoute(true)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium hover:opacity-90">
          Show route
        </button>
        <div className="mt-6 rounded-2xl overflow-hidden">
          <RoutePlannerMap origin={origin} destination={destination} showRoute={showRoute} />
        </div>
      </Card>
      </section>
    </div>
  )
}
