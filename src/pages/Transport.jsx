import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { getTransportAssistant } from '../utils/aiEngine'

const transportOptions = [
  {
    id: 1,
    type: 'Flight',
    name: 'IndiGo Airlines',
    route: 'Delhi to Mumbai',
    price: 4500,
    duration: '2h 15m',
    departure: '08:00',
    arrival: '10:15',
    image: 'https://images.unsplash.com/photo-1436491865336-16308ab17c0c?w=400',
    rating: 4.2
  },
  {
    id: 2,
    type: 'Train',
    name: 'Rajdhani Express',
    route: 'Delhi to Mumbai',
    price: 3590,
    duration: '16h 00m',
    departure: '17:00',
    arrival: '09:00',
    image: 'https://images.unsplash.com/photo-1474224017426-592dfe62d83f?w=400',
    rating: 4.5
  },
  {
    id: 3,
    type: 'Bus',
    name: 'Volvo Luxury Bus',
    route: 'Delhi to Jaipur',
    price: 800,
    duration: '5h 30m',
    departure: '06:00',
    arrival: '11:30',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fb60a?w=400',
    rating: 4.0
  },
  {
    id: 4,
    type: 'Car Rental',
    name: 'Toyota Innova',
    route: 'Delhi to Agra',
    price: 3500,
    duration: '3h 00m',
    departure: 'Flexible',
    border: '🍃 Eco Certified',
    arrival: 'Flexible',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400',
    rating: 4.6
  }
]

export default function Transport() {
  const { t } = useTranslation()
  const [activeMode, setActiveMode] = useState('book') // 'book' or 'assistant'
  const [routePref, setRoutePref] = useState('fastest')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  
  // Live assistant states
  const [searchQuery, setSearchQuery] = useState('')
  const [assistantData, setAssistantData] = useState(null)

  const handleSearchBooking = () => {
    // Standard mock search logic
  }

  const handleSearchAssistant = () => {
    if (!searchQuery.trim()) return
    const data = getTransportAssistant(searchQuery)
    setAssistantData(data)
  }

  const filteredOptions = transportOptions.filter(option => {
    const matchesFrom = !from || option.route.toLowerCase().includes(from.toLowerCase())
    const matchesTo = !to || option.route.toLowerCase().includes(to.toLowerCase())
    return matchesFrom && matchesTo
  })

  return (
    <Container>
      <Section
        title="Transportation Hub"
        subtitle="Book standard transport or consult our live AI route assistant"
      >
        {/* Toggle Mode */}
        <div className="flex gap-4 mb-8 border-b pb-4">
          <button
            onClick={() => setActiveMode('book')}
            className={`pb-2 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeMode === 'book'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            ✈️ Book Flights, Trains & Buses
          </button>
          <button
            onClick={() => setActiveMode('assistant')}
            className={`pb-2 px-4 font-bold text-sm border-b-2 transition-colors ${
              activeMode === 'assistant'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            🤖 AI Live Route Assistant
          </button>
        </div>

        {activeMode === 'book' ? (
          <>
            {/* Search Booking Form */}
            <Card className="p-6 mb-8 bg-white border border-slate-200 shadow-sm rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  placeholder="From (e.g. Delhi)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <Input
                  placeholder="To (e.g. Mumbai)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Button onClick={handleSearchBooking} className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl">
                  Search Routes
                </Button>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-4">
              {filteredOptions.map(option => (
                <Card key={option.id} className="overflow-hidden bg-white border border-slate-200 shadow-xs rounded-3xl hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={option.image}
                        alt={option.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="capitalize bg-purple-50 text-purple-700 border border-purple-100 font-semibold">{option.type}</Badge>
                            <h3 className="text-xl font-bold text-slate-900">{option.name}</h3>
                          </div>
                          <p className="text-sm font-semibold text-slate-600">{option.route}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">₹{option.price}</div>
                          <div className="text-xs text-slate-500 font-medium">per traveler</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                        <div>
                          <p className="text-xs font-semibold text-slate-400">DURATION</p>
                          <p className="font-bold text-slate-800 mt-1">{option.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">DEPARTURE</p>
                          <p className="font-bold text-slate-800 mt-1">{option.departure}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">ARRIVAL</p>
                          <p className="font-bold text-slate-800 mt-1">{option.arrival}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-400">RATING</p>
                          <p className="font-bold text-slate-800 mt-1">⭐ {option.rating}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link to={`/booking`} className="flex-1">
                          <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-xl text-xs">Book Seat</Button>
                        </Link>
                        {option.border && <Badge className="bg-emerald-100 text-emerald-800 font-bold border-none py-1.5 px-3">{option.border}</Badge>}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Live Route Assistant Tab */
          <div className="space-y-6 animate-fadeIn">
            <Card className="p-6 bg-white border border-slate-200 shadow-sm rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Consult Transit Co-pilot</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Where are you navigating? (e.g. Paris, Goa, Bali)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 p-3 rounded-xl border border-slate-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchAssistant()
                  }}
                />
                <button
                  onClick={handleSearchAssistant}
                  className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition shadow-md"
                >
                  Consult AI
                </button>
              </div>
            </Card>

            {assistantData && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                {/* Route detail parameters */}
                <div className="md:col-span-2 space-y-4">
                  <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-3">🚶 Walking Guide</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{assistantData.walking}</p>
                  </Card>

                  <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-3">🚌 Local Bus Network</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{assistantData.bus}</p>
                  </Card>

                  <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-3">🚇 Metro Line Maps</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{assistantData.metro}</p>
                  </Card>

                  <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-3">🚗 Parking Availability</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{assistantData.parking}</p>
                  </Card>
                </div>

                {/* Estimate parameters (Feature 2: Smart Route Planner) */}
                <div className="space-y-4">
                  <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">🛣️ Route Preference</label>
                    <select
                      value={routePref}
                      onChange={(e) => setRoutePref(e.target.value)}
                      className="w-full p-2.5 border rounded-xl text-xs outline-none focus:ring-2 focus:ring-purple-500 font-bold mb-4"
                    >
                      <option value="fastest">⚡ Fastest Route</option>
                      <option value="least-crowded">👥 Least Crowded Route</option>
                      <option value="scenic">🏞️ Most Scenic Route</option>
                      <option value="family">👨‍👩‍👦 Family-Friendly Route</option>
                      <option value="accessible">♿ Wheelchair-Accessible Route</option>
                      <option value="budget">💰 Budget-Friendly Route</option>
                      <option value="eco">🍃 Eco-Friendly Route</option>
                    </select>

                    <div className="space-y-3 text-xs font-semibold text-slate-600">
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Total Travel Time:</span>
                        <span className="text-slate-900 font-bold">
                          {routePref === 'fastest' ? '18 mins' : routePref === 'scenic' ? '25 mins' : '22 mins'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Route Distance:</span>
                        <span className="text-slate-900 font-bold">
                          {routePref === 'fastest' ? '6.2 km' : routePref === 'scenic' ? '8.5 km' : '7.1 km'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Road Traffic Density:</span>
                        <span className="text-slate-900 font-bold">
                          {routePref === 'fastest' ? '🚗 Minimal (Green)' : routePref === 'eco' ? '🚗 Moderate (Bus priority)' : '🚗 Very Low'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Walking Difficulty:</span>
                        <span className="text-slate-900 font-bold">
                          {routePref === 'scenic' ? 'Moderate scenic walking' : 'Easy flat walking'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>♿ Accessibility Info:</span>
                        <span className="text-purple-600 font-bold">
                          {routePref === 'accessible' ? '♿ 100% accessible ramps' : '♿ Standard accessible paths'}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5 bg-indigo-50/40 border border-indigo-100 rounded-2xl shadow-xs">
                    <h4 className="font-bold text-slate-900 text-sm mb-4">💰 Fare & Ride Estimates</h4>
                    
                    <div className="space-y-3 text-xs font-semibold text-slate-600">
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Traditional Taxi:</span>
                        <span className="text-slate-900">{assistantData.taxi}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Ridesharing Apps (Uber/Grab):</span>
                        <span className="text-slate-900">{assistantData.rideshare}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2 border-slate-100">
                        <span>Road Traffic Density:</span>
                        <span className="text-slate-900">{assistantData.traffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Est. Travel Time:</span>
                        <span className="text-indigo-600 font-extrabold">{assistantData.travelTime}</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border border-slate-200 rounded-2xl bg-white">
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2">📍 Live Directions</h4>
                    <div className="h-40 rounded-xl overflow-hidden">
                      <iframe
                        title="Directions Map"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(searchQuery + ' center transit')}&z=13&output=embed`}
                        className="w-full h-full border-none"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {!assistantData && (
              <div className="text-center py-12 text-slate-400">
                <span className="text-6xl block mb-4 animate-pulse">🚗</span>
                Enter a city above to fetch real-time navigation paths and pricing index.
              </div>
            )}
          </div>
        )}
      </Section>
    </Container>
  )
}
