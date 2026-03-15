import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { destinations } from '../data/destinations'

export default function AIRecommendations() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [preferences, setPreferences] = useState({
    travelStyle: '',
    interests: [],
    budget: '',
    season: '',
    groupSize: '2',
    activities: []
  })
  const [recommendations, setRecommendations] = useState(null)
  const [loading, setLoading] = useState(false)

  const travelStyles = ['Adventure', 'Relaxation', 'Cultural', 'Luxury', 'Budget', 'Family-friendly']
  const interests = ['Beaches', 'Mountains', 'Cities', 'Historical Sites', 'Food', 'Shopping', 'Nightlife', 'Nature', 'Art', 'Photography']
  const budgets = ['Budget (Under ₹10k)', 'Mid-range (₹10k-₹25k)', 'Luxury (₹25k+)']
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter']
  const activityTypes = ['Sightseeing', 'Adventure Sports', 'Cultural Tours', 'Food Experiences', 'Shopping', 'Relaxation']

  const handleInterestToggle = (interest) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleActivityToggle = (activity) => {
    setPreferences(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }))
  }

  const generateRecommendations = async () => {
    setLoading(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const aiRecommendations = destinations.map(dest => ({
      ...dest,
      matchScore: Math.floor(Math.random() * 30) + 70, // 70-100 match score
      reasons: [
        `${dest.country} offers amazing ${preferences.interests[0] || 'experiences'}`,
        `Perfect for ${preferences.travelStyle} travelers`,
        `Great ${preferences.season} destination`,
        `Fits your ${preferences.budget} preferences`
      ],
      bestTime: preferences.season || 'Year-round',
      estimatedCost: Math.floor(Math.random() * 20000) + 10000,
      highlights: [
        'Stunning natural landscapes',
        'Rich cultural heritage',
        'Amazing local cuisine',
        'Friendly locals',
        'Safe for tourists'
      ]
    })).sort((a, b) => b.matchScore - a.matchScore).slice(0, 6)

    setRecommendations(aiRecommendations)
    setLoading(false)
  }

  const saveDestination = (destination) => {
    const savedDestinations = JSON.parse(localStorage.getItem('savedDestinations') || '[]')
    if (!savedDestinations.find(d => d.id === destination.id)) {
      savedDestinations.push({
        ...destination,
        savedAt: new Date().toISOString()
      })
      localStorage.setItem('savedDestinations', JSON.stringify(savedDestinations))
    }
  }

  return (
    <Container>
      <Section
        title="AI Destination Recommendations"
        subtitle="Get personalized destination suggestions based on your preferences"
      >
        {!recommendations ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Preferences Form */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Tell Us About Your Travel Preferences</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
                  <div className="grid grid-cols-2 gap-2">
                    {travelStyles.map(style => (
                      <button
                        key={style}
                        onClick={() => setPreferences(prev => ({ ...prev, travelStyle: style }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          preferences.travelStyle === style
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
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
                          preferences.interests.includes(interest)
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <div className="space-y-2">
                    {budgets.map(budget => (
                      <button
                        key={budget}
                        onClick={() => setPreferences(prev => ({ ...prev, budget }))}
                        className={`w-full p-3 rounded-lg text-left transition-colors ${
                          preferences.budget === budget
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Season</label>
                  <div className="grid grid-cols-2 gap-2">
                    {seasons.map(season => (
                      <button
                        key={season}
                        onClick={() => setPreferences(prev => ({ ...prev, season }))}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          preferences.season === season
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {season}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <select
                    value={preferences.groupSize}
                    onChange={(e) => setPreferences(prev => ({ ...prev, groupSize: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="1">Solo Travel</option>
                    <option value="2">Couple</option>
                    <option value="3-4">Small Group</option>
                    <option value="5+">Large Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Activities</label>
                  <div className="flex flex-wrap gap-2">
                    {activityTypes.map(activity => (
                      <button
                        key={activity}
                        onClick={() => handleActivityToggle(activity)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          preferences.activities.includes(activity)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={generateRecommendations}
                  disabled={!preferences.travelStyle || preferences.interests.length === 0 || loading}
                  className="w-full"
                >
                  {loading ? 'AI is Analyzing...' : 'Get AI Recommendations'}
                </Button>
              </div>
            </Card>

            {/* AI Features */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">How AI Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">🧠</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Machine Learning</h4>
                      <p className="text-sm text-gray-600">AI analyzes millions of traveler reviews and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Personalization</h4>
                      <p className="text-sm text-gray-600">Matches your unique travel style and interests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Data Analysis</h4>
                      <p className="text-sm text-gray-600">Considers weather, costs, and seasonal factors</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Popular Travel Styles</h3>
                <div className="space-y-3">
                  {[
                    { style: 'Adventure', desc: 'Thrilling experiences and outdoor activities', icon: '🏔️' },
                    { style: 'Cultural', desc: 'Immersive local experiences and heritage', icon: '🏛️' },
                    { style: 'Relaxation', desc: 'Peaceful retreats and wellness', icon: '🧘' },
                    { style: 'Luxury', desc: 'Premium experiences and comfort', icon: '✨' }
                  ].map((popular, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{popular.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium">{popular.style}</h4>
                        <p className="text-sm text-gray-600">{popular.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* AI Recommendations Results */
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Your Personalized Recommendations</h3>
              <p className="text-lg mb-4">Based on your {preferences.travelStyle} travel style and interests</p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold">{recommendations.length}</div>
                  <div className="text-sm opacity-90">Destinations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{Math.round(recommendations.reduce((sum, r) => sum + r.matchScore, 0) / recommendations.length)}%</div>
                  <div className="text-sm opacity-90">Avg Match Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{preferences.interests.length}</div>
                  <div className="text-sm opacity-90">Interests Matched</div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((destination, index) => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur">
                        {destination.matchScore}% Match
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{destination.name}</h3>
                        <p className="text-gray-600">{destination.country}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{destination.matchScore}%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {destination.reasons.slice(0, 2).map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm text-gray-700">{reason}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm text-gray-500">Est. Cost</span>
                        <div className="font-semibold">₹{destination.estimatedCost.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">Best Time</span>
                        <div className="font-semibold">{destination.bestTime}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate(`/destination/${destination.name.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="flex-1"
                      >
                        Explore
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => saveDestination(destination)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">Why These Destinations?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-3">AI Analysis Factors</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Your travel style: {preferences.travelStyle}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Interest alignment: {preferences.interests.join(', ')}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Budget compatibility: {preferences.budget}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Seasonal preferences: {preferences.season}
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-3">Next Steps</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Explore detailed destination information
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Save your favorites for later
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Use AI trip planner for itineraries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Calculate budget for each destination
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => navigate('/explore')} className="flex-1">
                Browse All Destinations
              </Button>
              <Button variant="ghost" onClick={() => navigate('/ai/trip-planner')} className="flex-1">
                Plan Your Trip
              </Button>
              <Button variant="ghost" onClick={() => {
                setRecommendations(null)
                setPreferences({
                  travelStyle: '',
                  interests: [],
                  budget: '',
                  season: '',
                  groupSize: '2',
                  activities: []
                })
              }} className="flex-1">
                Get New Recommendations
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
