import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { restaurants } from '../data/restaurants'

export default function ExplorePage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')

  const allItems = [
    ...destinations.map(d => ({ ...d, type: 'destination' })),
    ...hotels.map(h => ({ ...h, type: 'hotel' })),
    ...restaurants.map(r => ({ ...r, type: 'restaurant' }))
  ]

  const categories = ['All', 'Destination', 'Hotel', 'Restaurant']
  const priceRanges = ['all', 'budget', 'mid', 'premium']

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.country && item.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (item.city && item.city.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Destination' && item.type === 'destination') ||
                           (selectedCategory === 'Hotel' && item.type === 'hotel') ||
                           (selectedCategory === 'Restaurant' && item.type === 'restaurant')
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && (!item.price || item.price < 2000)) ||
                        (priceRange === 'mid' && item.price >= 2000 && item.price < 5000) ||
                        (priceRange === 'premium' && item.price >= 5000)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <Container>
      <Section
        title={t('explore.title')}
        subtitle={t('explore.subtitle')}
      >
        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder={t('explore.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (&lt;₹2000)</option>
                <option value="mid">Mid (₹2000-₹5000)</option>
                <option value="premium">Premium (&gt;₹5000)</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Found {filteredItems.length} results
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              Sort by Rating
            </Button>
            <Button variant="ghost" size="sm">
              Sort by Price
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={`${item.type}-${item.id}`} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 backdrop-blur capitalize">
                    {item.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 backdrop-blur">
                    {item.rating} ★
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">
                  {item.country || item.city}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  {item.price && (
                    <div>
                      <span className="text-2xl font-bold text-purple-600">₹{item.price}</span>
                      <span className="text-sm text-gray-500">
                        {item.city ? t('hotels.perNight') : item.cuisine ? '' : '/ person'}
                      </span>
                    </div>
                  )}
                  {item.cuisine && (
                    <Badge variant="secondary">{item.cuisine}</Badge>
                  )}
                  {item.bestSeason && (
                    <Badge variant="secondary">{item.bestSeason}</Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link to={`/details/${item.id}`}>
                    <Button size="sm" className="flex-1">
                      {t('explore.explore')}
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    Save
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button onClick={() => {
              setSearchTerm('')
              setSelectedCategory('All')
              setPriceRange('all')
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredItems.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="ghost" size="lg">
              Load More Results
            </Button>
          </div>
        )}
      </Section>
    </Container>
  )
}
