import { useState } from 'react'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'

const experiences = [
  {
    id: 1,
    title: 'Northern Lights Safari',
    location: 'Tromsø, Norway',
    category: 'Adventure',
    price: '$299',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    duration: '6 hours',
    groupSize: 'Small group',
    highlight: '90% chance to see aurora'
  },
  {
    id: 2,
    title: 'Cooking Class in Tuscany',
    location: 'Florence, Italy',
    category: 'Cultural',
    price: '$149',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    duration: '4 hours',
    groupSize: 'Max 8 people',
    highlight: 'Learn authentic Italian recipes'
  },
  {
    id: 3,
    title: 'Hot Air Balloon Ride',
    location: 'Cappadocia, Turkey',
    category: 'Adventure',
    price: '$199',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549906583-daa45557398a?w=800',
    duration: '3 hours',
    groupSize: 'Shared basket',
    highlight: 'Sunrise flight over fairy chimneys'
  },
  {
    id: 4,
    title: 'Snorkeling Great Barrier Reef',
    location: 'Queensland, Australia',
    category: 'Water Sports',
    price: '$179',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    duration: 'Full day',
    groupSize: 'Max 20 people',
    highlight: 'World\'s largest coral reef system'
  },
  {
    id: 5,
    title: 'Safari in Serengeti',
    location: 'Tanzania',
    category: 'Wildlife',
    price: '$399',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    duration: 'Full day',
    groupSize: 'Small group',
    highlight: 'Big Five wildlife viewing'
  },
  {
    id: 6,
    title: 'Hiking Machu Picchu',
    location: 'Peru',
    category: 'Adventure',
    price: '$249',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94a1d1?w=800',
    duration: '2 days',
    groupSize: 'Max 12 people',
    highlight: 'Inca Trail to Lost City'
  }
]

const categories = ['All', 'Adventure', 'Cultural', 'Water Sports', 'Wildlife', 'Food & Drink']

export default function Experiences() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')

  const filteredExperiences = experiences.filter(exp => {
    const categoryMatch = selectedCategory === 'All' || exp.category === selectedCategory
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'budget' && parseInt(exp.price.replace('$', '')) < 200) ||
      (priceRange === 'mid' && parseInt(exp.price.replace('$', '')) >= 200 && parseInt(exp.price.replace('$', '')) < 300) ||
      (priceRange === 'premium' && parseInt(exp.price.replace('$', '')) >= 300)
    
    return categoryMatch && priceMatch
  })

  return (
    <Container>
      <Section
        title="Amazing Travel Experiences"
        subtitle="Discover unforgettable activities around the world"
      >
        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="flex gap-2">
                {['all', 'budget', 'mid', 'premium'].map(range => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                      priceRange === range
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {range === 'all' ? 'All Prices' : range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map(exp => (
            <Card key={exp.id} className="overflow-hidden group">
              <div className="relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur">
                    {exp.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 backdrop-blur">
                    {exp.rating} ★
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600 mb-4">{exp.location}</p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-purple-900">✨ {exp.highlight}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>⏱️</span>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>{exp.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">{exp.price}</span>
                    <span className="text-sm text-gray-500"> / person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No experiences found matching your filters.</p>
          </div>
        )}

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="ghost" size="lg">
            Load More Experiences
          </Button>
        </div>
      </Section>
    </Container>
  )
}
