import { useMemo, useRef, useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from "leaflet"
import "leaflet.heat"
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const aiMarkerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
})

const filters = ['All', 'Hotels', 'Restaurants', 'Events', 'Attractions']

const heatmapData = [
  [28.6139, 77.209, 0.9],
  [19.076, 72.8777, 0.8],
  [15.2993, 74.124, 0.7],
  [48.8566, 2.3522, 0.9],
]

function HeatmapLayer() {
  const map = useMap()
  
  useEffect(() => {
    const heat = L.heatLayer(heatmapData, {
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

const travelPlaces = [
  {
    id: 'hotel-1',
    name: 'Taj Exotica Resort',
    type: 'hotel',
    rating: 4.8,
    location: 'Goa, India',
    latitude: 15.2626,
    longitude: 73.9243,
    isAIRecommended: true,
  },
  {
    id: 'restaurant-1',
    name: 'Indian Accent',
    type: 'restaurant',
    rating: 4.7,
    location: 'Delhi, India',
    latitude: 28.5355,
    longitude: 77.2514,
    isAIRecommended: true,
  },
  {
    id: 'event-1',
    name: 'Tomorrowland',
    type: 'event',
    rating: 4.9,
    location: 'Boom, Belgium',
    latitude: 51.101,
    longitude: 4.4736,
    isAIRecommended: false,
  },
  {
    id: 'attraction-1',
    name: 'Taj Mahal',
    type: 'attraction',
    rating: 4.8,
    location: 'Agra, India',
    latitude: 27.1751,
    longitude: 78.0421,
    isAIRecommended: true,
  },
  {
    id: 'hotel-2',
    name: 'The Oberoi Mumbai',
    type: 'hotel',
    rating: 4.6,
    location: 'Mumbai, India',
    latitude: 18.9256,
    longitude: 72.8232,
    isAIRecommended: false,
  },
  {
    id: 'restaurant-2',
    name: 'Suvarna Mahal',
    type: 'restaurant',
    rating: 4.4,
    location: 'Jaipur, India',
    latitude: 26.9124,
    longitude: 75.7873,
    isAIRecommended: false,
  },
  {
    id: 'event-2',
    name: 'Pushkar Camel Fair',
    type: 'event',
    rating: 4.5,
    location: 'Pushkar, India',
    latitude: 26.492,
    longitude: 74.555,
    isAIRecommended: false,
  },
  {
    id: 'attraction-2',
    name: 'Eiffel Tower',
    type: 'attraction',
    rating: 4.9,
    location: 'Paris, France',
    latitude: 48.8584,
    longitude: 2.2945,
    isAIRecommended: false,
  },
]

const itineraryStops = [
  {
    day: 1,
    name: 'Hotel Check-in',
    type: 'hotel',
    location: 'Goa, India',
    latitude: 15.2626,
    longitude: 73.9243,
  },
  {
    day: 2,
    name: 'Food Trail',
    type: 'restaurant',
    location: 'Mumbai, India',
    latitude: 18.9256,
    longitude: 72.8232,
  },
  {
    day: 3,
    name: 'Cultural Event',
    type: 'event',
    location: 'Jaipur, India',
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    day: 4,
    name: 'Heritage Visit',
    type: 'attraction',
    location: 'Agra, India',
    latitude: 27.1751,
    longitude: 78.0421,
  },
]

export default function TravelMap() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showTripRoute, setShowTripRoute] = useState(true)
  const [userLocation, setUserLocation] = useState(null)
  const [showHeatmap, setShowHeatmap] = useState(true)
  const mapRef = useRef(null)
  const markerRefs = useRef({})

  const filteredPlaces = useMemo(() => {
    if (activeFilter === 'All') return travelPlaces
    const match = activeFilter.toLowerCase().slice(0, -1)
    return travelPlaces.filter((place) => place.type === match)
  }, [activeFilter])

  const itineraryCoordinates = useMemo(
    () => itineraryStops.map((stop) => [stop.latitude, stop.longitude]),
    []
  )

  const handleSelectPlace = (place) => {
    if (!mapRef.current) return
    mapRef.current.flyTo([place.latitude, place.longitude], 12, { duration: 0.8 })
    const marker = markerRefs.current[place.id]
    if (marker) marker.openPopup()
  }

  const handleExploreNearMe = () => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = [position.coords.latitude, position.coords.longitude]
      setUserLocation(coords)
      if (mapRef.current) {
        mapRef.current.flyTo(coords, 11, { duration: 1 })
      }
    })
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Travel Discovery Map</h1>
          <p className="mt-2 text-lg text-slate-600">
            Explore hotels, restaurants, events, and attractions directly on the map.
          </p>
        </div>
        <button
          type="button"
          onClick={handleExploreNearMe}
          className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105"
        >
          Explore Near Me
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter === activeFilter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          )
        })}
        <button
          type="button"
          onClick={() => setShowTripRoute((current) => !current)}
          className="ml-auto rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {showTripRoute ? 'Hide AI Trip Visualization' : 'Show AI Trip Visualization'}
        </button>
        <button
          type="button"
          onClick={() => setShowHeatmap((current) => !current)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {showHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold text-slate-900">AI Travel Insights</p>
            {['✨ Best sunset spot nearby', '✨ Top rated restaurant in this area', '✨ Hidden attraction discovered by AI'].map(
              (insight) => (
                <span
                  key={insight}
                  className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600"
                >
                  {insight}
                </span>
              )
            )}
          </div>
          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-xl">
            <MapContainer
              center={userLocation || [20.5937, 78.9629]}
              zoom={5}
              scrollWheelZoom
              className="h-full w-full"
              whenCreated={(map) => {
                mapRef.current = map
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {showHeatmap ? <HeatmapLayer /> : null}

              <MarkerClusterGroup>
                {filteredPlaces.map((place) => (
                  <Marker
                    key={place.id}
                    position={[place.latitude, place.longitude]}
                    icon={place.isAIRecommended ? aiMarkerIcon : undefined}
                    ref={(ref) => {
                      if (ref) markerRefs.current[place.id] = ref
                    }}
                  >
                    <Popup>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-900">{place.name}</p>
                        <p className="text-xs text-slate-500">{place.location}</p>
                        <p className="text-xs font-semibold text-amber-500">⭐ {place.rating}</p>
                        {place.isAIRecommended ? (
                          <p className="text-xs font-semibold text-purple-600">✨ Recommended by GlobeVista AI</p>
                        ) : null}
                        <button className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                          View Details
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>

              {showTripRoute ? (
                <>
                  {itineraryStops.map((stop, index) => (
                    <Marker key={`${stop.name}-${index}`} position={[stop.latitude, stop.longitude]} icon={aiMarkerIcon}>
                      <Popup>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-900">Day {stop.day}</p>
                          <p className="text-xs text-slate-500">{stop.name}</p>
                          <p className="text-xs text-purple-600">Activity: {stop.type}</p>
                          <p className="text-xs text-slate-500">{stop.location}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                  <Polyline positions={itineraryCoordinates} color="#7c3aed" weight={3} />
                </>
              ) : null}
            </MapContainer>
            <div className="pointer-events-none absolute left-6 top-6 rounded-2xl bg-white/90 p-4 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Popularity Heatmap</p>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-6 rounded-full bg-red-500" />
                  <span>Popular destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-6 rounded-full bg-yellow-400" />
                  <span>Trending destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-6 rounded-full bg-emerald-400" />
                  <span>Hidden gems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          {filteredPlaces.map((place) => (
            <button
              key={place.id}
              type="button"
              onClick={() => handleSelectPlace(place)}
              className="w-full rounded-xl bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">{place.name}</h3>
                <span className="text-xs font-semibold text-amber-500">⭐ {place.rating}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{place.location}</p>
              {place.isAIRecommended ? (
                <p className="mt-2 text-xs font-semibold text-purple-600">✨ AI Recommended</p>
              ) : null}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{place.type}</span>
                <span className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  View Details
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
