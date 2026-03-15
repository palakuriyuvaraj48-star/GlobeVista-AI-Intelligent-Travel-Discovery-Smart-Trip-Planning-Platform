import { useState } from 'react'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Input from '../../components/ui/Input'

const mockMatches = [
  {
    id: 1,
    name: 'Sarah Chen',
    age: 28,
    location: 'San Francisco, CA',
    interests: ['Adventure', 'Photography', 'Food'],
    travelStyle: 'Backpacker',
    bio: 'Love exploring off-the-beaten-path destinations and trying local cuisine!',
    avatar: '👩‍💻',
    compatibility: 92,
    upcomingTrips: ['Bali Dec 2024', 'Japan Mar 2025']
  },
  {
    id: 2,
    name: 'Mike Johnson',
    age: 32,
    location: 'New York, NY',
    interests: ['Mountains', 'Hiking', 'Cultural'],
    travelStyle: 'Mid-range',
    bio: 'Mountain enthusiast who loves trekking and cultural experiences.',
    avatar: '👨‍💼',
    compatibility: 88,
    upcomingTrips: ['Swiss Alps Jan 2025']
  },
  {
    id: 3,
    name: 'Priya Sharma',
    age: 26,
    location: 'London, UK',
    interests: ['Beach', 'Wellness', 'Yoga'],
    travelStyle: 'Luxury',
    bio: 'Seeking peaceful beach destinations and wellness retreats.',
    avatar: '👩‍🎨',
    compatibility: 85,
    upcomingTrips: ['Maldives Feb 2025', 'Goa Apr 2025']
  }
]

const travelStyles = ['Any', 'Backpacker', 'Mid-range', 'Luxury']
const interests = ['Adventure', 'Beach', 'Mountains', 'Cultural', 'Food', 'Photography', 'Wellness', 'Nightlife']

export default function TripMatchmaker() {
  const [selectedStyle, setSelectedStyle] = useState('Any')
  const [selectedInterests, setSelectedInterests] = useState([])
  const [destination, setDestination] = useState('')
  const [travelDates, setTravelDates] = useState('')
  const [showMatches, setShowMatches] = useState(false)

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleFindMatches = () => {
    setShowMatches(true)
  }

  return (
    <Container>
      <Section
        title="AI Travel Matchmaker"
        subtitle="Find your perfect travel companion based on preferences and travel style"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Match Preferences */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Travel Preferences</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <Input
                    placeholder="Where do you want to go?"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                  <Input
                    placeholder="e.g., Dec 2024"
                    value={travelDates}
                    onChange={e => setTravelDates(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
                  <div className="grid grid-cols-2 gap-2">
                    {travelStyles.map(style => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`p-2 rounded-lg text-sm transition-colors ${
                          selectedStyle === style
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
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedInterests.includes(interest)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <Button onClick={handleFindMatches} className="w-full">
                  🤖 Find Travel Matches
                </Button>
              </div>
            </Card>

            {/* Match Stats */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">📊 Match Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Travelers</span>
                  <span className="font-medium">12,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Matches Today</span>
                  <span className="font-medium text-green-600">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Countries Covered</span>
                  <span className="font-medium">142</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Matches */}
          <div className="lg:col-span-2">
            {!showMatches ? (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🧭</div>
                <h3 className="text-xl font-semibold mb-2">Find Your Travel Companion</h3>
                <p className="text-gray-600 mb-6">
                  Set your preferences and let AI find the perfect travel buddies for your next adventure
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎯</div>
                    <p className="text-xs text-gray-600">Smart Matching</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🛡️</div>
                    <p className="text-xs text-gray-600">Verified Profiles</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">💬</div>
                    <p className="text-xs text-gray-600">In-App Chat</p>
                  </div>
                </div>
              </Card>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Your Travel Matches</h3>
                  <Badge variant="secondary">{mockMatches.length} matches found</Badge>
                </div>

                <div className="space-y-4">
                  {mockMatches.map(match => (
                    <Card key={match.id} className="p-6">
                      <div className="flex gap-4">
                        <div className="text-4xl">{match.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{match.name}</h4>
                              <p className="text-sm text-gray-600">{match.age} • {match.location}</p>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800">
                                {match.compatibility}% Match
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-3">{match.bio}</p>

                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {match.travelStyle}
                            </Badge>
                            <div className="flex gap-1">
                              {match.interests.slice(0, 3).map(interest => (
                                <Badge key={interest} variant="outline" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-xs text-gray-500 mb-1">Upcoming Trips:</p>
                            <div className="flex flex-wrap gap-1">
                              {match.upcomingTrips.map(trip => (
                                <Badge key={trip} variant="secondary" className="text-xs">
                                  {trip}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm">Send Message</Button>
                            <Button variant="ghost" size="sm">View Profile</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="ghost">
                    🔄 Load More Matches
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Section>
    </Container>
  )
}
