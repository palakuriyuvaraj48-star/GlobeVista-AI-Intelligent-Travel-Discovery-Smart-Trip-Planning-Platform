import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

export default function AITripPlannerNew() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [plannerData, setPlannerData] = useState({
    destination: '',
    duration: '',
    budget: '',
    interests: [],
    travelStyle: '',
    groupSize: '2'
  })
  const [itinerary, setItinerary] = useState(null)
  const [loading, setLoading] = useState(false)

  const interests = ['Adventure', 'Culture', 'Food', 'Nature', 'History', 'Shopping', 'Nightlife', 'Relaxation']
  const travelStyles = ['Budget', 'Mid-range', 'Luxury', 'Backpacker', 'Family-friendly']

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
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const durationNum = parseInt(plannerData.duration) || 3
    let computedCost = 15000
    if (plannerData.destination.toLowerCase() === 'bali' && durationNum === 5) {
      computedCost = 50000
    } else {
      computedCost = durationNum * (plannerData.budget === 'luxury' ? 10000 : plannerData.budget === 'budget' ? 3000 : 6000)
    }

    const generatedDays = Array.from({ length: durationNum }).map((_, i) => {
      const day = i + 1
      if (day === 1) return {
        day, title: 'Arrival & City Exploration', activities: [
          { time: '9:00 AM', activity: 'Airport pickup and hotel check-in', cost: 0 },
          { time: '1:00 PM', activity: 'Lunch at local restaurant', cost: 800 },
          { time: '3:00 PM', activity: 'Visit main attractions', cost: 1000 },
          { time: '7:00 PM', activity: 'Welcome dinner', cost: 1500 }
        ]
      }
      if (day === durationNum) return {
        day, title: 'Farewell & Departure', activities: [
          { time: '9:00 AM', activity: 'Breakfast and leisure', cost: 500 },
          { time: '12:00 PM', activity: 'Last minute shopping', cost: 2000 },
          { time: '3:00 PM', activity: 'Transfer to airport', cost: 500 }
        ]
      }
      return {
        day, title: 'Local Experiences', activities: [
          { time: '9:00 AM', activity: 'Guided morning tour', cost: 1200 },
          { time: '1:00 PM', activity: 'Traditional lunch', cost: 600 },
          { time: '3:00 PM', activity: 'Museum and cultural sites', cost: 800 },
          { time: '7:00 PM', activity: 'Evening entertainment', cost: 1800 }
        ]
      }
    })

    const generatedItinerary = {
      destination: plannerData.destination,
      duration: plannerData.duration,
      budget: plannerData.budget,
      days: generatedDays,
      totalCost: computedCost,
      tips: [
        'Book accommodations in advance for better rates',
        'Try local street food for authentic experiences',
        'Use public transport to save money',
        'Learn basic local phrases',
        'Keep copies of important documents'
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
        subtitle="Let AI create your perfect personalized itinerary"
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
                    placeholder="Where do you want to go?"
                    value={plannerData.destination}
                    onChange={(e) => setPlannerData(prev => ({ ...prev, destination: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                    <select
                      value={plannerData.duration}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select duration</option>
                      <option value="3 days">3 Days</option>
                      <option value="5 days">5 Days</option>
                      <option value="7 days">1 Week</option>
                      <option value="10 days">10 Days</option>
                      <option value="14 days">2 Weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <select
                      value={plannerData.budget}
                      onChange={(e) => setPlannerData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget (₹5,000 - ₹10,000)</option>
                      <option value="mid">Mid-range (₹10,000 - ₹25,000)</option>
                      <option value="luxury">Luxury (₹25,000+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(interest => (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          plannerData.interests.includes(interest)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
                  <select
                    value={plannerData.travelStyle}
                    onChange={(e) => setPlannerData(prev => ({ ...prev, travelStyle: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select travel style</option>
                    {travelStyles.map(style => (
                      <option key={style} value={style.toLowerCase()}>{style}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <select
                    value={plannerData.groupSize}
                    onChange={(e) => setPlannerData(prev => ({ ...prev, groupSize: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="1">Solo Traveler</option>
                    <option value="2">Couple</option>
                    <option value="3-4">Small Group (3-4)</option>
                    <option value="5+">Large Group (5+)</option>
                  </select>
                </div>

                <Button
                  onClick={generateItinerary}
                  disabled={!plannerData.destination || !plannerData.duration || !plannerData.budget || loading}
                  className="w-full"
                >
                  {loading ? 'Generating Itinerary...' : 'Generate AI Itinerary'}
                </Button>
              </div>
            </Card>

            {/* AI Features */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Smart Recommendations</h4>
                      <p className="text-sm text-gray-600">AI analyzes your preferences to suggest perfect destinations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">📅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Optimized Schedule</h4>
                      <p className="text-sm text-gray-600">AI creates efficient itineraries maximizing your time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Budget Optimization</h4>
                      <p className="text-sm text-gray-600">AI finds the best experiences within your budget</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Popular Itineraries</h3>
                <div className="space-y-3">
                  {[
                    { destination: 'Paris', duration: '5 days', style: 'Romantic' },
                    { destination: 'Tokyo', duration: '7 days', style: 'Cultural' },
                    { destination: 'Bali', duration: '4 days', style: 'Relaxation' }
                  ].map((popular, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{popular.destination}</h4>
                        <p className="text-sm text-gray-600">{popular.duration} • {popular.style}</p>
                      </div>
                      <Button variant="ghost" size="sm">Use Template</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Generated Itinerary */
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Your AI-Generated Itinerary</h3>
              <p className="text-xl mb-4">{itinerary.destination} • {itinerary.duration}</p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold">₹{itinerary.totalCost.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Estimated Cost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{itinerary.days.length}</div>
                  <div className="text-sm opacity-90">Days Planned</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{itinerary.days.reduce((sum, day) => sum + day.activities.length, 0)}</div>
                  <div className="text-sm opacity-90">Activities</div>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              {itinerary.days.map(day => (
                <Card key={day.day} className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Day {day.day}: {day.title}</h4>
                  <div className="space-y-3">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium text-purple-600 w-20">{activity.time}</div>
                          <div>
                            <h5 className="font-medium">{activity.activity}</h5>
                          </div>
                        </div>
                        <div className="text-sm font-medium">₹{activity.cost}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Travel Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {itinerary.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex gap-4">
              <Button onClick={saveItinerary} className="flex-1">
                Save Itinerary
              </Button>
              <Button variant="ghost" onClick={() => navigate('/booking')} className="flex-1">
                Start Booking
              </Button>
              <Button variant="ghost" onClick={() => {
                setItinerary(null)
                setPlannerData({
                  destination: '',
                  duration: '',
                  budget: '',
                  interests: [],
                  travelStyle: '',
                  groupSize: '2'
                })
              }} className="flex-1">
                Plan Another Trip
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
