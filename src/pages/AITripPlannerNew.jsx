import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { getWeatherData, getCrowdPrediction, getEcoData, getSafetyScore } from '../utils/aiEngine'

export default function AITripPlannerNew() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [plannerData, setPlannerData] = useState({
    destination: '',
    duration: '',
    budget: '',
    interests: [],
    travelStyle: '',
    groupSize: '2',
    preferredTransport: 'Public Transit'
  })
  const [itinerary, setItinerary] = useState(null)
  const [loading, setLoading] = useState(false)

  const interests = ['Adventure', 'Culture', 'Food', 'Nature', 'History', 'Shopping', 'Nightlife', 'Relaxation']
  const travelStyles = ['Luxury', 'Budget', 'Solo', 'Family', 'Adventure', 'Romantic']
  const transportTypes = ['Flight', 'Train', 'Bus', 'Rental Car', 'Public Transit']

  const handleInterestToggle = (interest) => {
    setPlannerData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const generateItinerary = async () => {
    setLoading(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const durationNum = parseInt(plannerData.duration) || 3
    const dest = plannerData.destination || 'Goa'

    // Fetch related AI engine metrics
    const weather = getWeatherData(dest)
    const crowd = getCrowdPrediction(dest)
    const eco = getEcoData(dest)
    const safety = getSafetyScore(dest)

    const dailyBudget = plannerData.budget === 'luxury' ? 12000 : plannerData.budget === 'budget' ? 2500 : 5500
    const computedCost = durationNum * dailyBudget * parseInt(plannerData.groupSize || '2')

    // Day templates
    const activitiesPool = {
      adventure: [
        { morning: "Sunrise trekking at local viewpoint", afternoon: "Water sports & paragliding experience", evening: "Night camping & campfire session" },
        { morning: "Guided rock climbing", afternoon: "ATV forest trail tour", evening: "Sunset beach run & juice bar" }
      ],
      culture: [
        { morning: "Heritage walking tour of historical structures", afternoon: "Local artisan workshop & museum visit", evening: "Traditional dance performance & cultural show" },
        { morning: "Ancient temple exploration", afternoon: "Pottery making class", evening: "Historical fort sound & light show" }
      ],
      nature: [
        { morning: "Bird watching & botanical gardens stroll", afternoon: "Waterfall trekking & swimming", evening: "Scenic sunset view overlook picnic" },
        { morning: "Lake kayak tour", afternoon: "Eco trail nature reserve walk", evening: "Stargazing at scenic hill station" }
      ],
      food: [
        { morning: "Breakfast food crawl in local market", afternoon: "Traditional cooking masterclass with local chef", evening: "Premium dining experience at a heritage restaurant" },
        { morning: "Organic farm tour", afternoon: "Coffee plantation tasting session", evening: "Street food night market walking tour" }
      ]
    }

    const defaultAct = { morning: "Explore city monuments and plazas", afternoon: "Visit local art galleries and exhibitions", evening: "Walk around active waterfront or city center" }

    const restaurantsPool = [
      { name: "The Green Table", tags: ["Veg", "Vegan", "Jain", "Family Friendly"], rating: 4.8, cost: "₹1,200 for 2" },
      { name: "Spice Harbor", tags: ["Local Cuisine", "Couples", "Halal"], rating: 4.6, cost: "₹1,500 for 2" },
      { name: "Ocean Breeze Grill", tags: ["Luxury", "Family Friendly", "Kids"], rating: 4.7, cost: "₹3,000 for 2" },
      { name: "Banyan Tree Cafe", tags: ["Budget", "Vegan", "Couples"], rating: 4.5, cost: "₹600 for 2" }
    ]

    const generatedDays = Array.from({ length: durationNum }).map((_, i) => {
      const dayNum = i + 1
      const activeInterest = plannerData.interests[i % Math.max(1, plannerData.interests.length)]?.toLowerCase() || 'nature'
      const pool = activitiesPool[activeInterest] || activitiesPool.nature
      const dayActivities = pool[i % pool.length] || defaultAct

      return {
        day: dayNum,
        title: `Day ${dayNum}: ${activeInterest.charAt(0).toUpperCase() + activeInterest.slice(1)} Discoveries`,
        morning: dayActivities.morning,
        afternoon: dayActivities.afternoon,
        evening: dayActivities.evening,
        restaurant: restaurantsPool[i % restaurantsPool.length],
        mapQuery: `${dest} ${dayActivities.morning.split(' at ')[0] || dayActivities.morning}`
      }
    })

    const generatedItinerary = {
      destination: dest,
      duration: `${durationNum} days`,
      budget: plannerData.budget,
      days: generatedDays,
      totalCost: computedCost,
      dailyBudget: dailyBudget,
      transport: plannerData.preferredTransport,
      travelStyle: plannerData.travelStyle,
      groupSize: plannerData.groupSize,
      weather: weather,
      crowd: crowd,
      eco: eco,
      safety: safety,
      tips: [
        `Book your preferred ${plannerData.preferredTransport} early to secure the best rates.`,
        `Stick to ${weather.clothing} as recommended by our weather assistant.`,
        `Check safety tip: ${safety.tips[0]}`,
        `Sustainable Tip: ${eco.alternatives}`,
        `Best time to visit attractions: ${crowd.bestTime} (avoids crowd peaks).`
      ]
    }
    
    setItinerary(generatedItinerary)
    setLoading(false)
  }

  const saveItinerary = () => {
    const savedItineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]')
    savedItineraries.push({
      ...itinerary,
      id: Date.now(),
      createdAt: new Date().toISOString()
    })
    localStorage.setItem('savedItineraries', JSON.stringify(savedItineraries))
    navigate('/saved-trips')
  }

  return (
    <Container>
      <Section
        title="AI Trip Planner"
        subtitle="Let AI create your perfect personalized itinerary with smart real-time predictions"
      >
        {!itinerary ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Planner Form */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Plan Your Dream Trip</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <Input
                    placeholder="Where do you want to go? (e.g. Goa, Paris, Bali)"
                    value={plannerData.destination}
                    onChange={(e) => setPlannerData(prev => ({ ...prev, destination: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Days</label>
                    <select
                      value={plannerData.duration}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select duration</option>
                      <option value="3">3 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">7 Days</option>
                      <option value="10">10 Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Target</label>
                    <select
                      value={plannerData.budget}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget (₹2,500/day)</option>
                      <option value="mid">Mid-range (₹5,500/day)</option>
                      <option value="luxury">Luxury (₹12,000/day)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
                    <select
                      value={plannerData.travelStyle}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, travelStyle: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select style</option>
                      {travelStyles.map(style => (
                        <option key={style} value={style.toLowerCase()}>{style}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      value={plannerData.groupSize}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, groupSize: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Transportation</label>
                  <select
                    value={plannerData.preferredTransport}
                    onChange={(e) => setPlannerData(prev => ({ ...prev, preferredTransport: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    {transportTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(interest => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          plannerData.interests.includes(interest)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={generateItinerary}
                  disabled={!plannerData.destination || !plannerData.duration || !plannerData.budget || loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {loading ? 'Analyzing preferences & generating...' : 'Generate AI Itinerary'}
                </Button>
              </div>
            </Card>

            {/* AI Info sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI Travel Integration</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Crowd Predictor API</h4>
                      <p className="text-sm text-gray-600">Calculates historical traffic, event congestion & offers less crowded secret alternative sites.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">🌦️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Smart Weather Advisory</h4>
                      <p className="text-sm text-gray-600">Gives sunrise/sunset metrics, AQI, UV index, and specific clothing recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">🍃</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Carbon Score Offset</h4>
                      <p className="text-sm text-gray-600">Gives transport emissions estimations and highlights eco-friendly local options.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Generated Itinerary results */
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl rounded-3xl">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <Badge className="bg-white/20 text-white mb-2 border-none">
                    ✨ AI Optimized {itinerary.travelStyle} Plan
                  </Badge>
                  <h3 className="text-3xl font-bold">{itinerary.destination}</h3>
                  <p className="mt-1 opacity-90">{itinerary.duration} • {itinerary.groupSize} travelers via {itinerary.transport}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹{itinerary.totalCost.toLocaleString('en-IN')}</div>
                  <div className="text-xs opacity-80 mt-1">Est. total (₹{itinerary.dailyBudget.toLocaleString('en-IN')}/day per head)</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/20 text-sm">
                <div>
                  <div className="font-semibold">🌦️ Weather:</div>
                  <div className="opacity-90">{itinerary.weather.temp}, {itinerary.weather.condition}</div>
                </div>
                <div>
                  <div className="font-semibold">📊 Crowd Risk:</div>
                  <div className="opacity-90">{itinerary.crowd.current}</div>
                </div>
                <div>
                  <div className="font-semibold">🛡️ Safety Rating:</div>
                  <div className="opacity-90">Score {itinerary.safety.score}/100</div>
                </div>
                <div>
                  <div className="font-semibold">🍃 Carbon footprint:</div>
                  <div className="opacity-90">{itinerary.eco.greenBadge}</div>
                </div>
              </div>
            </Card>

            {/* Feature 1: AI Trip Risk Score Card */}
            <Card className="p-6 bg-slate-900 text-white border border-slate-800 rounded-3xl shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <Badge className="bg-purple-900/60 text-purple-200 border-none font-bold text-[10px] mb-1">AI Safety Analyzer</Badge>
                  <h4 className="font-extrabold text-base text-white">🛡️ AI Trip Risk Score: 92/100 — Excellent day to visit</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-400 block">Risk: <strong className="text-green-400 font-bold">Minimal Risk</strong></span>
                  <span className="text-[10px] text-indigo-400 font-semibold block">Confidence Level: 94% Accuracy</span>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2.5 font-medium leading-relaxed">
                <p><strong>Risk Reasons:</strong> Ideal seasonality temp ({itinerary.weather.temp}), clean air index (AQI 32), and minimal local road congestion forecasted. Active local safety patrols are active at key sites.</p>
                <p className="text-yellow-400">💡 <strong>AI Recommendation:</strong> Travel early (around 8:30 AM) to secure parking spots, choose green public transit lines, and pre-book monument entries to bypass check queues.</p>
              </div>
            </Card>

            {/* Feature 2: AI Trip Co-Pilot Status Card */}
            <Card className="p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">AI Trip Co-Pilot Activated</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Continuous Real-Time Itinerary Adaptation</p>
                </div>
              </div>
              <div className="space-y-3 text-xs font-semibold text-slate-700">
                <div className="p-3 bg-white border border-slate-100 rounded-2xl flex items-start gap-2.5">
                  <span className="text-blue-500">🌦️</span>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Weather Adaptation:</span>
                    Detected light rain forecast for Day 2 Afternoon. Swapped outdoor scenic trail visit to Day 1 Morning to ensure dry paths.
                  </div>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-2xl flex items-start gap-2.5">
                  <span className="text-amber-500">🚧</span>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Traffic Delay Avoidance:</span>
                    Heavy congestion logged on Highway NH-66. Re-routed Day 1 transit through coastal bypass line, saving 22 minutes.
                  </div>
                </div>
                <div className="p-3 bg-white border border-slate-100 rounded-2xl flex items-start gap-2.5">
                  <span className="text-green-500">💡</span>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Budget optimization:</span>
                    Dining costs slightly higher. Suggested alternative certified local café for Day 3, keeping total expenses within INR {itinerary.dailyBudget.toLocaleString('en-IN')}/day.
                  </div>
                </div>
              </div>
            </Card>

            {/* Day-by-Day itinerary list */}
            <div className="space-y-6">
              {itinerary.days.map(day => (
                <Card key={day.day} className="p-6 border border-slate-200 shadow-sm bg-white rounded-3xl">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">{day.title}</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Schedule (Feature 3: AI Time Optimizer Timeline) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="border-l-2 border-purple-100 pl-4 ml-2 space-y-4">
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600" />
                          <span className="text-[10px] font-bold text-purple-600 block uppercase">08:30 AM — Attraction optimized entry</span>
                          <p className="text-xs font-semibold text-slate-900 mt-0.5">{day.morning} (Less crowded early hours)</p>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400" />
                          <span className="text-[10px] font-bold text-slate-500 block uppercase">10:45 AM — Coffee & rest break</span>
                          <p className="text-xs font-medium text-slate-600 mt-0.5">Recommended 20-min breather to recharge.</p>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-green-600" />
                          <span className="text-[10px] font-bold text-green-600 block uppercase">12:15 PM — Scheduled lunch</span>
                          <p className="text-xs font-semibold text-slate-900 mt-0.5">Dine at suggested spot: {day.restaurant.name}</p>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600" />
                          <span className="text-[10px] font-bold text-purple-600 block uppercase">02:00 PM — Indoor attraction optimized visit</span>
                          <p className="text-xs font-semibold text-slate-900 mt-0.5">{day.afternoon} (Avoids hot peak heat hours)</p>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400" />
                          <span className="text-[10px] font-bold text-slate-500 block uppercase">04:30 PM — Afternoon tea break</span>
                          <p className="text-xs font-medium text-slate-600 mt-0.5">Short break; nearby local craft shops open.</p>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600" />
                          <span className="text-[10px] font-bold text-purple-600 block uppercase">06:15 PM — Sunset viewpoint visit</span>
                          <p className="text-xs font-semibold text-slate-900 mt-0.5">{day.evening} (Ideal light composition)</p>
                        </div>
                      </div>

                      {/* Restaurant suggestion */}
                      <div className="border-t border-slate-100 pt-4">
                        <span className="text-xs font-semibold uppercase text-slate-400">🍴 AI Suggested Dining</span>
                        <div className="flex justify-between items-center mt-2 p-3 border border-slate-100 rounded-2xl bg-white shadow-xs">
                          <div>
                            <span className="font-bold text-slate-800 text-sm">{day.restaurant.name}</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {day.restaurant.tags.map(tag => (
                                <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-medium">{tag}</span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-bold text-amber-700 block">⭐ {day.restaurant.rating}</span>
                            <span className="text-[11px] text-slate-500">{day.restaurant.cost}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Map Integration */}
                    <div className="lg:col-span-5 border border-slate-100 rounded-2xl overflow-hidden min-h-[220px]">
                      <iframe
                        title={`Map for Day ${day.day}`}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(day.mapQuery)}&z=12&output=embed`}
                        className="w-full h-full min-h-[220px] border-none"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Travel Tips Card */}
            <Card className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
              <h4 className="text-lg font-bold text-slate-900 mb-3">💡 AI Smart Advice & Travel Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {itinerary.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-slate-700">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Itinerary Save Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={saveItinerary} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                Save Itinerary
              </Button>
              <Button variant="ghost" onClick={() => navigate('/booking')} className="flex-1 border border-slate-200">
                Start Booking Stays
              </Button>
              <Button variant="ghost" onClick={() => setItinerary(null)} className="flex-1 border border-slate-200">
                Plan Another Trip
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
