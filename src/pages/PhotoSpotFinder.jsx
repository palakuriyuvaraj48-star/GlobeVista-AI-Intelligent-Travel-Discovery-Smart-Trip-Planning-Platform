import Container from '../components/ui/Container'

const spots = [
  {
    id: 1,
    name: "Gates of Heaven",
    location: "Lempuyang Temple, Bali",
    tips: "Arrive before sunrise to avoid a 2-hour queue for photos.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500"
  },
  {
    id: 2,
    name: "Eiffel Tower at Night",
    location: "Trocadéro Square, Paris",
    tips: "The tower sparkles for 5 minutes at the top of every hour after sunset.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500"
  }
]

export default function PhotoSpotFinder() {
  return (
    <Container className="py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Photo Spot Finder</h1>
        <p className="text-lg text-slate-600">Find the most Instagrammable locations for your trip.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {spots.map(spot => (
          <div key={spot.id} className="rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200">
            <img src={spot.image} alt={spot.name} className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{spot.name}</h3>
              <p className="text-sm text-purple-600 font-medium mb-4">📍 {spot.location}</p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <span className="font-bold text-slate-700 text-sm block mb-1">📸 Photography Tip:</span>
                <p className="text-sm text-slate-600">{spot.tips}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}