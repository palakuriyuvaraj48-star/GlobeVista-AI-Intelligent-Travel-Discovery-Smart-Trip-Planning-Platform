import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function Success() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [bookingConfirmation, setBookingConfirmation] = useState(null)

  useEffect(() => {
    // Get booking confirmation from sessionStorage
    const stored = sessionStorage.getItem('bookingConfirmation')
    if (stored) {
      setBookingConfirmation(JSON.parse(stored))
    } else {
      navigate('/booking')
    }
  }, [navigate])

  if (!bookingConfirmation) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading confirmation...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('success.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('success.subtitle')}
          </p>
        </div>

        {/* Booking Details */}
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center mb-6">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold mb-4">
              {t('success.bookingId')}: {bookingConfirmation.bookingId}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{t('success.tripDetails')}</h2>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Destination</p>
                <p className="font-semibold">{bookingConfirmation.destination}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Hotel</p>
                <p className="font-semibold">{bookingConfirmation.hotel}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Guests</p>
                <p className="font-semibold">{bookingConfirmation.guests}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                <p className="font-semibold capitalize">{bookingConfirmation.paymentMethod}</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Total Paid</span>
                <span className="text-2xl font-bold text-purple-600">
                  ₹{bookingConfirmation.total?.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Booking Status: Confirmed</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              onClick={() => navigate('/dashboard')}
              className="flex-1"
            >
              {t('success.viewTrip')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex-1"
            >
              {t('success.goToDashboard')}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-sm text-gray-500 mb-4">
              A confirmation email has been sent to your registered email address
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span>📧</span>
                <span>Email Support</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📞</span>
                <span>24/7 Helpline</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💬</span>
                <span>Live Chat</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Recommended Destinations */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Explore More Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Bali, Indonesia',
                image: 'https://images.unsplash.com/photo-1537953773345-b172d5b209c2?w=400',
                rating: 4.8
              },
              {
                name: 'Paris, France',
                image: 'https://images.unsplash.com/photo-1502602898657-3e935605a92f?w=400',
                rating: 4.9
              },
              {
                name: 'Dubai, UAE',
                image: 'https://images.unsplash.com/photo-1512455038399-6e5e5d344f4c?w=400',
                rating: 4.7
              }
            ].map((dest, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-500">★ {dest.rating}</span>
                    <Button variant="ghost" size="sm">Explore</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  )
}
