import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'

export default function DestinationPage() {
  const { city } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find destination by city name/slug
    const found = destinations.find(d => 
      d.name.toLowerCase().replace(/\s+/g, '-') === city ||
      d.country.toLowerCase().replace(/\s+/g, '-') === city
    )
    
    if (found) {
      setDestination(found)
    }
    setLoading(false)
  }, [city])

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading destination...</div>
        </div>
      </Container>
    )
  }

  if (!destination) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">Destination not found</h2>
          <Button onClick={() => navigate('/explore')}>
            Explore Destinations
          </Button>
        </div>
      </Container>
    )
  }

  // Get related hotels and restaurants for this destination
  const relatedHotels = hotels.filter(h => h.city === destination.country)
  const relatedRestaurants = restaurants.filter(r => r.city === destination.country)

  return (
    <Container>
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <p className="text-xl">{destination.country}</p>
          <div className="flex items-center gap-4 mt-4">
            <Badge className="bg-white/20 backdrop-blur">
              {destination.rating} ★
            </Badge>
            <Badge className="bg-white/20 backdrop-blur">
              {destination.bestSeason}
            </Badge>
          </div>
        </div>
      </div>

      <Section>
        {/* Overview */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">City Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{destination.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold mb-1">Best Time to Visit</h3>
              <p className="text-gray-600">{destination.bestSeason}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold mb-1">Rating</h3>
              <p className="text-gray-600">{destination.rating}/5.0</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-gray-600">{destination.country}</p>
            </div>
          </div>
        </Card>

        {/* Things to Do */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Things to Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏛️', title: 'Historical Sites', desc: 'Explore ancient monuments' },
              { icon: '🍽️', title: 'Local Cuisine', desc: 'Taste traditional dishes' },
              { icon: '🛍️', title: 'Shopping', desc: 'Visit local markets' },
              { icon: '🎭', title: 'Cultural Events', desc: 'Experience local culture' }
            ].map((activity, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{activity.icon}</div>
                <h3 className="font-semibold mb-1">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Hotels */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Hotels in {destination.name}</h2>
            <Button variant="ghost" onClick={() => navigate('/hotels')}>
              View All Hotels
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedHotels.slice(0, 3).map(hotel => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-purple-600">₹{hotel.price}</span>
                      <span className="text-sm text-gray-500">/night</span>
                    </div>
                    <Button size="sm" onClick={() => navigate(`/hotel/${hotel.id}`)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Restaurants in {destination.name}</h2>
            <Button variant="ghost" onClick={() => navigate('/restaurants')}>
              View All Restaurants
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRestaurants.slice(0, 3).map(restaurant => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span>{restaurant.rating}</span>
                    </div>
                    <Button size="sm" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                      Reserve Table
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Experiences in {destination.name}</h2>
            <Button variant="ghost" onClick={() => navigate('/experiences')}>
              View All Experiences
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'City Walking Tour',
                desc: 'Explore the historic city center',
                price: 49,
                rating: 4.8
              },
              {
                title: 'Cooking Class',
                desc: 'Learn to cook local cuisine',
                price: 89,
                rating: 4.9
              },
              {
                title: 'Sunset Cruise',
                desc: 'Enjoy a romantic evening on the water',
                price: 129,
                rating: 4.7
              }
            ].map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-4">{exp.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-purple-600">${exp.price}</span>
                    <span className="text-sm text-gray-500">/person</span>
                  </div>
                  <Button size="sm" onClick={() => navigate(`/experience/${index + 1}`)}>
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit {destination.name}?</h2>
          <p className="text-xl mb-6">Book your perfect trip and create unforgettable memories</p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" onClick={() => navigate('/booking')}>
              Plan Your Trip
            </Button>
            <Button variant="ghost" className="bg-white/20 hover:bg-white/30" onClick={() => navigate('/map')}>
              View on Map
            </Button>
          </div>
        </Card>
      </Section>
    </Container>
  )
}
