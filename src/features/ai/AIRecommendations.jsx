import { useState } from 'react'
import { destinations } from '../../data/destinations'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Input from '../../components/ui/Input'

const recommendationTypes = [
  { id: 'beach', name: 'Beach Destinations', icon: '🏖️' },
  { id: 'mountain', name: 'Mountain Adventures', icon: '🏔️' },
  { id: 'city', name: 'City Breaks', icon: '🌆' },
  { id: 'cultural', name: 'Cultural Sites', icon: '🏛️' },
  { id: 'adventure', name: 'Adventure Sports', icon: '🧗' },
  { id: 'food', name: 'Food & Cuisine', icon: '🍽️' },
]

export default function AIRecommendations() {
  const [selectedType, setSelectedType] = useState('beach')
  const [budget, setBudget] = useState('')
  const [duration, setDuration] = useState('')
  const [preferences, setPreferences] = useState('')

  const getRecommendations = () => {
    // Simple AI-like filtering based on type
    return destinations.filter(dest => {
      if (selectedType === 'beach') return dest.name.toLowerCase().includes('bali') || dest.name.toLowerCase().includes('maldives')
      if (selectedType === 'mountain') return dest.name.toLowerCase().includes('swiss') || dest.name.toLowerCase().includes('himalaya')
      if (selectedType === 'city') return dest.name.toLowerCase().includes('paris') || dest.name.toLowerCase().includes('tokyo')
      return true
    }).slice(0, 4)
  }

  const recommendations = getRecommendations()

  return (
    <Container>
      <Section
        title="AI Destination Recommendations"
        subtitle="Get personalized travel suggestions powered by AI"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preferences Form */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tell AI Your Preferences</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {recommendationTypes.map(type => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-3 rounded-lg text-center transition-colors ${
                          selectedType === type.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-2xl mb-1">{type.icon}</div>
                        <div className="text-xs">{type.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <Input
                    placeholder="e.g., $5000 - $10000"
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration</label>
                  <Input
                    placeholder="e.g., 7 days"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Preferences</label>
                  <textarea
                    className="w-full p-3 border border-gray-200 rounded-xl"
                    rows={3}
                    placeholder="e.g., Adventure activities, Local food, Shopping..."
                    value={preferences}
                    onChange={e => setPreferences(e.target.value)}
                  />
                </div>

                <Button className="w-full">
                  🤖 Get AI Recommendations
                </Button>
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">🧠 AI Insights</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Trending Now</p>
                  <p className="text-xs text-blue-700">Bali and Maldives are 40% more popular this month</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Best Value</p>
                  <p className="text-xs text-green-700">Southeast Asia offers 30% better value for money</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-900">Hidden Gems</p>
                  <p className="text-xs text-purple-700">Less crowded alternatives with similar experiences</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">AI Recommended Destinations</h3>
              <Badge variant="secondary">4 places found</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map(dest => (
                <Card key={dest.id} className="overflow-hidden group">
                  <div className="relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur">
                        🤖 AI Pick
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold">{dest.name}</h3>
                      <Badge>{dest.rating} ★</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{dest.country}</p>
                    <p className="text-sm text-gray-500 mb-4">{dest.description}</p>
                    
                    {/* AI Match Score */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">AI Match Score</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>

                    {/* AI Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      <Badge variant="secondary" className="text-xs">Perfect Match</Badge>
                      <Badge variant="secondary" className="text-xs">Budget Friendly</Badge>
                      <Badge variant="secondary" className="text-xs">Trending</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">View Details</Button>
                      <Button variant="ghost">Save</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="ghost">
                🔄 Load More Recommendations
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
