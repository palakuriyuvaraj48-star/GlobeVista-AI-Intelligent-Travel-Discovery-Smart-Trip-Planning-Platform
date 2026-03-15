import { useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const tripMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const quickActions = [
  { label: 'Plan My Trip', to: '/ai-trip-planner' },
  { label: 'Find Destinations', to: '/places' },
  { label: 'Explore Restaurants', to: '/restaurants' },
  { label: 'Discover Events', to: '/events' },
  { label: 'Travel Map', to: '/travel-map' },
]

const quickQueries = [
  'Best places in Goa',
  '3 day trip plan for Bali',
  'Cheap hotels in Dubai',
  'Top restaurants in Paris',
]

const aiRecommendations = [
  {
    name: 'Bali, Indonesia',
    description: 'Tropical beaches, temples, and vibrant nightlife.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
  },
  {
    name: 'Manali, India',
    description: 'Snowy escapes with curated adventure experiences.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  },
  {
    name: 'Paris, France',
    description: 'Iconic landmarks, art districts, and romance.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
  },
  {
    name: 'Bangkok, Thailand',
    description: 'Food trails, floating markets, and nightlife.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200',
  },
  {
    name: 'Tokyo, Japan',
    description: 'Futuristic city meets timeless tradition.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200',
  },
]

const defaultItinerary = [
  { day: 1, title: 'Arrival and hotel check-in', location: 'Goa, India', lat: 15.2626, lng: 73.9243 },
  { day: 2, title: 'Visit major attractions', location: 'Old Goa', lat: 15.5009, lng: 73.9129 },
  { day: 3, title: 'Explore local restaurants', location: 'Panjim', lat: 15.4909, lng: 73.8278 },
  { day: 4, title: 'Cultural events and nightlife', location: 'Anjuna', lat: 15.5736, lng: 73.7393 },
  { day: 5, title: 'Relaxation and departure', location: 'Calangute', lat: 15.544, lng: 73.7619 },
]

function TripTimeline({ itinerary }) {
  return (
    <div className="space-y-3">
      {itinerary.map((step) => (
        <div key={step.day} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-semibold text-white">
            {step.day}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{step.title}</p>
            <p className="text-xs text-slate-500">{step.location}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function VoiceAssistant() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [tripForm, setTripForm] = useState({
    destination: '',
    days: '',
    budget: '',
    style: 'Relax',
  })
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'I can help you plan trips, discover places, and build itineraries.',
    },
  ])
  const [itinerary, setItinerary] = useState(defaultItinerary)
  const mapCenter = useMemo(() => {
    if (!itinerary.length) return [20.5937, 78.9629]
    return [itinerary[0].lat, itinerary[0].lng]
  }, [itinerary])
  const mapRef = useRef(null)

  const handleSend = (text) => {
    const query = text.trim()
    if (!query) return
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: 'user', text: query },
      {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        text: 'For a 3-day Bali trip, explore Ubud temples, enjoy beach sunsets, visit local food markets, and relax at Seminyak Beach.',
      },
    ])
    setInput('')
  }

  const handleGenerateTrip = () => {
    setItinerary(defaultItinerary)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-110"
        aria-label="Ask GlobeVista AI"
      >
        <span className="text-base">✨</span>
        Ask GlobeVista AI
      </button>

      <div
        className={`fixed right-0 top-0 z-50 h-full w-[420px] max-w-full bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">GlobeVista AI Travel Co-Pilot</h2>
              <p className="mt-2 text-sm text-slate-600">
                Your intelligent assistant for discovering destinations, planning trips, and exploring experiences.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={() => navigate(action.to)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {action.label}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">AI Chat</p>
            <div className="mt-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === 'assistant'
                      ? 'bg-white text-slate-700 shadow-sm'
                      : 'ml-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickQueries.map((query) => (
                <button
                  key={query}
                  type="button"
                  onClick={() => handleSend(query)}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  {query}
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleSend(input)
                }}
                placeholder="Ask anything about travel..."
                className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => handleSend(input)}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Send
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Plan a Trip Instantly</h3>
            <div className="mt-4 grid gap-3">
              <input
                type="text"
                placeholder="Destination"
                value={tripForm.destination}
                onChange={(event) => setTripForm((current) => ({ ...current, destination: event.target.value }))}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <input
                type="number"
                placeholder="Trip Days"
                value={tripForm.days}
                onChange={(event) => setTripForm((current) => ({ ...current, days: event.target.value }))}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Budget"
                value={tripForm.budget}
                onChange={(event) => setTripForm((current) => ({ ...current, budget: event.target.value }))}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              />
              <select
                value={tripForm.style}
                onChange={(event) => setTripForm((current) => ({ ...current, style: event.target.value }))}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
              >
                <option>Relax</option>
                <option>Adventure</option>
                <option>Food</option>
                <option>Nightlife</option>
                <option>Nature</option>
              </select>
              <button
                type="button"
                onClick={handleGenerateTrip}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Generate AI Trip
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">AI Itinerary Timeline</h3>
            <div className="mt-4">
              <TripTimeline itinerary={itinerary} />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">AI Map Visualization</h3>
            <div className="mt-4 h-48 overflow-hidden rounded-2xl border border-slate-200">
              <MapContainer
                center={mapCenter}
                zoom={6}
                scrollWheelZoom={false}
                className="h-full w-full"
                whenCreated={(map) => {
                  mapRef.current = map
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={itinerary.map((step) => [step.lat, step.lng])} color="#7c3aed" weight={3} />
                {itinerary.map((step) => (
                  <Marker key={step.day} position={[step.lat, step.lng]} icon={tripMarkerIcon}>
                    <Popup>
                      <div className="text-xs">
                        <p className="font-semibold text-slate-900">Day {step.day}</p>
                        <p className="text-slate-600">{step.title}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">Recommended by GlobeVista AI</h3>
            <div className="mt-4 grid gap-4">
              {aiRecommendations.map((place) => (
                <div key={place.name} className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
                  <img src={place.image} alt={place.name} className="h-32 w-full rounded-t-2xl object-cover" />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-900">{place.name}</h4>
                    <p className="mt-1 text-xs text-slate-600">{place.description}</p>
                    <Link
                      to="/places"
                      className="mt-3 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
