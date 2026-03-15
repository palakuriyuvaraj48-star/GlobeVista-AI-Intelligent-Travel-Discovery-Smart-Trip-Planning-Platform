import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

const aiTools = [
  { icon: '🤖', title: 'AI Trip Planner', desc: 'Let AI plan your perfect trip.', link: '/ai/trip-planner' },
  { icon: '💸', title: 'Budget Calculator', desc: 'Estimate your travel costs easily.', link: '/ai/budget' },
  { icon: '🗺️', title: 'Travel Map Explorer', desc: 'Explore destinations visually.', link: '/map' },
  { icon: '✨', title: 'Destination Recommender', desc: 'Get personalized suggestions.', link: '/ai/recommend' },
  { icon: '🔥', title: 'AI Heatmap', desc: 'See popular travel spots.', link: '/map' },
  { icon: '🎯', title: 'Trip Predictor', desc: 'AI-powered trip suggestions.', link: '/ai/trip-planner' },
]

const suggestions = ['Goa', 'Bali', 'Dubai', 'Paris', 'Manali', 'Tokyo', 'New York', 'London']

export default function HomePro() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[700px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Discover the World with<br />GlobeVista AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Plan smarter trips with AI-powered travel discovery and personalized recommendations
            </p>
          </motion.div>
          
          {/* SEARCH FIELDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 max-w-5xl mx-auto bg-white/95 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Input
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                  className="text-lg"
                />
                <Input
                  type="date"
                  placeholder="Check-in"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="text-lg"
                />
                <Input
                  type="date"
                  placeholder="Check-out"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="text-lg"
                />
                <Input
                  placeholder="Guests"
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm text-gray-600">Popular:</span>
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => setDestination(s)}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <Button size="lg" className="w-full text-lg py-4">
                Search Destinations
              </Button>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* POPULAR DESTINATIONS */}
      <Container>
        <Section
          title="Popular Destinations"
          subtitle="Discover the most beautiful places around the world"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 8).map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur">
                        {dest.rating} ★
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                    <p className="text-gray-600 mb-4">{dest.country}</p>
                    <p className="text-sm text-gray-500 mb-4">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Best: {dest.bestSeason}</span>
                      <Button size="sm" onClick={() => navigate(`/destination/${dest.name.toLowerCase().replace(/\s+/g, '-')}`)}>Explore</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>

      {/* AI FEATURES */}
      <Container className="bg-gray-50 -mx-6 px-6 py-16">
        <Section
          title="AI Travel Tools"
          subtitle="Smart features to enhance your travel planning experience"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.desc}</p>
                  <Button variant="ghost" size="sm" onClick={() => navigate(tool.link)}>Try Now →</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>

      {/* PREMIUM HOTELS */}
      <Container>
        <Section
          title="Premium Hotels"
          subtitle="Comfortable stays for every traveler"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.slice(0, 6).map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur">
                        {hotel.rating} ★
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{hotel.city}</p>
                    <p className="text-sm text-gray-500 mb-4">{hotel.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-purple-600">₹{hotel.price}</span>
                        <span className="text-sm text-gray-500"> / night</span>
                      </div>
                      <Button size="sm" onClick={() => navigate(`/hotel/${hotel.id}`)}>Book Now</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>

      {/* TOP RESTAURANTS */}
      <Container className="bg-gray-50 -mx-6 px-6 py-16">
        <Section
          title="Top Restaurants"
          subtitle="Enjoy the best food experiences around the world"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.slice(0, 6).map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur">
                        {restaurant.rating} ★
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{restaurant.city}</p>
                    <p className="text-sm text-gray-500 mb-4">{restaurant.cuisine} • {restaurant.priceRange}</p>
                    <Button className="w-full" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>Reserve Table</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>

      {/* TRAVEL STORIES */}
      <Container>
        <Section
          title="Travel Stories"
          subtitle="Inspiring adventures from our community"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80`}
                  alt="Travel story"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Amazing Adventure in Bali</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    "The most incredible experience of my life! The beaches, the culture, the food..."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-sm">
                        JD
                      </div>
                      <span className="text-sm text-gray-600">John Doe</span>
                    </div>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  )
}
