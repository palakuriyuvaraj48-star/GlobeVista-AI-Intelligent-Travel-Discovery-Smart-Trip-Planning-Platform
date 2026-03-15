import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'

export default function Booking() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    destination: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  })

  const allOptions = [...destinations, ...hotels]
  const subtotal = 2500 * parseInt(formData.guests || 1)
  const taxes = Math.round(subtotal * 0.18)
  const total = subtotal + taxes

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleProceedToPayment = () => {
    // Store booking data in sessionStorage for payment page
    sessionStorage.setItem('bookingData', JSON.stringify({
      ...formData,
      subtotal,
      taxes,
      total
    }))
    navigate('/payment')
  }

  return (
    <Container>
      <Section
        title={t('booking.title')}
        subtitle={t('booking.subtitle')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="space-y-6">
                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.destination')}
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a destination</option>
                    {allOptions.map(option => (
                      <option key={option.id} value={option.name}>
                        {option.name} - {option.country || option.city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Hotel */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.hotel')}
                  </label>
                  <select
                    value={formData.hotel}
                    onChange={(e) => handleInputChange('hotel', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a hotel</option>
                    {hotels.map(hotel => (
                      <option key={hotel.id} value={hotel.name}>
                        {hotel.name} - {hotel.city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.checkIn')}
                    </label>
                    <Input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.checkOut')}
                    </label>
                    <Input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.guests')}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Trip Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">{t('booking.tripSummary')}</h3>
              
              {formData.destination && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-medium">{formData.destination}</p>
                </div>
              )}

              {formData.hotel && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Hotel</p>
                  <p className="font-medium">{formData.hotel}</p>
                </div>
              )}

              {formData.checkIn && formData.checkOut && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Dates</p>
                  <p className="font-medium">
                    {new Date(formData.checkIn).toLocaleDateString()} - {new Date(formData.checkOut).toLocaleDateString()}
                  </p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm text-gray-600">Guests</p>
                <p className="font-medium">{formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}</p>
              </div>

              <hr className="my-4" />

              <h4 className="font-semibold mb-3">{t('booking.priceBreakdown')}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('booking.subtotal')}</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('booking.taxes')}</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>{t('booking.total')}</span>
                  <span className="text-purple-600">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Button
                onClick={handleProceedToPayment}
                className="w-full mt-6"
                disabled={!formData.destination || !formData.hotel || !formData.checkIn || !formData.checkOut}
              >
                {t('booking.proceedToPayment')}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By proceeding, you agree to our Terms & Conditions
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
