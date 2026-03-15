import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

const experiences = [
  {
    id: 1,
    title: 'Northern Lights Safari',
    location: 'Tromsø, Norway',
    category: 'Adventure',
    price: 299,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    duration: '6 hours',
    groupSize: 'Small group',
    highlight: '90% chance to see aurora',
    description: 'Experience the magical Northern Lights in the Arctic wilderness. Our expert guides will take you to the best viewing spots away from city lights.',
    included: ['Professional guide', 'Transportation', 'Warm clothing', 'Hot drinks', 'Photography tips'],
    notIncluded: ['Flight tickets', 'Accommodation', 'Travel insurance']
  },
  {
    id: 2,
    title: 'Cooking Class in Tuscany',
    location: 'Florence, Italy',
    category: 'Cultural',
    price: 149,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    duration: '4 hours',
    groupSize: 'Max 8 people',
    highlight: 'Learn authentic Italian recipes',
    description: 'Master the art of Italian cooking with local chefs in a beautiful Tuscan farmhouse. Create traditional pasta, sauces, and desserts.',
    included: ['All ingredients', 'Cooking equipment', 'Recipe book', 'Wine tasting', 'Certificate'],
    notIncluded: ['Transportation', 'Accommodation']
  },
  {
    id: 3,
    title: 'Hot Air Balloon Ride',
    location: 'Cappadocia, Turkey',
    category: 'Adventure',
    price: 199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549906583-daa45557398a?w=800',
    duration: '3 hours',
    groupSize: 'Shared basket',
    highlight: 'Sunrise flight over fairy chimneys',
    description: 'Float over the stunning landscapes of Cappadocia at sunrise. See the famous fairy chimneys and valleys from a unique perspective.',
    included: ['Hotel pickup', 'Breakfast', 'Champagne toast', 'Flight certificate', 'Insurance'],
    notIncluded: ['Personal expenses', 'Tips']
  }
]

export default function ExperienceDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [experience, setExperience] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bookingData, setBookingData] = useState({
    date: '',
    participants: '2',
    specialRequests: ''
  })

  useEffect(() => {
    const found = experiences.find(e => e.id === parseInt(id))
    if (found) {
      setExperience(found)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading experience details...</div>
        </div>
      </Container>
    )
  }

  if (!experience) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">Experience not found</h2>
          <Button onClick={() => navigate('/experiences')}>
            Browse Experiences
          </Button>
        </div>
      </Container>
    )
  }

  const handleBooking = () => {
    const booking = {
      type: 'experience',
      experience: experience.title,
      ...bookingData,
      price: experience.price * parseInt(bookingData.participants),
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('experienceBooking', JSON.stringify(booking))
    navigate('/booking')
  }

  return (
    <Container>
      <Section>
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{experience.title}</h1>
            <p className="text-xl mb-4">{experience.location}</p>
            <div className="flex items-center gap-4">
              <Badge className="bg-white/20 backdrop-blur">
                {experience.category}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur">
                {experience.rating} ★
              </Badge>
              <Badge className="bg-white/20 backdrop-blur">
                {experience.duration}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About This Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{experience.description}</p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-purple-900 mb-2">✨ {experience.highlight}</h3>
                <p className="text-purple-800">This is what makes this experience truly special!</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">⏱️</div>
                  <h4 className="font-semibold mb-1">Duration</h4>
                  <p className="text-gray-600">{experience.duration}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <h4 className="font-semibold mb-1">Group Size</h4>
                  <p className="text-gray-600">{experience.groupSize}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">{experience.location}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <h4 className="font-semibold mb-1">Rating</h4>
                  <p className="text-gray-600">{experience.rating}/5.0</p>
                </div>
              </div>
            </Card>

            {/* What's Included */}
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-3">✓ Included</h4>
                  <ul className="space-y-2">
                    {experience.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="text-green-500">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-700 mb-3">✗ Not Included</h4>
                  <ul className="space-y-2">
                    {experience.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <span className="text-red-500">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Itinerary */}
            <Card className="p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Meet Your Guide</h4>
                    <p className="text-gray-600">Start with a brief introduction and safety overview</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Main Activity</h4>
                    <p className="text-gray-600">Enjoy the core experience with expert guidance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Wrap Up</h4>
                    <p className="text-gray-600">Conclude with photos and memories to take home</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Guest Reviews</h3>
              <div className="space-y-4">
                {[
                  { name: 'Adventure Seeker', rating: 5, comment: 'Absolutely incredible experience! Highly recommend.' },
                  { name: 'Travel Enthusiast', rating: 5, comment: 'Well organized and exceeded all expectations.' },
                  { name: 'First Timer', rating: 4, comment: 'Great for beginners, guides were very helpful.' }
                ].map((review, index) => (
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
              <h3 className="text-xl font-semibold mb-4">Book This Experience</h3>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">${experience.price}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
                  <select
                    value={bookingData.participants}
                    onChange={(e) => setBookingData(prev => ({ ...prev, participants: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    rows={3}
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>Price per person</span>
                  <span>${experience.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Number of participants</span>
                  <span>{bookingData.participants}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-purple-600">${experience.price * parseInt(bookingData.participants)}</span>
                </div>
              </div>

              <Button
                onClick={handleBooking}
                disabled={!bookingData.date}
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
