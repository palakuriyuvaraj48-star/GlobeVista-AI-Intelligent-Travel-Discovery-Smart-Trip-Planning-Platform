import Container from '../components/ui/Container'
import FeatureCard from '../components/ui/FeatureCard'

const filmDestinations = [
  {
    id: 1,
    name: "Ramoji Film City",
    location: "Hyderabad",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=800"
  },
  {
    id: 2,
    name: "Bollywood Film Studio",
    location: "Mumbai",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1582012752187-5df780ec6bf8?w=800"
  }
]

export default function Movies() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">Movie & Film Tours</h1>
        <p className="mt-4 text-lg text-slate-600">Discover where your favorite movies were filmed.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filmDestinations.map(dest => (
          <FeatureCard 
            key={dest.id}
            {...dest}
          />
        ))}
      </div>
    </Container>
  )
}
