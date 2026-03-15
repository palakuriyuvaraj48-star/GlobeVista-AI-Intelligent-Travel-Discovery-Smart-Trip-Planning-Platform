import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { restaurants } from '../data/restaurants'

export default function RestaurantDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(true)
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: '2'
  })

  useEffect(() => {
    const found = restaurants.find(r => r.id === parseInt(id))
    if (found) {
      setRestaurant(found)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading restaurant details...</div>
        </div>
      </Container>
    )
  }

  if (!restaurant) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">Restaurant not found</h2>
          <Button onClick={() => navigate('/restaurants')}>
            Browse Restaurants
          </Button>
        </div>
      </Container>
    )
  }

  const menuItems = [
    { name: 'Signature Dish', price: 450, description: 'Chef\'s special creation' },
    { name: 'Local Specialties', price: 320, description: 'Traditional local cuisine' },
    { name: 'International Cuisine', price: 380, description: 'Fusion dishes from around the world' },
    { name: 'Desserts', price: 180, description: 'Sweet endings to your meal' },
    { name: 'Beverages', price: 120, description: 'Selection of drinks and cocktails' }
  ]

  const reviews = [
    { name: 'Food Critic', rating: 5, comment: 'Exceptional dining experience!' },
    { name: 'Regular Customer', rating: 4, comment: 'Consistently great food and service.' },
    { name: 'Tourist', rating: 5, comment: 'A must-visit when in town!' }
  ]

  const handleReservation = () => {
    // Store reservation data
    const reservation = {
      restaurant: restaurant.name,
      ...reservationData,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('restaurantReservation', JSON.stringify(reservation))
    navigate('/booking')
  }

  return (
    <Container>
      <Section>
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-xl mb-4">{restaurant.city}</p>
            <div className="flex items-center gap-4">
              <Badge className="bg-white/20 backdrop-blur">
                {restaurant.cuisine}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur">
                {restaurant.priceRange}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur">
                {restaurant.rating} ★
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About {restaurant.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Experience the finest {restaurant.cuisine} cuisine in {restaurant.city}. 
                Our restaurant offers a perfect blend of traditional flavors and modern culinary techniques, 
                creating unforgettable dining experiences for our guests.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{restaurant.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
              </div>
            </Card>

            {/* Menu */}
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Menu</h3>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="text-lg font-semibold text-purple-600">₹{item.price}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-semibold">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium">{review.name}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Reservation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-4">Make a Reservation</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={reservationData.date}
                    onChange={(e) => setReservationData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <select
                    value={reservationData.time}
                    onChange={(e) => setReservationData(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select time</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    value={reservationData.guests}
                    onChange={(e) => setReservationData(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Restaurant Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cuisine:</span>
                    <span>{restaurant.cuisine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Range:</span>
                    <span>{restaurant.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span>{restaurant.rating} ★</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleReservation}
                disabled={!reservationData.date || !reservationData.time}
                className="w-full mb-3"
              >
                Reserve Table
              </Button>
              <Button variant="ghost" onClick={() => navigate('/map')} className="w-full">
                View on Map
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
