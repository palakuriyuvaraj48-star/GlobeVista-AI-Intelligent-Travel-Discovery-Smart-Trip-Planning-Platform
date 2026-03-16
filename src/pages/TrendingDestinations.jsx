import Container from '../components/ui/Container'
import DestinationCard from '../components/ui/DestinationCard'

const trendingDestinations = [
  {
    id: 1,
    name: "Kyoto",
    location: "Japan",
    rating: 4.9,
    description: "Famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
  },
  {
    id: 2,
    name: "Amalfi Coast",
    location: "Italy",
    rating: 4.8,
    description: "A 50-kilometer stretch of coastline along the southern edge of Italy's Sorrentine Peninsula.",
    image: "https://images.unsplash.com/photo-1533676101487-21ccf52bce81?w=800"
  }
]

export default function TrendingDestinations() {
  return (
    <Container className="py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Trending Destinations</h1>
        <p className="text-lg text-slate-600">The most booked and searched locations on GlobeVista this week.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {trendingDestinations.map(dest => (
          <DestinationCard 
            key={dest.id}
            {...dest}
          />
        ))}
      </div>
    </Container>
  )
}