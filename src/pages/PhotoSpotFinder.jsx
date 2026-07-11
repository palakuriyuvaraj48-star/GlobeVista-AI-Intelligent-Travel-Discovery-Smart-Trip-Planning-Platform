import { useState } from 'react'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { getPhotoSpots } from '../utils/aiEngine'

export default function PhotoSpotFinder() {
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [spots, setSpots] = useState(null)

  const handleSearch = () => {
    if (!city.trim()) return
    const data = getPhotoSpots(city)
    setSpots(data)
    setSearchCity(city)
  }

  return (
    <Container className="py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">📸 AI Photo Spot Finder</h1>
        <p className="text-lg text-slate-600">Discover the most scenic views, hidden photo angles, sunrise/sunset vantage points, and drone-friendly zones.</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-8 max-w-2xl mx-auto">
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Search destination (e.g. Paris, Goa, Bali)..." 
            className="flex-1 p-3 rounded-xl border border-slate-300 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-medium text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch()
            }}
          />
          <button 
            onClick={handleSearch}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition shadow-md"
          >
            Find Spots
          </button>
        </div>
      </div>

      {spots && (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-xl font-bold text-slate-800 border-b pb-3 capitalize">Recommended Spots in {searchCity}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spots.map((spot, index) => (
              <Card key={index} className="overflow-hidden bg-white border border-slate-200 shadow-sm rounded-3xl hover:shadow-lg transition-shadow">
                <div className="h-52 w-full overflow-hidden relative">
                  <img src={spot.image} alt={spot.name} className="h-full w-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/75 text-white border-none font-bold text-xs">
                      {spot.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-bold text-slate-900">{spot.name}</h3>
                    <Badge className="bg-purple-50 text-purple-700 border border-purple-100 font-semibold shrink-0 text-xs">
                      {spot.difficulty} Access
                    </Badge>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{spot.description}</p>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-4 text-xs font-semibold text-slate-500">
                    <div className="flex justify-between">
                      <span>⏰ Best Photo Time:</span>
                      <span className="text-slate-800">{spot.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🌅 Sunrise / Sunset:</span>
                      <span className="text-slate-800">6:12 AM / 6:45 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>✨ Golden / Blue Hour:</span>
                      <span className="text-slate-800">5:30-6:30 PM / 6:45-7:10 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>📐 Best Camera Angle:</span>
                      <span className="text-slate-800">Low-angle reflection perspective</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🌦️ Weather Suitability:</span>
                      <span className="text-emerald-600 font-bold">🌤️ 95% Ideal (Clear Golden Skies)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>📸 Photography Tip:</span>
                      <span className="text-slate-800 italic">Use ND filters to smooth water/crowd movement</span>
                    </div>
                    <div className="flex justify-between">
                      <span>📍 Coordinates:</span>
                      <span className="text-slate-800 font-mono">{spot.coordinates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🚁 Drone Regulations:</span>
                      <span className="text-slate-800">{spot.drone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🚶 Distance / Reach:</span>
                      <span className="text-slate-800">{spot.distance}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(spot.name + ', ' + searchCity)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-slate-900 text-white font-bold py-2.5 rounded-xl text-xs hover:bg-slate-800 transition"
                    >
                      Open Google Maps Navigation ↗
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {!spots && (
        <div className="text-center py-16 text-slate-400">
          <span className="text-6xl block mb-4 animate-bounce">📸</span>
          Enter a destination city above to identify premium photo angles.
        </div>
      )}
    </Container>
  )
}