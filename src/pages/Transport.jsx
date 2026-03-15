import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

const transportOptions = [
  {
    id: 1,
    type: 'Flight',
    name: 'IndiGo Airlines',
    route: 'Delhi to Mumbai',
    price: 4500,
    duration: '2h 15m',
    departure: '08:00',
    arrival: '10:15',
    image: 'https://images.unsplash.com/photo-1436491865336-16308ab17c0c?w=400',
    rating: 4.2
  },
  {
    id: 2,
    type: 'Train',
    name: 'Rajdhani Express',
    route: 'Delhi to Mumbai',
    price: 1800,
    duration: '16h 00m',
    departure: '17:00',
    arrival: '09:00',
    image: 'https://images.unsplash.com/photo-1474224017426-592dfe62d83f?w=400',
    rating: 4.5
  },
  {
    id: 3,
    type: 'Bus',
    name: 'Volvo Luxury Bus',
    route: 'Delhi to Jaipur',
    price: 800,
    duration: '5h 30m',
    departure: '06:00',
    arrival: '11:30',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fb60a?w=400',
    rating: 4.0
  },
  {
    id: 4,
    type: 'Car Rental',
    name: 'Toyota Innova',
    route: 'Delhi to Agra',
    price: 3500,
    duration: '3h 00m',
    departure: 'Flexible',
    arrival: 'Flexible',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400',
    rating: 4.6
  },
  {
    id: 5,
    type: 'Flight',
    name: 'Air India',
    route: 'Mumbai to Bangalore',
    price: 5200,
    duration: '1h 45m',
    departure: '14:30',
    arrival: '16:15',
    image: 'https://images.unsplash.com/photo-1436491865336-16308ab17c0c?w=400',
    rating: 4.1
  },
  {
    id: 6,
    type: 'Train',
    name: 'Shatabdi Express',
    route: 'Delhi to Agra',
    price: 1200,
    duration: '2h 00m',
    departure: '06:00',
    arrival: '08:00',
    image: 'https://images.unsplash.com/photo-1474224017426-592dfe62d83f?w=400',
    rating: 4.7
  }
]

const transportTypes = ['All', 'Flight', 'Train', 'Bus', 'Car Rental']

export default function Transport() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')

  const filteredOptions = transportOptions.filter(option => {
    const matchesSearch = option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         option.route.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'All' || option.type === selectedType
    const matchesRoute = (!from || option.route.toLowerCase().includes(from.toLowerCase())) &&
                         (!to || option.route.toLowerCase().includes(to.toLowerCase()))
    
    return matchesSearch && matchesType && matchesRoute
  })

  return (
    <Container>
      <Section
        title="Transport Options"
        subtitle="Find the best way to travel to your destination"
      >
        {/* Search Form */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <Input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button>
              Search Transport
            </Button>
          </div>
        </Card>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="text-sm font-medium text-gray-700">Type:</span>
          {transportTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedType === type
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
          
          <div className="flex-1">
            <Input
              placeholder="Search transport..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredOptions.map(option => (
            <Card key={option.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-48 md:h-auto">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="capitalize">{option.type}</Badge>
                        <h3 className="text-xl font-semibold">{option.name}</h3>
                      </div>
                      <p className="text-gray-600">{option.route}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">₹{option.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{option.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Departure</p>
                      <p className="font-medium">{option.departure}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Arrival</p>
                      <p className="font-medium">{option.arrival}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-medium">{option.rating} ★</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to={`/booking`}>
                      <Button className="flex-1">Book Now</Button>
                    </Link>
                    <Button variant="ghost">View Details</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredOptions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">No transport options found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <Button onClick={() => {
              setSearchTerm('')
              setSelectedType('All')
              setFrom('')
              setTo('')
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </Section>
    </Container>
  )
}
