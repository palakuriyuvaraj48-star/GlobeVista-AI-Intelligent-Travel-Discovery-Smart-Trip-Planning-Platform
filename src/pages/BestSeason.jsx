import Container from '../components/ui/Container'
import DestinationCard from '../components/ui/DestinationCard'

const seasonalDestinations = [
  {
    id: 1,
    name: "Gulmarg Winter Sport",
    location: "Kashmir",
    rating: 4.9,
    description: "The best winter destination for skiing and snowfalls.",
    image: "https://images.unsplash.com/photo-1520626337584-6f96620caee7?w=800"
  },
  {
    id: 2,
    name: "Munnar Monsoons",
    location: "Kerala",
    rating: 4.8,
    description: "Lush tea gardens that come alive during the monsoon showers.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800"
  },
  {
    id: 3,
    name: "Ladakh Summer Trek",
    location: "Ladakh",
    rating: 4.7,
    description: "Perfect summer escape with rugged mountains and clear skies.",
    image: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?w=800"
  },
  {
    id: 4,
    name: "Goa Beach",
    location: "Goa",
    rating: 4.6,
    description: "Ideal winter warmth with golden beaches and vibrant nightlife.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800"
  }
]

export default function BestSeason() {
  return (
    <Container className="py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 border-b pb-4">Best by Season</h1>
        <p className="mt-4 text-lg text-slate-600">Curated destinations based on the best time of the year to visit.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {seasonalDestinations.map(dest => (
          <DestinationCard 
            key={dest.id}
            {...dest}
          />
        ))}
      </div>
    </Container>
  )
}
