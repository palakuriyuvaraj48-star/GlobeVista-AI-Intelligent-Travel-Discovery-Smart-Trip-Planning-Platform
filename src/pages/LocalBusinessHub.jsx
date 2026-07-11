import { useState } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const businessUpdates = [
  {
    id: 1,
    name: 'Banyan Tree Café',
    category: 'Café',
    city: 'Goa',
    crowd: 'Low',
    wait: '2 mins',
    parking: '8 spots free',
    offer: '10% off for GlobeVista members using code QUIET10',
    status: 'Open',
    reason: 'Quiet hours'
  },
  {
    id: 2,
    name: 'Taj Mahal Monument',
    category: 'Attraction',
    city: 'Agra',
    crowd: 'High',
    wait: '45 mins',
    parking: 'East lot full (Use West gate)',
    offer: 'Free Audio Guide with online tickets',
    status: 'Open',
    reason: 'Weekend congestion'
  },
  {
    id: 3,
    name: 'Spice Harbor Eatery',
    category: 'Restaurant',
    city: 'Kochi',
    crowd: 'Moderate',
    wait: '12 mins',
    parking: 'Valet parking available',
    offer: 'Complimentary dessert with heritage meal booking',
    status: 'Open',
    reason: 'Dinner hour'
  },
  {
    id: 4,
    name: 'Calangute Parking Lot',
    category: 'Parking',
    city: 'Goa',
    crowd: 'High',
    wait: '15 mins wait',
    parking: '2 / 150 spots free',
    offer: 'Alternative: East Beach lot is 80% free',
    status: 'Restricted',
    reason: 'High beach traffic'
  }
]

export default function LocalBusinessHub() {
  const [city, setCity] = useState('Goa')
  const [searchCity, setSearchCity] = useState('Goa')

  const handleSearch = () => {
    if (!city.trim()) return
    setSearchCity(city)
  }

  // Filter updates based on search city
  const filteredUpdates = businessUpdates.filter(b => 
    b.city.toLowerCase() === searchCity.toLowerCase()
  )

  // AI intelligence combined alerts
  const aiAlerts = [
    { text: "☕ Cafe Central: This café is quiet right now. Grab a quick seat!", type: "info" },
    { text: "🏰 Taj Mahal: Visit after 5:30 PM for shorter queues.", type: "tip" },
    { text: "🚗 North Parking: Full. Use the East Entrance gate to avoid crowds.", type: "alert" },
    { text: "🏖️ Baga Beach: High tide incoming. Nearby spice garden has lower crowds.", type: "tip" }
  ]

  return (
    <Container className="py-12 max-w-5xl">
      <Section
        title="Local Business Hub"
        subtitle="Real-time crowd statuses, wait times, and exclusive discount updates verified directly by local merchants"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left panel: Search and AI combined recommendations */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-5 bg-white border border-slate-200 shadow-sm rounded-2xl">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Search Destination Hub</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                  placeholder="Enter city (e.g. Goa, Agra)"
                />
                <Button onClick={handleSearch} className="bg-slate-950 text-white py-1 px-3 text-xs rounded-xl">Search</Button>
              </div>
            </Card>

            <Card className="p-5 bg-purple-50/50 border border-purple-100 rounded-2xl">
              <h4 className="font-bold text-purple-950 text-sm mb-4">🤖 AI Business Advisor</h4>
              <div className="space-y-3">
                {aiAlerts.map((alert, idx) => (
                  <div key={idx} className="p-3 bg-white border border-purple-100 rounded-xl text-xs font-semibold leading-relaxed text-slate-700 flex gap-2">
                    <span className="text-purple-600 shrink-0">🎯</span>
                    <span>{alert.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Feature 3: Smart Travel Network Report Centre */}
            <Card className="p-5 bg-white border border-slate-200 shadow-sm rounded-2xl space-y-4">
              <div>
                <Badge className="bg-emerald-100 text-emerald-800 border-none font-bold text-[9px] mb-1">📡 Smart Travel Network</Badge>
                <h4 className="font-bold text-slate-800 text-sm">Community Alert Hub</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">Crowdsourced updates verified by AI scoring mechanisms.</p>
              </div>

              {/* Verified submissions list */}
              <div className="space-y-3.5 pt-2 border-t text-xs font-semibold text-slate-700">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-red-600">🚨 Long Queue Alert</span>
                    <span className="text-[9px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">98% Verified</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Baga Beach Water Sports counters are backed up (45 mins wait).</p>
                  <span className="text-[9px] text-slate-400 block font-bold">Reported by 4 travelers.</span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600">🚧 Temporary Closure</span>
                    <span className="text-[9px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">92% Verified</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">West Fort viewpoint path closed for maintenance till 5 PM.</p>
                  <span className="text-[9px] text-slate-400 block font-bold">Reported by 3 sources.</span>
                </div>
              </div>

              {/* Quick report button */}
              <div className="pt-2">
                <button
                  onClick={() => alert("🚨 Report Received! The AI engine is cross-checking with nearby traveler logs & GPS metadata.")}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition"
                >
                  📢 Submit Live Status Report
                </button>
              </div>
            </Card>
          </div>

          {/* Right panel: Live Business Updates */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 border-b pb-3 capitalize">Live merchant statuses in {searchCity}</h3>
            
            {filteredUpdates.length === 0 ? (
              <Card className="p-8 text-center bg-white border border-slate-200 rounded-2xl shadow-xs text-slate-400">
                <span className="text-5xl block mb-2">🏪</span>
                No local business updates currently logged for this city. Try Agra or Goa.
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredUpdates.map(update => (
                  <Card key={update.id} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-slate-100 text-slate-700 border-none text-[10px] font-bold py-0.5">{update.category}</Badge>
                          <h4 className="font-bold text-slate-900 text-base">{update.name}</h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 font-medium">Status: {update.reason}</p>
                      </div>
                      <Badge className={update.crowd === 'Low' ? 'bg-green-100 text-green-800 border-none font-bold' : update.crowd === 'Moderate' ? 'bg-amber-100 text-amber-800 border-none font-bold' : 'bg-red-100 text-red-800 border-none font-bold'}>
                        Crowd: {update.crowd}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-3 mb-4 text-xs font-semibold text-slate-500">
                      <div>🕒 Queue Wait: <span className="text-slate-800 font-bold block mt-0.5">{update.wait}</span></div>
                      <div>🚗 Parking Status: <span className="text-slate-800 font-bold block mt-0.5">{update.parking}</span></div>
                      <div>🏪 Merchant status: <span className="text-slate-800 font-bold block mt-0.5">{update.status}</span></div>
                    </div>

                    {update.offer && (
                      <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-3 text-xs font-bold text-indigo-900 flex justify-between items-center gap-4">
                        <span>🔥 Offer: {update.offer}</span>
                        <Badge className="bg-indigo-600 text-white border-none py-1 px-2.5 rounded-lg text-[9px] shrink-0 font-bold">Claim Offer</Badge>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </Container>
  )
}
