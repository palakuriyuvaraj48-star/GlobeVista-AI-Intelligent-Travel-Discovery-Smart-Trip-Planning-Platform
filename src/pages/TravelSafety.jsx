import { useState } from 'react'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { getSafetyScore } from '../utils/aiEngine'

export default function TravelSafety() {
  const [city, setCity] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [safety, setSafety] = useState(null)
  
  // Emergency assist triggers
  const [sosTriggered, setSosTriggered] = useState(false)
  const [offlineContactsVisible, setOfflineContactsVisible] = useState(false)

  const handleSearch = () => {
    if (!city.trim()) return
    const data = getSafetyScore(city)
    setSafety(data)
    setSearchCity(city)
  }

  const triggerSOS = () => {
    setSosTriggered(true)
    setTimeout(() => setSosTriggered(false), 5000)
  }

  return (
    <Container className="py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">🛡️ Safety & Emergency Hub</h1>
        <p className="text-lg text-slate-600">Access safety scores, warnings, local police/hospitals lists, and trigger instant SOS distress support.</p>
      </div>

      {/* SOS Alert Banner */}
      {sosTriggered && (
        <div className="mb-8 p-6 bg-red-600 border border-red-700 text-white rounded-3xl animate-bounce shadow-2xl text-center">
          <h2 className="text-2xl font-extrabold">🚨 SOS DISTRESS TRIGGERED! 🚨</h2>
          <p className="text-sm mt-2 font-bold opacity-95">Transmitting simulated GPS coordinates to local police authorities, medical response units, and your travel buddy emergency contacts.</p>
        </div>
      )}

      {/* SOS Distress Button & Offline Contacts Toggle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
        <button
          onClick={triggerSOS}
          className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl shadow-lg transition-transform active:scale-95 text-sm uppercase tracking-wider"
        >
          🚨 Trigger Instant SOS Distress
        </button>
        <button
          onClick={() => setOfflineContactsVisible(!offlineContactsVisible)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-2xl shadow-md text-sm"
        >
          {offlineContactsVisible ? 'Hide Offline Emergency List' : '📖 View Offline Emergency Contacts'}
        </button>
      </div>

      {/* Offline Emergency Contacts List */}
      {offlineContactsVisible && (
        <Card className="p-6 bg-slate-50 border border-slate-300 rounded-3xl max-w-2xl mx-auto mb-8 animate-fadeIn">
          <h4 className="font-bold text-slate-900 text-sm mb-3 border-b pb-2">Offline Emergency Help List (Pre-loaded)</h4>
          <div className="space-y-3.5 text-xs text-slate-700 font-semibold">
            <div className="flex justify-between">
              <span>🚓 Police Emergency Hotline:</span>
              <span className="text-slate-900 font-extrabold">100 / 112</span>
            </div>
            <div className="flex justify-between">
              <span>🚑 Medical Ambulance:</span>
              <span className="text-slate-900 font-extrabold">102 / 108</span>
            </div>
            <div className="flex justify-between">
              <span>🚒 Fire Department Dispatch:</span>
              <span className="text-slate-900 font-extrabold">101</span>
            </div>
            <div className="flex justify-between">
              <span>🏢 GlobeVista Global SOS Center:</span>
              <span className="text-purple-600 font-extrabold">+1-800-GLOBE-SOS</span>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <span>🇺🇸 US Consulate General Liaison:</span>
              <span className="text-slate-900 font-extrabold">+91-11-2419-8000</span>
            </div>
          </div>
        </Card>
      )}

      {/* Search Bar */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-8 max-w-2xl mx-auto">
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Search city (e.g. Paris, Goa, Bali)..." 
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
            Assess Safety
          </button>
        </div>
      </div>

      {safety && (
        <div className="space-y-8 animate-fadeIn">
          {/* Top Score Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[200px]">
              <div className="absolute right-4 top-4 text-7xl opacity-20">🛡️</div>
              <div>
                <Badge className="bg-white/20 text-white border-none font-bold text-xs mb-2">Overall Safety Rating</Badge>
                <h3 className="text-4xl font-extrabold capitalize">{searchCity}</h3>
              </div>
              <div className="mt-4">
                <span className="text-5xl font-light">{safety.score}</span>
                <span className="text-xl opacity-90 font-medium"> / 100</span>
              </div>
            </Card>

            {/* Emergency Contacts card */}
            <Card className="p-6 bg-slate-900 text-white rounded-3xl flex flex-col justify-between md:col-span-2">
              <div>
                <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider mb-2">🚨 Local Emergency Numbers</h4>
                <div className="text-xl font-bold text-red-400 my-3">{safety.emergencyNumbers}</div>
                <p className="text-xs text-slate-400">Keep these numbers saved on your phone and written on physical paper in case of emergency.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">🚨 Police Stations:</span>
                  <p className="font-bold text-slate-200 mt-1">{safety.policeStations.join(', ')}</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">🏥 Nearby Hospitals:</span>
                  <p className="font-bold text-slate-200 mt-1">{safety.hospitals.join(', ')}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Nearest services (Feature 8 requirements) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">🏥 Nearest Medical Pharmacy</h4>
              <span className="text-xs font-bold text-slate-800 block">Sanjivani pharmacy (24 Hours)</span>
              <p className="text-xs text-slate-500 mt-1 font-semibold">Distance: 0.4 km away from your checked-in hotel.</p>
              <div className="mt-4 pt-3 border-t">
                <a href="https://maps.google.com/?q=pharmacy" target="_blank" rel="noreferrer" className="text-xs text-purple-600 font-bold hover:underline">Get Directions ↗</a>
              </div>
            </Card>

            <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">🏢 Embassy / Consulate Office</h4>
              <span className="text-xs font-bold text-slate-800 block">Consulate General Office</span>
              <p className="text-xs text-slate-500 mt-1 font-semibold">Liaison helpline: +91-11-2419-8000</p>
              <div className="mt-4 pt-3 border-t">
                <a href="https://maps.google.com/?q=embassy" target="_blank" rel="noreferrer" className="text-xs text-purple-600 font-bold hover:underline">Get Directions ↗</a>
              </div>
            </Card>

            <Card className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h4 className="font-bold text-slate-800 text-sm mb-3">🚒 Nearest Fire Department</h4>
              <span className="text-xs font-bold text-slate-800 block">Municipal Fire Control Station</span>
              <p className="text-xs text-slate-500 mt-1 font-semibold">Dispatch hotline: 101</p>
              <div className="mt-4 pt-3 border-t">
                <a href="https://maps.google.com/?q=fire+station" target="_blank" rel="noreferrer" className="text-xs text-purple-600 font-bold hover:underline">Get Directions ↗</a>
              </div>
            </Card>
          </div>

          {/* Safety Categories Detail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Crime Index', val: safety.crime, rating: 'Crime awareness' },
              { label: 'Women Safety', val: safety.women, rating: 'Local support' },
              { label: 'Night Safety', val: safety.night, rating: 'Pedestrian lighting' },
              { label: 'Road Safety', val: safety.road, rating: 'Traffic & scooters' },
              { label: 'Weather Risks', val: safety.weatherRisks, rating: 'Seasonal alerts' }
            ].map((cat, idx) => (
              <Card key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{cat.label}</span>
                <span className="text-sm font-bold text-slate-800 mt-2 block leading-snug">{cat.val}</span>
                <span className="text-xs text-slate-500 mt-1 block font-medium">{cat.rating}</span>
              </Card>
            ))}
          </div>

          {/* Warnings & Disaster Alerts */}
          {safety.alert && (
            <Card className="p-5 border-l-4 border-l-rose-500 bg-rose-50/40 border border-slate-200 rounded-2xl">
              <h4 className="font-bold text-rose-950 text-sm mb-1">🚨 Safety Alert & Warnings</h4>
              <p className="text-sm text-rose-800 leading-relaxed font-semibold">{safety.alert}</p>
            </Card>
          )}

          {/* Safety Tips List */}
          <Card className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
            <h4 className="font-bold text-slate-800 text-sm mb-4">💡 Local Safety Guidelines & Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {safety.tips.map((tip, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span className="text-sm text-slate-700 leading-relaxed font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {!safety && (
        <div className="text-center py-16 text-slate-400">
          <span className="text-6xl block mb-4 animate-bounce">🛡️</span>
          Enter a destination city above to run safety assessment scans.
        </div>
      )}
    </Container>
  )
}