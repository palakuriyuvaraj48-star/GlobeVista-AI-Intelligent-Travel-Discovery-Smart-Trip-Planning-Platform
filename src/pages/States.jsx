import Container from '../components/ui/Container'
import DestinationCard from '../components/ui/DestinationCard'

const statesDestinations = [
  {
    id: 1,
    name: "Kerala Backwaters",
    location: "Kerala",
    rating: 4.8,
    description: "God's Own Country. Serene backwaters and lush greenery.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800"
  },
  {
    id: 2,
    name: "Jaipur City",
    location: "Rajasthan",
    rating: 4.7,
    description: "The Pink City famous for its historic palaces and forts.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800"
  },
  {
    id: 3,
    name: "Himachal Mountains",
    location: "Himachal Pradesh",
    rating: 4.9,
    description: "Snow-capped peaks and adventurous trails.",
    image: "https://images.unsplash.com/photo-1605649487212-4d4ce3ae4e4a?w=800"
  },
  {
    id: 4,
    name: "Goa Beach",
    location: "Goa",
    rating: 4.6,
    description: "Sun, sand, and sea. The perfect beach getaway in India.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800"
  }
]

export default function States() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">Explore by State</h1>
        <p className="mt-4 text-lg text-slate-600">Discover incredible destinations ranked by their region and state.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statesDestinations.map(dest => (
          <DestinationCard 
            key={dest.id}
            {...dest}
          />
        ))}
      </div>
    </Container>
  )
}
