import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { hotels } from '../data/hotels'

export default function HotelDetailsPage() {
  const { hotelId } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedRoom, setSelectedRoom] = useState('standard')

  useEffect(() => {
    const found = hotels.find(h => h.id === parseInt(hotelId))
    if (found) {
      setHotel(found)
    }
    setLoading(false)
  }, [hotelId])

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading hotel details...</div>
        </div>
      </Container>
    )
  }

  if (!hotel) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">Hotel not found</h2>
          <Button onClick={() => navigate('/hotels')}>
            Browse Hotels
          </Button>
        </div>
      </Container>
    )
  }

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: hotel.price, beds: '1 Queen Bed', size: '25 m²' },
    { id: 'deluxe', name: 'Deluxe Room', price: hotel.price + 2000, beds: '1 King Bed', size: '35 m²' },
    { id: 'suite', name: 'Executive Suite', price: hotel.price + 5000, beds: '1 King Bed + Sofa', size: '55 m²' }
  ]

  const amenities = [
    'Free WiFi', 'Swimming Pool', 'Fitness Center', 'Restaurant', 'Bar', 'Spa',
    'Business Center', 'Parking', 'Airport Shuttle', 'Room Service', 'Concierge', 'Pet Friendly'
  ]

  const reviews = [
    { name: 'John D.', rating: 5, comment: 'Excellent hotel with great service!' },
    { name: 'Sarah M.', rating: 4, comment: 'Beautiful property, very clean rooms.' },
    { name: 'Mike R.', rating: 5, comment: 'Perfect location and amazing breakfast.' }
  ]

  return (
    <Container>
      <Section>
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
              alt="Hotel room"
              className="w-full h-44 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400"
              alt="Hotel pool"
              className="w-full h-44 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de5d?w=400"
              alt="Hotel restaurant"
              className="w-full h-44 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400"
              alt="Hotel spa"
              className="w-full h-44 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Hotel Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
              <p className="text-gray-600 mb-4">{hotel.city}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-gray-600">(245 reviews)</span>
                </div>
                <Badge className="bg-green-100 text-green-800">Luxury</Badge>
              </div>
              <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            {/* Amenities */}
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Room Types */}
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Room Types</h3>
              <div className="space-y-4">
                {roomTypes.map(room => (
                  <div
                    key={room.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedRoom === room.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{room.name}</h4>
                        <p className="text-sm text-gray-600">{room.beds} • {room.size}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-purple-600">₹{room.price}</div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>
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

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-4">Book Your Stay</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>Room Rate</span>
                  <span>₹{roomTypes.find(r => r.id === selectedRoom).price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes & Fees</span>
                  <span>₹{Math.round(roomTypes.find(r => r.id === selectedRoom).price * 0.18)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-purple-600">₹{Math.round(roomTypes.find(r => r.id === selectedRoom).price * 1.18)}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate('/booking')}
                className="w-full mb-3"
              >
                Book Now
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
