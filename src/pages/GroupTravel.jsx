import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

const mockTrips = [
  {
    id: 1,
    title: 'Bali Adventure Week',
    destination: 'Bali, Indonesia',
    dates: 'Dec 15-22, 2024',
    maxPeople: 8,
    currentPeople: 5,
    budget: '₹45,000',
    organizer: 'Sarah Chen',
    description: 'Explore temples, beaches, and rice terraces with a small group.'
  },
  {
    id: 2,
    title: 'Mountain Trek in Himalayas',
    destination: 'Manali, India',
    dates: 'Jan 5-12, 2025',
    maxPeople: 12,
    currentPeople: 7,
    budget: '₹28,000',
    organizer: 'Raj Patel',
    description: 'Challenging trek through beautiful mountain landscapes.'
  },
  {
    id: 3,
    title: 'Dubai Luxury Escape',
    destination: 'Dubai, UAE',
    dates: 'Feb 10-15, 2025',
    maxPeople: 6,
    currentPeople: 4,
    budget: '₹85,000',
    organizer: 'Mike Johnson',
    description: 'Experience luxury shopping, dining, and desert safaris.'
  }
]

const mockBuddies = [
  { id: 1, name: 'Alex Kumar', location: 'Mumbai', interests: ['Beach', 'Adventure'], avatar: '👨‍💼' },
  { id: 2, name: 'Priya Sharma', location: 'Delhi', interests: ['Culture', 'Food'], avatar: '👩‍💼' },
  { id: 3, name: 'James Wilson', location: 'Bangalore', interests: ['Mountains', 'Trekking'], avatar: '👨‍💻' },
]

export default function GroupTravel() {
  const [activeTab, setActiveTab] = useState('trips')
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <Container>
      <Section
        title="Group Travel"
        subtitle="Find travel buddies and create unforgettable journeys together"
      >
        {/* TABS */}
        <div className="flex gap-4 mb-8 border-b">
          {['trips', 'buddies', 'create'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'buddies' ? 'Find Travel Buddies' : tab === 'create' ? 'Create Trip' : 'Join Trips'}
            </button>
          ))}
        </div>

        {/* JOIN TRIPS */}
        {activeTab === 'trips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTrips.map(trip => (
              <Card key={trip.id} className="overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                  <p className="text-gray-600 mb-4">{trip.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Destination:</span>
                      <span className="font-medium">{trip.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Dates:</span>
                      <span className="font-medium">{trip.dates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Budget:</span>
                      <span className="font-medium">{trip.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Group Size:</span>
                      <span className="font-medium">{trip.currentPeople}/{trip.maxPeople}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Organizer:</span>
                      <span className="font-medium">{trip.organizer}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Join Trip</Button>
                    <Button variant="ghost">Message</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* FIND BUDDIES */}
        {activeTab === 'buddies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBuddies.map(buddy => (
              <Card key={buddy.id} className="p-6 text-center">
                <div className="text-4xl mb-4">{buddy.avatar}</div>
                <h3 className="text-lg font-semibold mb-1">{buddy.name}</h3>
                <p className="text-gray-600 mb-3">{buddy.location}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {buddy.interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <Button size="sm">Connect</Button>
              </Card>
            ))}
          </div>
        )}

        {/* CREATE TRIP */}
        {activeTab === 'create' && (
          <Card className="max-w-2xl mx-auto p-8">
            <h3 className="text-xl font-semibold mb-6">Create a Group Trip</h3>
            <div className="space-y-4">
              <Input placeholder="Trip Title" />
              <Input placeholder="Destination" />
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" placeholder="Start Date" />
                <Input type="date" placeholder="End Date" />
              </div>
              <Input placeholder="Maximum Group Size" type="number" />
              <Input placeholder="Budget Per Person" />
              <textarea
                className="w-full p-3 border border-gray-200 rounded-xl"
                rows={4}
                placeholder="Describe your trip..."
              />
              <Button className="w-full">Create Trip</Button>
            </div>
          </Card>
        )}
      </Section>
    </Container>
  )
}
