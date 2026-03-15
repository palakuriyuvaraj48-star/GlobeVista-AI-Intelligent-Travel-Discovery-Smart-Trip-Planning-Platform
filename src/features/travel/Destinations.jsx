import { destinations } from '../../data/destinations'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Badge from '../../components/ui/Badge'

export default function Destinations() {
  return (
    <Container>
      <Section
        title="Explore Amazing Destinations"
        subtitle="Discover the most beautiful places around the world"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <Card key={dest.id} className="overflow-hidden group">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{dest.name}</h3>
                  <Badge>{dest.rating} ★</Badge>
                </div>
                <p className="text-gray-600 mb-2">{dest.country}</p>
                <p className="text-sm text-gray-500 mb-4">{dest.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Best: {dest.bestSeason}</span>
                  <button className="text-indigo-600 font-medium hover:text-indigo-700">
                    Explore →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}
