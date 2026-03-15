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

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find destination by ID
    const allDestinations = [...destinations, ...hotels, ...restaurants]
    const found = allDestinations.find(d => d.id === parseInt(id))
    
    if (found) {
      setDestination(found)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">{t('common.loading')}</div>
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
            {t('explore.explore')}
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Section>
        {/* Header */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl">{destination.country || destination.city}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">{t('details.description')}</h2>
              <p className="text-gray-600 leading-relaxed">{destination.description}</p>
            </Card>

            {/* Location & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">{t('details.location')}</h3>
                <p className="text-gray-600">{destination.country || destination.city}</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3">{t('details.rating')}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{destination.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </Card>
            </div>

            {/* Additional Details */}
            {destination.cuisine && (
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Cuisine</h3>
                <p className="text-gray-600">{destination.cuisine}</p>
              </Card>
            )}

            {destination.priceRange && (
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                <p className="text-gray-600">{destination.priceRange}</p>
              </Card>
            )}

            {destination.bestSeason && (
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3">Best Time to Visit</h3>
                <p className="text-gray-600">{destination.bestSeason}</p>
              </Card>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                onClick={() => navigate('/booking')}
                className="flex-1"
              >
                {t('details.bookNow')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard')}
                className="flex-1"
              >
                {t('details.addToTrip')}
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">{t('details.price')}</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {destination.price ? `₹${destination.price}` : 'Contact for pricing'}
              </div>
              {destination.price && (
                <p className="text-sm text-gray-500 mb-4">
                  {destination.city ? t('hotels.perNight') : 'per person'}
                </p>
              )}
              <Button className="w-full" onClick={() => navigate('/booking')}>
                {t('details.bookNow')}
              </Button>
            </Card>

            {/* Quick Info */}
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">
                    {destination.cuisine ? 'Restaurant' : destination.city ? 'Hotel' : 'Destination'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium">{destination.rating} ★</span>
                </div>
                {destination.lat && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordinates</span>
                    <span className="font-medium text-sm">
                      {destination.lat.toFixed(4)}, {destination.lng.toFixed(4)}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Similar Destinations */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Similar Places</h3>
              <div className="space-y-3">
                {destinations.slice(0, 3).map(dest => (
                  <div
                    key={dest.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/details/${dest.id}`)}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{dest.name}</h4>
                      <p className="text-sm text-gray-600">{dest.country}</p>
                    </div>
                    <span className="text-sm font-medium">{dest.rating} ★</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  )
}
