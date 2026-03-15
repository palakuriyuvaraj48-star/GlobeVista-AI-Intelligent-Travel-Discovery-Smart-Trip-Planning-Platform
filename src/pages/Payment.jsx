import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'

export default function Payment() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [paymentMethod, setPaymentMethod] = useState('creditCard')
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  })
  const [bookingData, setBookingData] = useState(null)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    // Get booking data from sessionStorage
    const stored = sessionStorage.getItem('bookingData')
    if (stored) {
      setBookingData(JSON.parse(stored))
    } else {
      navigate('/booking')
    }
  }, [navigate])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate booking ID
    const bookingId = 'GV' + Date.now()
    
    // Store booking confirmation
    sessionStorage.setItem('bookingConfirmation', JSON.stringify({
      bookingId,
      ...bookingData,
      paymentMethod,
      status: 'confirmed'
    }))
    
    navigate('/success')
  }

  if (!bookingData) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading booking details...</div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Section
        title={t('payment.title')}
        subtitle={t('payment.subtitle')}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              {/* Payment Method Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">{t('payment.paymentMethod')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'creditCard', label: t('payment.creditCard'), icon: '💳' },
                    { id: 'debitCard', label: t('payment.debitCard'), icon: '💳' },
                    { id: 'upi', label: t('payment.upi'), icon: '📱' },
                    { id: 'paypal', label: t('payment.paypal'), icon: '💰' }
                  ].map(method => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        paymentMethod === method.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">{method.icon}</div>
                      <div className="text-xs font-medium">{method.label}</div>
                </button>
                  ))}
                </div>
              </div>

              {/* Credit/Debit Card Form */}
              {(paymentMethod === 'creditCard' || paymentMethod === 'debitCard') && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.cardNumber')}
                    </label>
                    <Input
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      maxLength={19}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.cardHolder')}
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.cardHolder}
                      onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.expiryDate')}
                      </label>
                      <Input
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.cvv')}
                      </label>
                      <Input
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        maxLength={3}
                        type="password"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Form */}
              {paymentMethod === 'upi' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('payment.upiId')}
                    </label>
                    <Input
                      placeholder="your-upi-id@upi"
                      value={formData.upiId}
                      onChange={(e) => handleInputChange('upiId', e.target.value)}
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      Enter your UPI ID and we'll send you a payment request on your UPI app
                    </p>
                  </div>
                </div>
              )}

              {/* PayPal */}
              {paymentMethod === 'paypal' && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">💰</div>
                  <p className="text-gray-600 mb-4">You will be redirected to PayPal for secure payment</p>
                  <Button className="bg-yellow-500 hover:bg-yellow-600">
                    Continue with PayPal
                  </Button>
                </div>
              )}

              {/* Pay Button */}
              {paymentMethod !== 'paypal' && (
                <Button
                  onClick={handlePayment}
                  disabled={processing}
                  className="w-full mt-6"
                >
                  {processing ? 'Processing...' : t('payment.payNow')}
                </Button>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-medium">{bookingData.destination}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hotel</p>
                  <p className="font-medium">{bookingData.hotel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="font-medium">{bookingData.guests}</p>
                </div>
              </div>

              <hr className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('booking.subtotal')}</span>
                  <span>₹{bookingData.subtotal?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('booking.taxes')}</span>
                  <span>₹{bookingData.taxes?.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>{t('booking.total')}</span>
                  <span className="text-purple-600">₹{bookingData.total?.toLocaleString()}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>🔒</span>
                <span>Secure Payment</span>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
