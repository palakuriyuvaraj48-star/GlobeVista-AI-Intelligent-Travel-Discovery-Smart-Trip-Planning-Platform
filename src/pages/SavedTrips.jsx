import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

export default function SavedTrips() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [savedItems, setSavedItems] = useState({
    destinations: [],
    itineraries: [],
    budgetCalculations: [],
    bookings: []
  })
  const [activeTab, setActiveTab] = useState('destinations')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load all saved data from localStorage
    const destinations = JSON.parse(localStorage.getItem('savedDestinations') || '[]')
    const itineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]')
    const budgetCalculations = JSON.parse(localStorage.getItem('budgetCalculations') || '[]')
    const bookings = JSON.parse(localStorage.getItem('bookingHistory') || '[]')
    
    setSavedItems({
      destinations,
      itineraries,
      budgetCalculations,
      bookings
    })
    setLoading(false)
  }, [])

  const deleteItem = (type, id) => {
    const updatedItems = { ...savedItems }
    updatedItems[type] = updatedItems[type].filter(item => item.id !== id)
    setSavedItems(updatedItems)
    
    // Update localStorage
    const storageKeys = {
      destinations: 'savedDestinations',
      itineraries: 'savedItineraries',
      budgetCalculations: 'budgetCalculations',
      bookings: 'bookingHistory'
    }
    localStorage.setItem(storageKeys[type], JSON.stringify(updatedItems[type]))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading saved trips...</div>
        </div>
      </Container>
    )
  }

  const tabs = [
    { id: 'destinations', label: 'Destinations', count: savedItems.destinations.length },
    { id: 'itineraries', label: 'Itineraries', count: savedItems.itineraries.length },
    { id: 'budgetCalculations', label: 'Budget Plans', count: savedItems.budgetCalculations.length },
    { id: 'bookings', label: 'Bookings', count: savedItems.bookings.length }
  ]

  return (
    <Container>
      <Section
        title="Saved Trips"
        subtitle="Manage your saved destinations, itineraries, and bookings"
      >
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
                ${activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Destinations Tab */}
        {activeTab === 'destinations' && (
          <div className="space-y-6">
            {savedItems.destinations.length === 0 ? (
              <Card className="p-8 text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">No Saved Destinations</h3>
                <p className="text-gray-600 mb-4">Start exploring and save your favorite destinations</p>
                <Button onClick={() => navigate('/explore')}>Explore Destinations</Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItems.destinations.map(destination => (
                  <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                      <p className="text-gray-600 mb-4">{destination.country}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500">★</span>
                          <span>{destination.rating}</span>
                        </div>
                        <Badge variant="secondary">Saved</Badge>
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
                          onClick={() => deleteItem('destinations', destination.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Itineraries Tab */}
        {activeTab === 'itineraries' && (
          <div className="space-y-6">
            {savedItems.itineraries.length === 0 ? (
              <Card className="p-8 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-2">No Saved Itineraries</h3>
                <p className="text-gray-600 mb-4">Create your first AI-powered trip itinerary</p>
                <Button onClick={() => navigate('/ai/trip-planner')}>Create Itinerary</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {savedItems.itineraries.map(itinerary => (
                  <Card key={itinerary.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{itinerary.destination}</h3>
                        <p className="text-gray-600">{itinerary.duration} • {itinerary.days?.length || 0} days planned</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">₹{itinerary.totalCost?.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">Total Cost</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Created on {formatDate(itinerary.createdAt)}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{itinerary.duration}</Badge>
                        <Badge variant="secondary">{itinerary.days?.length || 0} Days</Badge>
                        <Badge variant="secondary">AI Generated</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate('/ai/trip-planner')}
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/booking')}
                      >
                        Start Booking
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem('itineraries', itinerary.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Budget Calculations Tab */}
        {activeTab === 'budgetCalculations' && (
          <div className="space-y-6">
            {savedItems.budgetCalculations.length === 0 ? (
              <Card className="p-8 text-center">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">No Budget Plans</h3>
                <p className="text-gray-600 mb-4">Calculate your trip budget with AI assistance</p>
                <Button onClick={() => navigate('/ai/budget')}>Calculate Budget</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {savedItems.budgetCalculations.map(calculation => (
                  <Card key={calculation.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{calculation.destination}</h3>
                        <p className="text-gray-600">{calculation.duration} days • {calculation.travelers} travelers</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">₹{calculation.totalCost?.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">Total Budget</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Created on {formatDate(calculation.createdAt)}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Per Person:</span>
                          <div className="font-medium">₹{calculation.perPerson?.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Per Day:</span>
                          <div className="font-medium">₹{Math.round(calculation.totalCost / calculation.duration).toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Accommodation:</span>
                          <div className="font-medium">₹{calculation.breakdown?.accommodation?.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Activities:</span>
                          <div className="font-medium">₹{calculation.breakdown?.activities?.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate('/ai/budget')}
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/booking')}
                      >
                        Start Booking
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem('budgetCalculations', calculation.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {savedItems.bookings.length === 0 ? (
              <Card className="p-8 text-center">
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="text-xl font-semibold mb-2">No Bookings Yet</h3>
                <p className="text-gray-600 mb-4">Start booking your dream trip</p>
                <Button onClick={() => navigate('/booking')}>Make a Booking</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {savedItems.bookings.map(booking => (
                  <Card key={booking.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {booking.destination || booking.hotel || booking.restaurant || 'Booking'}
                        </h3>
                        <p className="text-gray-600">
                          {booking.type === 'hotel' && `${booking.guests} guests • ${booking.checkIn} to ${booking.checkOut}`}
                          {booking.type === 'experience' && `${booking.participants} participants • ${booking.date}`}
                          {booking.type === 'restaurant' && `${booking.guests} guests • ${booking.date} at ${booking.time}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">₹{booking.total?.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">Total Paid</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Booking ID: {booking.bookingId || 'N/A'}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={booking.status === 'confirmed' ? 'secondary' : 'outline'}>
                          {booking.status || 'Pending'}
                        </Badge>
                        <Badge variant="secondary">{booking.type}</Badge>
                        <Badge variant="secondary">Paid</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate('/success')}
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate('/dashboard')}
                      >
                        Manage
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem('bookings', booking.id)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quick Actions */}
        <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="secondary" onClick={() => navigate('/explore')}>
              Explore
            </Button>
            <Button variant="secondary" onClick={() => navigate('/ai/trip-planner')}>
              Plan Trip
            </Button>
            <Button variant="secondary" onClick={() => navigate('/ai/budget')}>
              Calculate Budget
            </Button>
            <Button variant="secondary" onClick={() => navigate('/booking')}>
              Make Booking
            </Button>
          </div>
        </Card>
      </Section>
    </Container>
  )
}
