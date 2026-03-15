import { hotels } from '../../data/hotels'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Badge from '../../components/ui/Badge'

export default function Hotels() {
  return (
    <Container>
      <Section
        title="Find the Best Hotels"
        subtitle="Comfortable stays for every traveler"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map(hotel => (
            <Card key={hotel.id} className="overflow-hidden group">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <Badge>{hotel.rating} ★</Badge>
                </div>
                <p className="text-gray-600 mb-2">{hotel.city}</p>
                <p className="text-sm text-gray-500 mb-4">{hotel.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">₹{hotel.price}</span>
                  <button className="text-indigo-600 font-medium hover:text-indigo-700">
                    Book Now →
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
