import { useState, useMemo } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { getLocalGuides } from '../utils/aiEngine'

const mockExperiences = [
  {
    id: 101,
    name: 'Home-cooked Heritage Meal',
    category: 'Culinary',
    city: 'Goa',
    duration: '3 hours',
    rate: 1500,
    languages: ['English', 'Hindi'],
    rating: 4.9,
    reviews: 42,
    avatar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150',
    bio: 'Dine in an authentic 200-year-old Portuguese-Goan villa. Savor fresh seafood curry and traditional Bebinca.'
  },
  {
    id: 102,
    name: 'Village Farm & Spice Walk',
    category: 'Trekking',
    city: 'Goa',
    duration: '5 hours',
    rate: 2200,
    languages: ['English', 'Hindi'],
    rating: 4.8,
    reviews: 28,
    avatar: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=150',
    bio: 'Guided trek through organic vanilla and cardamom orchards, ending with a traditional lunch on banana leaves.'
  },
  {
    id: 103,
    name: 'Sunset Cliff Photography Tour',
    category: 'Photography',
    city: 'Goa',
    duration: '3 hours',
    rate: 1800,
    languages: ['English'],
    rating: 4.7,
    reviews: 19,
    avatar: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150',
    bio: 'Discover secret coastal viewpoints and master golden-hour compositions with a local photography guide.'
  },
  {
    id: 104,
    name: 'Fort Heritage Architecture Walk',
    category: 'Architecture',
    city: 'Jaipur',
    duration: '4 hours',
    rate: 2000,
    languages: ['English', 'Hindi', 'Spanish'],
    rating: 4.9,
    reviews: 51,
    avatar: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=150',
    bio: 'Explore medieval palaces, hidden stepwells, and ancient gates detailing Rajput military history.'
  }
]

export default function LocalGuides() {
  const [city, setCity] = useState('Goa')
  const [searchCity, setSearchCity] = useState('Goa')
  const [selectedLang, setSelectedLang] = useState('All')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [bookedGuideName, setBookedGuideName] = useState(null)
  
  // Toggles between guides booking and local experiences marketplace (Feature 5)
  const [displayMode, setDisplayMode] = useState('guides') // 'guides' or 'marketplace'

  const specialties = ['All', 'History', 'Trekking', 'Culinary', 'Architecture', 'Photography']
  const languages = ['All', 'English', 'Hindi', 'French', 'Spanish']

  const guides = useMemo(() => {
    const data = getLocalGuides(searchCity)
    return data.map(g => {
      const langArray = typeof g.languages === 'string'
        ? g.languages.split(',').map(s => s.trim())
        : (Array.isArray(g.languages) ? g.languages : []);
      
      const specialtyStr = g.specialty || g.specialization || 'General';

      let rateNum = 1200;
      if (typeof g.rate === 'number') {
        rateNum = g.rate;
      } else if (typeof g.price === 'string') {
        const match = g.price.match(/\d+([.,]\d+)?/);
        if (match) {
          rateNum = parseInt(match[0].replace(/[,.]/g, '')) * 8;
        }
      }

      return {
        ...g,
        languages: langArray,
        specialty: specialtyStr,
        rate: rateNum
      }
    }).filter(g => {
      const matchLang = selectedLang === 'All' || g.languages.includes(selectedLang)
      const matchSpec = selectedSpecialty === 'All' || g.specialty === selectedSpecialty
      return matchLang && matchSpec
    })
  }, [searchCity, selectedLang, selectedSpecialty])

  const experiences = useMemo(() => {
    return mockExperiences.filter(e => {
      const matchCity = e.city.toLowerCase() === searchCity.toLowerCase()
      const matchLang = selectedLang === 'All' || e.languages.includes(selectedLang)
      const matchSpec = selectedSpecialty === 'All' || e.category === selectedSpecialty
      return matchCity && matchLang && matchSpec
    })
  }, [searchCity, selectedLang, selectedSpecialty])

  const handleSearch = () => {
    if (!city.trim()) return
    setSearchCity(city)
  }

  const handleBookItem = (item, type) => {
    const bookings = JSON.parse(localStorage.getItem('bookingHistory') || '[]')
    bookings.push({
      id: Date.now(),
      type: 'experience',
      destination: searchCity,
      date: new Date().toLocaleDateString(),
      participants: 1,
      total: item.rate,
      bookingId: `GV-${type === 'guide' ? 'GD' : 'EXP'}-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'Confirmed',
      guideName: item.name
    })
    localStorage.setItem('bookingHistory', JSON.stringify(bookings))
    setBookedGuideName(item.name)
    setTimeout(() => setBookedGuideName(null), 4000)
  }

  return (
    <Container className="py-12 max-w-5xl">
      <Section
        title="Local Exchange Portal"
        subtitle="Settle local guide tours or book immersive, authentic cultural marketplace experiences"
      >
        {bookedGuideName && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white font-bold p-4 rounded-2xl shadow-2xl border border-slate-700 animate-slideIn">
            ✨ Successfully reserved: "{bookedGuideName}"! Reference details in Saved Bookings.
          </div>
        )}

        {/* Toggles between Guides and Experiences Marketplace */}
        <div className="flex gap-4 mb-8 border-b pb-4">
          <button
            onClick={() => setDisplayMode('guides')}
            className={`pb-2 px-3 font-bold text-sm border-b-2 transition-colors ${
              displayMode === 'guides'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            👥 Book Verified Local Guides
          </button>
          <button
            onClick={() => setDisplayMode('marketplace')}
            className={`pb-2 px-3 font-bold text-sm border-b-2 transition-colors ${
              displayMode === 'marketplace'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            🛖 Local Experiences Marketplace
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Filters */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-5 bg-white border border-slate-200 shadow-sm rounded-2xl space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Destination</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 p-2.5 border border-slate-300 rounded-xl text-xs outline-none focus:border-purple-500 font-semibold"
                    placeholder="Enter city (e.g. Goa, Jaipur)"
                  />
                  <Button onClick={handleSearch} className="bg-slate-950 text-white py-1.5 px-3 text-xs rounded-xl">Search</Button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Specialty Focus</label>
                <div className="space-y-1">
                  {specialties.map(spec => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialty(spec)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedSpecialty === spec
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Guide Language</label>
                <div className="space-y-1">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLang(lang)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedLang === lang
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Listings */}
          <div className="lg:col-span-8 space-y-6">
            {displayMode === 'guides' ? (
              <>
                <h3 className="text-xl font-bold text-slate-800 border-b pb-3 capitalize">Guides available in {searchCity}</h3>
                {guides.length === 0 ? (
                  <div className="text-center py-16 text-slate-400 bg-white border border-slate-100 rounded-3xl">
                    No guides match these filters.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {guides.map((guide, index) => (
                      <Card key={index} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border border-slate-200">
                          <img src={guide.avatar} alt={guide.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h4 className="text-lg font-bold text-slate-900">{guide.name}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge className="bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-bold py-0.5">{guide.specialty}</Badge>
                                <span className="text-xs text-slate-500 font-medium">🗣️ {guide.languages.join(', ')}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-extrabold text-purple-600">₹{guide.rate}</span>
                              <span className="text-xs text-slate-500 block font-medium">per day</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">{guide.bio}</p>
                          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                            <span className="text-xs font-bold text-amber-700">⭐ {guide.rating} ({guide.reviews} reviews)</span>
                            <Button onClick={() => handleBookItem(guide, 'guide')} className="bg-slate-950 text-white font-bold py-2 px-5 rounded-xl text-xs">Book Guide Tour</Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-800 border-b pb-3 capitalize">Experiences marketplace in {searchCity}</h3>
                {experiences.length === 0 ? (
                  <div className="text-center py-16 text-slate-400 bg-white border border-slate-100 rounded-3xl">
                    No authentic experiences matching filters logged in this city. Try Goa or Jaipur.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <Card key={index} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                        <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
                          <img src={exp.avatar} alt={exp.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h4 className="text-lg font-bold text-slate-900">{exp.name}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] font-bold py-0.5">{exp.category}</Badge>
                                <span className="text-xs text-slate-500 font-medium">⏳ Duration: {exp.duration} | 🗣️ {exp.languages.join(', ')}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-extrabold text-purple-600">₹{exp.rate}</span>
                              <span className="text-xs text-slate-500 block font-medium">per guest booking</span>
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">{exp.bio}</p>
                          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                            <span className="text-xs font-bold text-amber-700">⭐ {exp.rating} ({exp.reviews} reviews)</span>
                            <Button onClick={() => handleBookItem(exp, 'experience')} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-xl text-xs">Book Experience</Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Section>
    </Container>
  )
}
