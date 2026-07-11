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
  const [offlineGuides, setOfflineGuides] = useState([])
  const [priceAlerts, setPriceAlerts] = useState([])
  const [activeTab, setActiveTab] = useState('destinations')
  const [loading, setLoading] = useState(true)
  const [offlineSimMode, setOfflineSimMode] = useState(false) // Simulator toggle for Feature 11

  useEffect(() => {
    // Load all saved data from localStorage
    const destinations = JSON.parse(localStorage.getItem('savedDestinations') || '[]')
    const itineraries = JSON.parse(localStorage.getItem('savedItineraries') || '[]')
    const budgetCalculations = JSON.parse(localStorage.getItem('budgetCalculations') || '[]')
    const bookings = JSON.parse(localStorage.getItem('bookingHistory') || '[]')
    const offlineSaved = JSON.parse(localStorage.getItem('offlineGuides') || '[]')
    
    // Load or generate initial mock price drop alerts (Feature 14)
    let alerts = JSON.parse(localStorage.getItem('priceAlerts') || '[]')
    if (alerts.length === 0) {
      alerts = [
        { id: 1, type: 'Hotel', name: 'Taj Exotica Resort & Spa', originalPrice: 11970, currentPrice: 10170, drop: 1800, date: '2026-07-09' },
        { id: 2, type: 'Flight', name: 'IndiGo Airlines DEL-BOM', originalPrice: 4500, currentPrice: 3800, drop: 700, date: '2026-07-10' },
        { id: 3, type: 'Rental Car', name: 'Toyota Innova Rent', originalPrice: 3500, currentPrice: 3150, drop: 350, date: '2026-07-10' }
      ]
      localStorage.setItem('priceAlerts', JSON.stringify(alerts))
    }

    setSavedItems({
      destinations,
      itineraries,
      budgetCalculations,
      bookings
    })
    setOfflineGuides(offlineSaved)
    setPriceAlerts(alerts)
    setLoading(false)
  }, [])

  const deleteItem = (type, id) => {
    const updatedItems = { ...savedItems }
    updatedItems[type] = updatedItems[type].filter(item => item.id !== id)
    setSavedItems(updatedItems)
    
    const storageKeys = {
      destinations: 'savedDestinations',
      itineraries: 'savedItineraries',
      budgetCalculations: 'budgetCalculations',
      bookings: 'bookingHistory'
    }
    localStorage.setItem(storageKeys[type], JSON.stringify(updatedItems[type]))
  }

  // Feature 11: Offline Guide Downloader
  const downloadOfflineGuide = (itinerary) => {
    const isDownloaded = offlineGuides.some(g => g.id === itinerary.id)
    let updatedGuides = []
    if (isDownloaded) {
      updatedGuides = offlineGuides.filter(g => g.id !== itinerary.id)
    } else {
      updatedGuides = [...offlineGuides, itinerary]
    }
    setOfflineGuides(updatedGuides)
    localStorage.setItem('offlineGuides', JSON.stringify(updatedGuides))
  }

  // Feature 14: Price drop alerts manager
  const removeAlert = (id) => {
    const updated = priceAlerts.filter(a => a.id !== id)
    setPriceAlerts(updated)
    localStorage.setItem('priceAlerts', JSON.stringify(updated))
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

  // Adjust display source based on simulated offline mode
  const displayedItineraries = offlineSimMode ? offlineGuides : savedItems.itineraries
  const displayedDestinations = offlineSimMode ? [] : savedItems.destinations
  const displayedBudgets = offlineSimMode ? [] : savedItems.budgetCalculations
  const displayedBookings = offlineSimMode ? [] : savedItems.bookings

  const tabs = [
    { id: 'destinations', label: 'Destinations', count: displayedDestinations.length },
    { id: 'itineraries', label: 'Itineraries', count: displayedItineraries.length },
    { id: 'budgetCalculations', label: 'Budget Plans', count: displayedBudgets.length },
    { id: 'bookings', label: 'Bookings', count: displayedBookings.length },
    { id: 'priceAlerts', label: 'Price Alerts Tracker', count: offlineSimMode ? 0 : priceAlerts.length },
    { id: 'passport', label: '🎫 My Travel Passport', count: 7 }
  ]

  return (
    <Container>
      <Section
        title="Saved Trips & Offline Guides"
        subtitle="Manage your saved packages, download offline guides, and track price alerts"
      >
        {/* Simulated Offline Mode Toggle */}
        <div className="mb-6 p-4 bg-slate-100 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-slate-200 shadow-xs">
          <div>
            <span className="font-bold text-slate-800 text-sm">📴 Simulator: Offline Mode Test</span>
            <p className="text-xs text-slate-500 mt-0.5">Toggle this to simulate zero network and read downloaded itinerary guides directly from local storage memory.</p>
          </div>
          <button
            onClick={() => setOfflineSimMode(!offlineSimMode)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              offlineSimMode 
                ? 'bg-red-600 text-white shadow'
                : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
            }`}
          >
            {offlineSimMode ? 'Simulating: OFFLINE MODE ACTIVE' : 'Simulating: ONLINE MODE'}
          </button>
        </div>

        {offlineSimMode && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs font-semibold">
            ⚠️ Offline mode active. You can only view itineraries that you have explicitly downloaded below. All online search features are disabled.
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-1.5 rounded-xl">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-colors whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-xs'
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
            {displayedDestinations.length === 0 ? (
              <Card className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">No Saved Destinations</h3>
                <p className="text-gray-600 mb-4">Start exploring and save your favorite destinations</p>
                <Button onClick={() => navigate('/explore')} className="bg-purple-600 text-white font-bold">Explore Destinations</Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedDestinations.map(destination => (
                  <Card key={destination.id} className="overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-xs hover:shadow-md transition-shadow">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{destination.country}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 text-sm font-semibold">
                          <span className="text-yellow-500">★</span>
                          <span>{destination.rating}</span>
                        </div>
                        <Badge className="bg-purple-50 text-purple-700 font-bold border-none">Saved</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => navigate(`/destination/${destination.name.toLowerCase().replace(/\s+/g, '-')}`)}
                          className="flex-1 bg-slate-900 text-white font-bold"
                        >
                          Explore
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteItem('destinations', destination.id)}
                          className="border border-slate-200 text-slate-600"
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
            {displayedItineraries.length === 0 ? (
              <Card className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-2">{offlineSimMode ? 'No Offline Downloads Found' : 'No Saved Itineraries'}</h3>
                <p className="text-gray-600 mb-4">{offlineSimMode ? 'Download itineraries first while online to view them here offline.' : 'Create your first AI-powered trip itinerary'}</p>
                {!offlineSimMode && <Button onClick={() => navigate('/ai/trip-planner')} className="bg-purple-600 text-white font-bold">Create Itinerary</Button>}
              </Card>
            ) : (
              <div className="space-y-4">
                {displayedItineraries.map(itinerary => {
                  const isDownloaded = offlineGuides.some(g => g.id === itinerary.id)
                  return (
                    <Card key={itinerary.id} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold">{itinerary.destination}</h3>
                            {isDownloaded && <Badge className="bg-green-100 text-green-800 border-none font-bold text-[10px]">📴 Offline Cached</Badge>}
                          </div>
                          <p className="text-sm text-slate-500 font-medium">{itinerary.duration} planned via {itinerary.transport || 'Public Transit'}</p>
                        </div>
                        <div className="sm:text-right">
                          <div className="text-xl font-bold text-purple-600">₹{itinerary.totalCost?.toLocaleString('en-IN')}</div>
                          <div className="text-xs text-gray-500 font-medium">Estimated Budget</div>
                        </div>
                      </div>
                      
                      <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-600 font-medium">
                        <p className="text-slate-400 mb-2">Created on {formatDate(itinerary.createdAt)}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-slate-100 text-slate-700 font-bold border-none">{itinerary.duration}</Badge>
                          <Badge className="bg-slate-100 text-slate-700 font-bold border-none">{itinerary.days?.length || 0} Days</Badge>
                          <Badge className="bg-purple-100 text-purple-800 font-bold border-none">AI Generated</Badge>
                        </div>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700">
                          <div><strong>☀️ Weather:</strong> {itinerary.weather?.temp}, {itinerary.weather?.condition}</div>
                          <div><strong>🚨 Safety:</strong> Score {itinerary.safety?.score}/100</div>
                          <div><strong>📊 Crowd Forecast:</strong> {itinerary.crowd?.current}</div>
                          <div><strong>🍃 Eco Score:</strong> {itinerary.eco?.greenBadge}</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          size="sm"
                          onClick={() => navigate('/ai/trip-planner')}
                          className="flex-1 bg-slate-900 text-white font-bold"
                        >
                          View Details & Map
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => downloadOfflineGuide(itinerary)}
                          className={`flex-1 border ${
                            isDownloaded 
                              ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100' 
                              : 'border-slate-200 text-slate-700'
                          }`}
                        >
                          {isDownloaded ? '❌ Remove Offline Download' : '⬇️ Download Offline Guide'}
                        </Button>
                        {!offlineSimMode && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigate('/booking')}
                              className="border border-slate-200 text-slate-700"
                            >
                              Book Stays
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteItem('itineraries', itinerary.id)}
                              className="border border-slate-200 text-slate-500"
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </div>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Budget Calculations Tab */}
        {activeTab === 'budgetCalculations' && (
          <div className="space-y-6">
            {displayedBudgets.length === 0 ? (
              <Card className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">No Budget Plans</h3>
                <p className="text-gray-600 mb-4">Calculate your trip budget with AI assistance</p>
                <Button onClick={() => navigate('/ai/budget')} className="bg-purple-600 text-white font-bold">Calculate Budget</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {displayedBudgets.map(calculation => (
                  <Card key={calculation.id} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{calculation.destination}</h3>
                        <p className="text-sm text-slate-500 font-medium">{calculation.duration} days • {calculation.travelers} travelers</p>
                      </div>
                      <div className="sm:text-right">
                        <div className="text-xl font-bold text-purple-600">₹{calculation.totalCost?.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-gray-500 font-medium">Total Cost</div>
                      </div>
                    </div>
                    
                    <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-600 font-medium">
                      <p className="text-slate-400 mb-2">Created on {formatDate(calculation.createdAt)}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700">
                        <div>
                          <span className="text-slate-400 font-semibold block">Per Person:</span>
                          <div className="font-bold">₹{Math.round(calculation.perPerson)?.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Per Day:</span>
                          <div className="font-bold">₹{Math.round(calculation.totalCost / calculation.duration).toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Hotels Total:</span>
                          <div className="font-bold">₹{calculation.breakdown?.hotels?.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">Eco Rating:</span>
                          <div className="font-bold text-emerald-600">{calculation.ecoBadge}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate('/ai/budget')}
                        className="flex-1 bg-slate-900 text-white font-bold"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem('budgetCalculations', calculation.id)}
                        className="border border-slate-200 text-slate-600"
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
            {displayedBookings.length === 0 ? (
              <Card className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <div className="text-6xl mb-4">🎫</div>
                <h3 className="text-xl font-bold mb-2">No Bookings Yet</h3>
                <p className="text-gray-600 mb-4">Start booking your dream trip</p>
                <Button onClick={() => navigate('/booking')} className="bg-purple-600 text-white font-bold">Make a Booking</Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {displayedBookings.map(booking => (
                  <Card key={booking.id} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          {booking.destination || booking.hotel || booking.restaurant || 'Booking'}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                          {booking.type === 'hotel' && `${booking.guests} guests • ${booking.checkIn} to ${booking.checkOut}`}
                          {booking.type === 'experience' && `${booking.participants} participants • ${booking.date}`}
                          {booking.type === 'restaurant' && `${booking.guests} guests • ${booking.date} at ${booking.time}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-purple-600">₹{booking.total?.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-gray-500 font-medium">Total Paid</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 font-medium">Booking ID: {booking.bookingId || 'N/A'}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge className="bg-green-100 text-green-800 font-bold border-none">
                          {booking.status || 'Confirmed'}
                        </Badge>
                        <Badge className="bg-slate-100 text-slate-700 font-bold border-none capitalize">{booking.type}</Badge>
                        <Badge className="bg-slate-100 text-slate-700 font-bold border-none">Paid</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => navigate('/success')}
                        className="flex-1 bg-slate-900 text-white font-bold"
                      >
                        View Ticket
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem('bookings', booking.id)}
                        className="border border-slate-200 text-slate-500 font-medium"
                      >
                        Cancel Booking
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Price Drop Alerts Tab (Feature 14) */}
        {activeTab === 'priceAlerts' && !offlineSimMode && (
          <div className="space-y-6">
            {priceAlerts.length === 0 ? (
              <Card className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
                <div className="text-6xl mb-4 font-normal">🔔</div>
                <h3 className="text-xl font-bold mb-2">No Active Price Alerts</h3>
                <p className="text-gray-600 mb-4 font-medium">We will track hotel, flight, or tour rates and alert you when drops occur.</p>
              </Card>
            ) : (
              <div className="space-y-4">
                <Card className="p-4 bg-amber-50/50 border border-amber-200 rounded-2xl text-amber-900 text-xs font-semibold">
                  💡 AI price tracking updates hourly. Standard notification triggers when fares fall by 10% or more.
                </Card>
                {priceAlerts.map(alert => (
                  <Card key={alert.id} className="p-5 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className="bg-purple-100 text-purple-700 border-none font-bold text-[10px]">{alert.type}</Badge>
                        <h4 className="font-bold text-slate-900 text-base">{alert.name}</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">Tracking since {alert.date}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="text-xs text-slate-400 line-through block font-medium">Original: ₹{alert.originalPrice.toLocaleString('en-IN')}</span>
                        <span className="text-base font-extrabold text-green-600 block">Current: ₹{alert.currentPrice.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-1">
                          Saved ₹{alert.drop.toLocaleString('en-IN')} (-15%)
                        </span>
                      </div>
                      <Button 
                        onClick={() => removeAlert(alert.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 py-1.5 px-3 rounded-xl text-xs font-bold shrink-0"
                      >
                        Unsubscribe
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Feature 5: Travel Passport & Achievements */}
        {activeTab === 'passport' && (
          <div className="space-y-8 animate-fadeIn">
            {/* KPI statistics panel */}
            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">My Travel Passport</h3>
              <p className="text-sm opacity-90 mb-6">Gamify your journeys. Every destination checked off unlocks achievements and levels up your status!</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/20">
                <div>
                  <div className="text-3xl font-extrabold">2</div>
                  <div className="text-xs opacity-90">Countries Visited</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">5</div>
                  <div className="text-xs opacity-90">States Explored</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">12</div>
                  <div className="text-xs opacity-90">Cities Explored</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">24</div>
                  <div className="text-xs opacity-90">Attractions Explored</div>
                </div>
              </div>
            </Card>

            {/* Feature 6: Personalized Learning Engine Preferences */}
            <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
              <div>
                <Badge className="bg-indigo-100 text-indigo-800 border-none font-bold text-[9px] mb-1">🧠 Learned AI Preferences</Badge>
                <h4 className="font-extrabold text-slate-800 text-sm">My Personal AI Travel Profile</h4>
                <p className="text-xs text-slate-500">The platform automatically customizes your search queries, flight recommendations, and dining lists based on these learned parameters.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div className="space-y-2.5">
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Travel Style Focus:</span>
                    <span className="text-purple-600 font-bold font-semibold">🌿 Eco-Friendly & Scenic Hiking (High Match)</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Preferred Budget Range:</span>
                    <span className="text-purple-600 font-bold font-semibold">₹5,000 - ₹9,000 / day (Mid-range)</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Lodging Preferences:</span>
                    <span className="text-purple-600 font-bold font-semibold">Boutique Heritage Stays (Green Leaf Certified)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation Style:</span>
                    <span className="text-purple-600 font-bold font-semibold">Public Metros & Eco-Hybrid Cabs</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Favorite Cuisines:</span>
                    <span className="text-purple-600 font-bold font-semibold">Local Heritage Eats & Vegan Desserts</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Preferred Weather:</span>
                    <span className="text-purple-600 font-bold font-semibold font-semibold">Mild, Sunny & Cool Winds (20°C - 28°C)</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-slate-100">
                    <span>Favorite Travel Season:</span>
                    <span className="text-purple-600 font-bold font-semibold">Post-Monsoon & Early Winter Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Trip Duration:</span>
                    <span className="text-purple-600 font-bold font-semibold">5 - 7 Days (Optimal search focus)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Badges list */}
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Earned & Locked Badges</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: '🚀 First Trip', desc: 'Completed your very first travel booking.', status: 'Earned' },
                  { name: '🏰 Heritage Scholar', desc: 'Visited 10 historical cities.', status: 'Earned' },
                  { name: '🧭 Mega Explorer', desc: 'Explore 50 tourist attractions.', progress: '24/50', status: 'In Progress' },
                  { name: '🍃 Nature Lover', desc: 'Completed 5 green walking trails.', status: 'Earned' },
                  { name: '🍱 Food Connoisseur', desc: 'Tried 15 certified local restaurants.', status: 'Earned' },
                  { name: '⛰️ Peak Conqueror', desc: 'Climbed 3 mountain/trekking peaks.', progress: '2/3', status: 'In Progress' },
                  { name: '💎 Gem Collector', desc: 'Visited 5 uncrowded secret viewpoints.', status: 'Earned' }
                ].map((badge, idx) => (
                  <Card key={idx} className={`p-5 border rounded-3xl shadow-xs flex items-center gap-4 ${
                    badge.status === 'Earned' 
                      ? 'bg-purple-50/50 border-purple-100' 
                      : 'bg-slate-50 border-slate-200 opacity-70'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0 ${
                      badge.status === 'Earned' ? 'bg-purple-100 text-purple-700' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {badge.name.split(' ')[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{badge.name.split(' ').slice(1).join(' ')}</h4>
                        <Badge className={badge.status === 'Earned' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}>
                          {badge.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 font-medium leading-normal">{badge.desc}</p>
                      {badge.progress && (
                        <div className="mt-2">
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-purple-600 h-full rounded-full" 
                              style={{ width: `${(parseInt(badge.progress.split('/')[0]) / parseInt(badge.progress.split('/')[1])) * 100}%` }} 
                            />
                          </div>
                          <span className="text-[10px] text-slate-400 mt-1 block font-bold">Progress: {badge.progress}</span>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>
    </Container>
  )
}
