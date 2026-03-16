import Container from '../components/ui/Container'

const hotels = [
  {
    id: 1,
    name: "Taj Mahal Palace",
    location: "Mumbai",
    price: "₹18,000",
    rating: 4.9,
    amenities: ["Free WiFi", "Pool", "Spa", "Dining"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500"
  },
  {
    id: 2,
    name: "Himalayan Vista Lodge",
    location: "Manali",
    price: "₹9,790",
    rating: 4.8,
    amenities: ["Free WiFi", "Mountain View", "Breakfast", "Heater"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
  }
]

export default function CompareHotels() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">Compare Hotels</h1>
        <p className="mt-4 text-lg text-slate-600">Side-by-side comparison of your shortlisted properties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hotels.map(hotel => (
          <div key={hotel.id} className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm flex flex-col">
            <img src={hotel.image} alt={hotel.name} className="h-64 w-full object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold">{hotel.name}</h3>
              <p className="text-slate-500 mb-4">{hotel.location}</p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-purple-600">{hotel.price}<span className="text-sm text-slate-500 font-normal">/night</span></span>
                <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">★ {hotel.rating}</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                {hotel.amenities.map(amenity => (
                  <li key={amenity} className="flex items-center gap-2 text-slate-700">
                    <span className="text-green-500">✓</span> {amenity}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition mt-auto">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
