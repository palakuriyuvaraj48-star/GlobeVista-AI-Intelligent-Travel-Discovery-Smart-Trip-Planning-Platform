import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix leaflet marker icon issue
function fixLeafletIcon() {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
}

const destinations = [
  {
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    desc: 'City of Light, famous for art, fashion, and culture.',
    bestSeason: 'Spring',
    attraction: 'Eiffel Tower',
  },
  {
    name: 'Tokyo',
    lat: 35.6762,
    lng: 139.6503,
    desc: 'Vibrant metropolis blending tradition and technology.',
    bestSeason: 'Autumn',
    attraction: 'Shibuya Crossing',
  },
  {
    name: 'New York',
    lat: 40.7128,
    lng: -74.0060,
    desc: 'The city that never sleeps, known for its skyline.',
    bestSeason: 'Fall',
    attraction: 'Statue of Liberty',
  },
  {
    name: 'Bali',
    lat: -8.3405,
    lng: 115.0920,
    desc: 'Tropical paradise with beaches and temples.',
    bestSeason: 'May to September',
    attraction: 'Uluwatu Temple',
  },
];

export default function TravelMap() {
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Explore Destinations on Map</h2>
        <p className="text-slate-500">Discover popular travel spots around the world</p>
      </div>
      <div className="rounded-2xl shadow-xl p-6 bg-white">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          className="w-full h-[500px] rounded-2xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {destinations.map((dest) => (
            <Marker key={dest.name} position={[dest.lat, dest.lng]}>
              <Popup>
                <div className="min-w-[200px]">
                  <div className="font-bold text-lg mb-1">{dest.name}</div>
                  <div className="text-slate-600 mb-1">{dest.desc}</div>
                  <div className="text-sm mb-1"><span className="font-semibold">Best Season:</span> {dest.bestSeason}</div>
                  <div className="text-sm"><span className="font-semibold">Top Attraction:</span> {dest.attraction}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}