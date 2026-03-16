import Container from '../components/ui/Container'
import DestinationCard from '../components/ui/DestinationCard'

const foreignDestinations = [
  {
    id: 1,
    name: "Paris",
    location: "France",
    rating: 4.8,
    description: "The city of light, love, and the Eiffel Tower. A must-visit European destination.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
  },
  {
    id: 2,
    name: "Tokyo",
    location: "Japan",
    rating: 4.9,
    description: "A bustling metropolis where neon-lit streets meet historic temples.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
  },
  {
    id: 3,
    name: "Bali Island",
    location: "Indonesia",
    rating: 4.7,
    description: "Tropical beaches, ancient temples, and vibrant culture await in Bali.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800"
  },
  {
    id: 4,
    name: "Bangkok City",
    location: "Thailand",
    rating: 4.6,
    description: "Ornate shrines and vibrant street life in Thailand's capital.",
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800"
  }
]

export default function ForeignPlaces() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">Foreign Places</h1>
        <p className="mt-4 text-lg text-slate-600">Explore top rated international destinations for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {foreignDestinations.map(dest => (
          <DestinationCard 
            key={dest.id}
            {...dest}
          />
        ))}
      </div>
    </Container>
  )
}
