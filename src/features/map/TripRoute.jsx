import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import 'leaflet/dist/leaflet.css'

// Custom marker icons
const startIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const endIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684909.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
})

const stopIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684910.png',
  iconSize: [25, 25],
  iconAnchor: [12, 12],
})

const tripRoutes = [
  {
    id: 1,
    name: 'European Adventure',
    stops: [
      { name: 'Paris', lat: 48.8566, lng: 2.3522, day: 1, activities: ['Eiffel Tower', 'Louvre Museum'] },
      { name: 'Swiss Alps', lat: 46.8182, lng: 8.2275, day: 3, activities: ['Mountain Hiking', 'Scenic Train'] },
      { name: 'Rome', lat: 41.9028, lng: 12.4964, day: 5, activities: ['Colosseum', 'Vatican City'] },
      { name: 'Barcelona', lat: 41.3851, lng: 2.1734, day: 7, activities: ['Sagrada Familia', 'Beach Time'] },
    ],
    totalDistance: '2,847 km',
    duration: '10 days',
    budget: '$3,500'
  },
  {
    id: 2,
    name: 'Southeast Asia Journey',
    stops: [
      { name: 'Bangkok', lat: 13.7563, lng: 100.5018, day: 1, activities: ['Temples', 'Street Food'] },
      { name: 'Angkor Wat', lat: 13.4125, lng: 103.8670, day: 3, activities: ['Sunrise Tour', 'Temple Exploration'] },
      { name: 'Bali', lat: -8.3405, lng: 115.0920, day: 5, activities: ['Beach Resort', 'Rice Terraces'] },
      { name: 'Singapore', lat: 1.3521, lng: 103.8198, day: 7, activities: ['Marina Bay', 'Sentosa Island'] },
    ],
    totalDistance: '3,521 km',
    duration: '12 days',
    budget: '$2,800'
  }
]

function RouteMap({ route }) {
  const coordinates = route.stops.map(stop => [stop.lat, stop.lng])
  
  return (
    <MapContainer
      center={coordinates[0]}
      zoom={5}
      style={{ height: '500px', width: '100%', borderRadius: '1rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Route Line */}
      <Polyline
        positions={coordinates}
        color="url(#purple-gradient)"
        weight={4}
        opacity={0.8}
      />
      
      {/* Markers */}
      {route.stops.map((stop, index) => {
        let icon = stopIcon
        if (index === 0) icon = startIcon
        else if (index === route.stops.length - 1) icon = endIcon
        
        return (
          <Marker key={stop.name} position={[stop.lat, stop.lng]} icon={icon}>
            <Popup>
              <div className="text-center">
                <h4 className="font-semibold">{stop.name}</h4>
                <p className="text-sm text-gray-600">Day {stop.day}</p>
                <div className="mt-2">
                  {stop.activities.map(activity => (
                    <Badge key={activity} variant="secondary" className="text-xs m-1">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default function TripRoute() {
  const [selectedRoute, setSelectedRoute] = useState(tripRoutes[0])
  const [showDetails, setShowDetails] = useState(true)

  return (
    <Container>
      <Section
        title="AI Trip Routes"
        subtitle="Interactive travel itineraries with optimized routes and stops"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Route Selection */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Select Trip Route</h3>
              <div className="space-y-3">
                {tripRoutes.map(route => (
                  <button
                    key={route.id}
                    onClick={() => setSelectedRoute(route)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedRoute.id === route.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h4 className="font-semibold">{route.name}</h4>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{route.duration}</span>
                      <span>{route.budget}</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {route.stops.length} stops • {route.totalDistance}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Route Stats */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">📊 Route Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Distance</span>
                  <span className="font-medium">{selectedRoute.totalDistance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-medium">{selectedRoute.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Est. Budget</span>
                  <span className="font-medium">{selectedRoute.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Destinations</span>
                  <span className="font-medium">{selectedRoute.stops.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">AI Optimized</span>
                  <span className="font-medium text-green-600">✓ Yes</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{selectedRoute.name}</h3>
                    <p className="text-sm opacity-90">AI-optimized route for best experience</p>
                  </div>
                  <Button variant="ghost" className="text-white hover:bg-white/20">
                    Customize Route
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <RouteMap route={selectedRoute} />
                
                {/* Route Details */}
                {showDetails && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">Route Details</h4>
                    <div className="space-y-4">
                      {selectedRoute.stops.map((stop, index) => (
                        <div key={stop.name} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                              index === 0 ? 'bg-green-500' : 
                              index === selectedRoute.stops.length - 1 ? 'bg-red-500' : 
                              'bg-blue-500'
                            }`}>
                              {index + 1}
                            </div>
                            {index < selectedRoute.stops.length - 1 && (
                              <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium">{stop.name}</h5>
                            <p className="text-sm text-gray-600">Day {stop.day}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {stop.activities.map(activity => (
                                <Badge key={activity} variant="secondary" className="text-xs">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <Button className="flex-1">
                🚀 Start This Trip
              </Button>
              <Button variant="ghost">
                💾 Save Route
              </Button>
              <Button variant="ghost">
                📤 Share
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}
