import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet.heat'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

const destinations = [
  {
    name: 'Goa',
    lat: 15.2993,
    lng: 74.1240,
    description: 'Beautiful beaches and vibrant nightlife',
    category: 'Beach',
    rating: 4.6
  },
  {
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    description: 'City of lights and romance',
    category: 'City',
    rating: 4.8
  },
  {
    name: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    description: 'Modern luxury and desert adventures',
    category: 'City',
    rating: 4.7
  },
  {
    name: 'Bali',
    lat: -8.3405,
    lng: 115.0920,
    description: 'Tropical paradise with rich culture',
    category: 'Beach',
    rating: 4.9
  },
  {
    name: 'Tokyo',
    lat: 35.6762,
    lng: 139.6503,
    description: 'Modern metropolis with ancient traditions',
    category: 'City',
    rating: 4.8
  },
  {
    name: 'Swiss Alps',
    lat: 46.8182,
    lng: 8.2275,
    description: 'Majestic mountains and skiing',
    category: 'Mountain',
    rating: 4.9
  }
]

const categories = ['All', 'Beach', 'City', 'Mountain', 'Adventure', 'Cultural']

function HeatmapLayer() {
  const map = useMap()
  
  useEffect(() => {
    const heatData = [
      [15.2993, 74.1240, 0.9],  // Goa
      [48.8566, 2.3522, 0.8],   // Paris
      [25.2048, 55.2708, 0.7],   // Dubai
      [-8.3405, 115.0920, 0.9],  // Bali
      [35.6762, 139.6503, 0.8],  // Tokyo
      [46.8182, 8.2275, 0.7],   // Swiss Alps
    ]

    const heat = L.heatLayer(heatData, {
      radius: 25,
      blur: 20,
      maxZoom: 10
    }).addTo(map)
    
    return () => {
      map.removeLayer(heat)
    }
  }, [map])
  
  return null
}

export default function TravelMapFixed() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showHeatmap, setShowHeatmap] = useState(true)
  const [selectedDestination, setSelectedDestination] = useState(null)

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Container>
      <Section
        title="Explore World with GlobeVista AI"
        subtitle="Discover hotels, attractions, and experiences on interactive map"
      >
        {/* Map Header with Search and Filters */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Destinations</label>
              <Input
                placeholder="Search for a destination..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Map Options</label>
              <div className="flex gap-2">
                <Button
                  variant={showHeatmap ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setShowHeatmap(!showHeatmap)}
                >
                  {showHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}
                </Button>
                <Button variant="ghost" size="sm">
                  Reset View
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <h3 className="text-lg font-semibold">Interactive Travel Map</h3>
                <p className="text-sm opacity-90">Click markers to explore destinations</p>
              </div>
              
              <div className="h-[600px]">
                <MapContainer
                  center={[20.5937, 78.9629]}
                  zoom={3}
                  scrollWheelZoom={true}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {showHeatmap && <HeatmapLayer />}
                  
                  {filteredDestinations.map((dest, index) => (
                    <Marker key={index} position={[dest.lat, dest.lng]}>
                      <Popup>
                        <div className="p-3">
                          <h4 className="font-semibold text-lg mb-2">{dest.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{dest.description}</p>
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary">{dest.category}</Badge>
                            <Badge>{dest.rating} ★</Badge>
                          </div>
                          <Button className="w-full">Explore Destination</Button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </Card>
          </div>

          {/* Destinations Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Destinations ({filteredDestinations.length})
              </h3>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredDestinations.map((dest, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedDestination(dest)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{dest.name}</h4>
                      <Badge className="text-xs">{dest.rating} ★</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{dest.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{dest.category}</Badge>
                      <Button variant="ghost" size="sm">View on Map</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map Legend */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Map Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm">High Popularity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Medium Popularity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Low Popularity</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🗺️</div>
            <h4 className="font-semibold">{destinations.length}</h4>
            <p className="text-sm text-gray-600">Destinations</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <h4 className="font-semibold">AI Powered</h4>
            <p className="text-sm text-gray-600">Heatmap</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">📍</div>
            <h4 className="font-semibold">Interactive</h4>
            <p className="text-sm text-gray-600">Markers</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h4 className="font-semibold">Global</h4>
            <p className="text-sm text-gray-600">Coverage</p>
          </Card>
        </div>
      </Section>
    </Container>
  )
}
