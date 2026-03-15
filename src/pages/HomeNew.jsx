import { useState } from 'react'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

const aiTools = [
  { icon: '🤖', title: 'AI Trip Planner', desc: 'Let AI plan your perfect trip.', link: '/ai-trip-planner' },
  { icon: '💸', title: 'Budget Calculator', desc: 'Estimate your travel costs easily.', link: '/budget-calculator' },
  { icon: '🗺️', title: 'Travel Map Explorer', desc: 'Explore destinations visually.', link: '/explore' },
  { icon: '✨', title: 'Destination Recommender', desc: 'Get personalized suggestions.', link: '/destination-recommender' },
]

const suggestions = ['Goa', 'Bali', 'Dubai', 'Paris', 'Manali']

export default function HomeNew() {
  const [search, setSearch] = useState('')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[600px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <Container className="relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold tracking-tight">Discover the World with GlobeVista AI</h1>
            <p className="text-xl mt-4 text-white/90">Plan smarter trips with AI-powered travel discovery</p>
          </div>
          
          {/* SEARCH FIELDS */}
          <Card className="mt-12 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
              <Input type="date" placeholder="Check-in" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
              <Input type="date" placeholder="Check-out" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
              <Input placeholder="Guests" value={guests} onChange={e => setGuests(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {suggestions.map(s => (
                <button key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">{s}</button>
              ))}
            </div>
            <Button className="w-full mt-6">Search</Button>
          </Card>
        </Container>
      </section>

      {/* POPULAR DESTINATIONS */}
      <Container>
        <Section
          title="Popular Destinations"
          subtitle="Discover the most beautiful places around the world"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 8).map(dest => (
              <Card key={dest.id} className="overflow-hidden group">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{dest.name}</h3>
                  <p className="text-sm text-gray-600">{dest.country}</p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge>{dest.rating} ★</Badge>
                    <button className="text-indigo-600 text-sm font-medium">Explore</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>

      {/* AI FEATURES */}
      <Container>
        <Section
          title="AI Travel Tools"
          subtitle="Smart features to enhance your travel planning"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map(tool => (
              <Card key={tool.title} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{tool.desc}</p>
                <Button variant="ghost" size="sm">Try Now</Button>
              </Card>
            ))}
          </div>
        </Section>
      </Container>

      {/* HOTELS */}
      <Container>
        <Section
          title="Premium Hotels"
          subtitle="Comfortable stays for every traveler"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.slice(0, 6).map(hotel => (
              <Card key={hotel.id} className="overflow-hidden group">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <Badge>{hotel.rating} ★</Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{hotel.city}</p>
                  <p className="text-sm text-gray-500 mb-4">{hotel.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">₹{hotel.price}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>

      {/* RESTAURANTS */}
      <Container>
        <Section
          title="Top Restaurants"
          subtitle="Enjoy the best food experiences"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.slice(0, 6).map(restaurant => (
              <Card key={restaurant.id} className="overflow-hidden group">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{restaurant.name}</h3>
                    <Badge>{restaurant.rating} ★</Badge>
                  </div>
                  <p className="text-gray-600 mb-2">{restaurant.city}</p>
                  <p className="text-sm text-gray-500 mb-4">{restaurant.cuisine} • {restaurant.priceRange}</p>
                  <Button className="w-full">Reserve Table</Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  )
}
