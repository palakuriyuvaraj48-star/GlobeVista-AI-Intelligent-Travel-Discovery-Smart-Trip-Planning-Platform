import { restaurants } from '../../data/restaurants'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Badge from '../../components/ui/Badge'

export default function Restaurants() {
  return (
    <Container>
      <Section
        title="Top Restaurants Worldwide"
        subtitle="Enjoy the best food experiences"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map(restaurant => (
            <Card key={restaurant.id} className="overflow-hidden group">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <Badge>{restaurant.rating} ★</Badge>
                </div>
                <p className="text-gray-600 mb-2">{restaurant.city}</p>
                <p className="text-sm text-gray-500 mb-4">{restaurant.cuisine} • {restaurant.priceRange}</p>
                <button className="w-full bg-indigo-600 text-white rounded-xl py-2 hover:bg-indigo-700 transition-colors">
                  Reserve Table
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}
