import { useState } from 'react'
import { destinations } from '../data/destinations'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'

const categories = ['All', 'Beach', 'Mountain', 'City', 'Adventure', 'Cultural']
const domains = ['All', 'Temple', 'Mountain', 'Hill', 'Beach']

export default function ExploreNew() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDomain, setSelectedDomain] = useState('All')

  const filtered = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory
    const matchesDomain = selectedDomain === 'All' || dest.domain === selectedDomain
    return matchesSearch && matchesCategory && matchesDomain
  })

  return (
    <Container>
      <Section
        title="Explore Destinations"
        subtitle="Find your perfect travel destination"
      >
        {/* FILTERS */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map(dom => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedDomain === dom
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="mt-4"
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('All')
              setSelectedDomain('All')
            }}
          >
            Reset Filters
          </Button>
        </Card>

        {/* RESULTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No destinations found matching your filters.</p>
            </div>
          ) : (
            filtered.map(dest => (
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
                    <Button size="sm">Explore</Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </Section>
    </Container>
  )
}
