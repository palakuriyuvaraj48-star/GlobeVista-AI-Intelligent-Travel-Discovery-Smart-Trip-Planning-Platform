import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { destinations } from '../../data/destinations'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Badge from '../../components/ui/Badge'
import 'leaflet/dist/leaflet.css'

// Fix for default markers
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function MapView() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '600px', width: '100%', borderRadius: '1rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {destinations.map(dest => (
        <Marker
          key={dest.id}
          position={[dest.lat || 0, dest.lng || 0]}
          icon={customIcon}
          eventHandlers={{
            click: () => setSelectedDestination(dest)
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold">{dest.name}</h3>
              <p className="text-sm text-gray-600">{dest.country}</p>
              <Badge className="mt-1">{dest.rating} ★</Badge>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default function TravelMap() {
  const [heatmapEnabled, setHeatmapEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure', 'Cultural']

  return (
    <Container>
      <Section
        title="Interactive Travel Map"
        subtitle="Explore destinations visually on our interactive map"
      >
        {/* MAP CONTROLS */}
        <Card className="p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="heatmap"
                checked={heatmapEnabled}
                onChange={e => setHeatmapEnabled(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="heatmap" className="text-sm">Show Heatmap</label>
            </div>
            
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* MAP */}
        <Card className="overflow-hidden">
          <MapView />
        </Card>

        {/* MAP LEGEND */}
        <Card className="p-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Beach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">Mountain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">City</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm">Adventure</span>
            </div>
          </div>
        </Card>

        {/* DESTINATION LIST */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Destinations on Map</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.slice(0, 6).map(dest => (
              <Card key={dest.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium">{dest.name}</h4>
                    <p className="text-sm text-gray-600">{dest.country}</p>
                    <Badge className="mt-1 text-xs">{dest.rating} ★</Badge>
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
