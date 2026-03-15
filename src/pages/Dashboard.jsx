import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { events } from '../data/events'
import { places } from '../data/places'
import { getTravelPersonality, setTravelPersonality } from '../ai/AIMoodEngine'

const heroImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920'

const aiSuggestionChips = ['Goa', 'Bali', 'Dubai', 'Paris', 'Manali']

const popularDestinations = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
  },
  {
    name: 'Santorini',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
  },
  {
    name: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=1200',
  },
]

const experiences = [
  {
    title: 'Food Tours',
    description: 'Chef-led tastings and curated street-food trails.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200',
  },
  {
    title: 'Adventure Trips',
    description: 'Trekking, island hopping, and adrenaline escapes.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  },
  {
    title: 'Nightlife Exploration',
    description: 'Rooftop lounges, live music, and city lights.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
  },
  {
    title: 'Nature Trails',
    description: 'Waterfalls, scenic drives, and hidden sanctuaries.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200',
  },
]

const premiumHotels = [
  {
    name: 'Taj Exotica Resort',
    location: 'Goa, India',
    rating: 4.9,
    price: '?24,500/night',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?w=1200',
  },
  {
    name: 'The Oberoi Mumbai',
    location: 'Mumbai, India',
    rating: 4.8,
    price: '?22,400/night',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
  },
  {
    name: 'Rambagh Palace Jaipur',
    location: 'Jaipur, India',
    rating: 4.9,
    price: '?28,900/night',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
  },
]

const aiTravelTools = [
  {
    title: 'AI Trip Autopilot',
    description: 'Generate full itineraries in seconds.',
    link: '/ai-autopilot',
  },
  {
    title: 'AI Destination Recommender',
    description: 'Smart discovery based on your vibe.',
    link: '/recommendations',
  },
  {
    title: 'Travel Map Explorer',
    description: 'Interactive map with AI highlights.',
    link: '/travel-map',
  },
  {
    title: 'Budget Planner',
    description: 'See your spend forecast instantly.',
    link: '/budget',
  },
]

const trendingTrips = [
  {
    title: 'Goa Beach Escape',
    location: 'Goa · 4D/3N',
    rating: 4.8,
    price: '?18,990',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
  },
  {
    title: 'Bali Island Retreat',
    location: 'Bali · 5D/4N',
    rating: 4.9,
    price: '?30,990',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
  },
  {
    title: 'Dubai Luxury Weekend',
    location: 'Dubai · 3D/2N',
    rating: 4.7,
    price: '?24,990',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=1200',
  },
]

const travelStories = [
  {
    title: 'Sunset in Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
  },
  {
    title: 'Night Markets in Bangkok',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200',
  },
  {
    title: 'Hidden Waterfalls in Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
  },
  {
    title: 'Desert Dunes in Dubai',
    location: 'UAE',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
  },
]

const aiInsights = [
  '? Goa is trending this week',
  '? Bali has the best beach weather',
  '? Hidden gem discovered near Jaipur',
]

const predictorCards = [
  {
    destination: 'Bali',
    bestTime: 'April – October',
    reasons: ['Best weather', 'Popular travel season', 'Lower rain probability'],
  },
  {
    destination: 'Paris',
    bestTime: 'May – September',
    reasons: ['Longer daylight', 'Outdoor cafe season', 'Festival calendar'],
  },
  {
    destination: 'Goa',
    bestTime: 'November – February',
    reasons: ['Pleasant evenings', 'Peak beach season', 'Low humidity'],
  },
]

const personalizationOptions = ['Adventure', 'Food', 'Luxury', 'Budget', 'Nightlife']

const feedItems = {
  destinations: [
    { title: 'Tokyo Skyline Escape', tag: 'Nightlife', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200' },
    { title: 'Swiss Alpine Hike', tag: 'Adventure', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200' },
    { title: 'Jaipur Heritage Stay', tag: 'Luxury', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200' },
    { title: 'Bangkok Food Crawl', tag: 'Food', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200' },
  ],
  hotels: [
    { title: 'The Oberoi Mumbai', tag: 'Luxury' },
    { title: 'Alila Seminyak', tag: 'Adventure' },
    { title: 'Rambagh Palace Jaipur', tag: 'Luxury' },
    { title: 'Zostel Goa', tag: 'Budget' },
  ],
  events: [
    { title: 'Goa Beach Festival', tag: 'Nightlife' },
    { title: 'Jaipur Food Bazaar', tag: 'Food' },
    { title: 'Himalayan Trek Week', tag: 'Adventure' },
    { title: 'Paris Art Night', tag: 'Luxury' },
  ],
  restaurants: [
    { title: 'Indian Accent', tag: 'Food' },
    { title: 'Merah Putih Bali', tag: 'Food' },
    { title: 'Le Jules Verne', tag: 'Luxury' },
    { title: 'Night Market Izakaya', tag: 'Nightlife' },
  ],
}

const normalizePreference = (value) => {
  if (!value) return ''
  if (value.includes('Adventure')) return 'Adventure'
  if (value.includes('Food')) return 'Food'
  if (value.includes('Luxury')) return 'Luxury'
  if (value.includes('Budget')) return 'Budget'
  if (value.includes('Nightlife')) return 'Nightlife'
  return value
}

function SectionHeader({ title, description, action }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {description ? <p className="mt-2 text-gray-600">{description}</p> : null}
      </div>
      {action}
    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [searchForm, setSearchForm] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
  })
  const [preference, setPreference] = useState(() => getTravelPersonality())

  const normalizedPreference = normalizePreference(preference)

  const personalizedFeed = useMemo(() => {
    if (!normalizedPreference) return feedItems
    return {
      destinations: feedItems.destinations.filter((item) => item.tag === normalizedPreference),
      hotels: feedItems.hotels.filter((item) => item.tag === normalizedPreference),
      events: feedItems.events.filter((item) => item.tag === normalizedPreference),
      restaurants: feedItems.restaurants.filter((item) => item.tag === normalizedPreference),
    }
  }, [normalizedPreference])

  const handlePreference = (value) => {
    setTravelPersonality(value)
    setPreference(value)
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="relative overflow-hidden">
        <img src={heroImage} alt="GlobeVista AI" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/60 to-slate-900/30" />
        <div className="section-shell relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Discover the World with GlobeVista AI</h1>
            <p className="mt-3 text-lg text-white/80">Plan smarter trips using AI-powered travel discovery.</p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/25 bg-white/95 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
              <input
                type="text"
                value={searchForm.destination}
                onChange={(event) => setSearchForm((current) => ({ ...current, destination: event.target.value }))}
                placeholder="Destination"
                className="h-12 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-purple-500"
              />
              <input
                type="date"
                value={searchForm.checkIn}
                onChange={(event) => setSearchForm((current) => ({ ...current, checkIn: event.target.value }))}
                className="h-12 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-purple-500"
              />
              <input
                type="date"
                value={searchForm.checkOut}
                onChange={(event) => setSearchForm((current) => ({ ...current, checkOut: event.target.value }))}
                className="h-12 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-purple-500"
              />
              <select
                value={searchForm.guests}
                onChange={(event) => setSearchForm((current) => ({ ...current, guests: event.target.value }))}
                className="h-12 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-purple-500"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
              </select>
              <button type="button" onClick={() => navigate('/places')} className="btn-primary h-12">
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {aiSuggestionChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSearchForm((current) => ({ ...current, destination: chip }))}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-shell space-y-20">
        <Reveal>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <SectionHeader title="AI Travel Insights" description="Live intelligence from GlobeVista AI." />
            <div className="mt-4 flex flex-wrap gap-3">
              {aiInsights.map((insight) => (
                <span key={insight} className="rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-600">
                  {insight}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Popular Destinations" description="Top picks that feel like Airbnb Explore." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {popularDestinations.map((destination) => (
                <article key={destination.name} className="group relative h-64 overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl">
                  <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Experiences" description="Signature activities curated by GlobeVista AI." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experiences.map((experience) => (
                <article key={experience.title} className="card-base card-hover">
                  <div className="relative h-40 overflow-hidden">
                    <img src={experience.image} alt={experience.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{experience.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Premium Hotels" description="Airbnb-style stays for luxury travelers." />
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {premiumHotels.map((hotel) => (
                <article key={hotel.name} className="card-base card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900">{hotel.name}</h3>
                      <span className="text-sm font-semibold text-amber-500">? {hotel.rating}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{hotel.location}</p>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{hotel.price}</p>
                    <button type="button" className="btn-primary mt-4 w-full">
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="AI Travel Tools" description="Power features to plan smarter trips." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {aiTravelTools.map((tool) => (
                <article key={tool.title} className="card-base card-hover p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{tool.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
                  <button type="button" onClick={() => navigate(tool.link)} className="btn-primary mt-4 w-full">
                    Open Tool
                  </button>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Trending Trips" description="What travelers are booking right now." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trendingTrips.map((trip) => (
                <article key={trip.title} className="card-base card-hover">
                  <div className="relative h-44 overflow-hidden">
                    <img src={trip.image} alt={trip.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{trip.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{trip.location}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-amber-500">? {trip.rating}</span>
                      <span className="text-sm font-semibold text-slate-900">{trip.price}</span>
                    </div>
                    <button type="button" className="btn-primary mt-4 w-full">
                      View Trip
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Travel Stories" description="Visual journeys turned into shareable stories." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {travelStories.map((story) => (
                <article key={story.title} className="group overflow-hidden rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl">
                  <div className="relative h-44 overflow-hidden">
                    <img src={story.image} alt={story.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-900">{story.title}</h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <SectionHeader title="AI Smart Trip Predictor" description="Best time to visit, powered by AI." />
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {predictorCards.map((card) => (
                <div key={card.destination} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{card.destination}</h3>
                  <p className="mt-2 text-sm font-semibold text-purple-600">Best time: {card.bestTime}</p>
                  <ul className="mt-3 text-sm text-gray-600">
                    {card.reasons.map((reason) => (
                      <li key={reason}>• {reason}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            <SectionHeader title="AI Personalization Engine" description="What kind of traveler are you?" />
            <div className="mt-4 flex flex-wrap gap-3">
              {personalizationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handlePreference(option)}
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold transition duration-300 ${
                    normalizedPreference === option
                      ? 'border-purple-500 bg-purple-50 text-purple-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-600">
              {normalizedPreference ? `Personalized for ${normalizedPreference} travelers.` : 'Choose a preference to personalize recommendations.'}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="AI Travel Feed" description="A personalized feed of destinations, hotels, events, and restaurants." />
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="card-base p-6">
                <h3 className="text-lg font-semibold text-slate-900">Recommended Destinations</h3>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {(personalizedFeed.destinations.length ? personalizedFeed.destinations : feedItems.destinations).map((item) => (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <img src={item.image} alt={item.title} className="h-16 w-20 rounded-xl object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.tag} inspired</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-6">
                <h3 className="text-lg font-semibold text-slate-900">Trending Hotels</h3>
                <div className="mt-4 space-y-3">
                  {(personalizedFeed.hotels.length ? personalizedFeed.hotels : feedItems.hotels).map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.tag} favorite</p>
                      </div>
                      <button type="button" className="btn-ghost px-3 py-1 text-xs">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-6">
                <h3 className="text-lg font-semibold text-slate-900">Local Events</h3>
                <div className="mt-4 space-y-3">
                  {(personalizedFeed.events.length ? personalizedFeed.events : feedItems.events).map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.tag} focus</p>
                      </div>
                      <button type="button" className="btn-ghost px-3 py-1 text-xs">
                        Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-6">
                <h3 className="text-lg font-semibold text-slate-900">Top Restaurants</h3>
                <div className="mt-4 space-y-3">
                  {(personalizedFeed.restaurants.length ? personalizedFeed.restaurants : feedItems.restaurants).map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-gray-600">{item.tag} pick</p>
                      </div>
                      <button type="button" className="btn-ghost px-3 py-1 text-xs">
                        Reserve
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeader title="Smart Discovery" description="Curated travel data synced with the platform." />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {places.slice(0, 4).map((place) => (
                <article key={place.id} className="card-base card-hover p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{place.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{place.city}</p>
                </article>
              ))}
              {events.slice(0, 2).map((event) => (
                <article key={event.id} className="card-base card-hover p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{event.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{event.location}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="card-base card-hover p-6">
              <h3 className="text-lg font-semibold text-slate-900">AI Trip Autopilot</h3>
              <p className="mt-2 text-sm text-gray-600">Generate complete itineraries with hotels, food, and events.</p>
              <button type="button" onClick={() => navigate('/ai-autopilot')} className="btn-primary mt-4">
                Open Autopilot
              </button>
            </article>
            <article className="card-base card-hover p-6">
              <h3 className="text-lg font-semibold text-slate-900">Travel Story Timeline</h3>
              <p className="mt-2 text-sm text-gray-600">Turn your trip into a visual story with highlights and photos.</p>
              <button type="button" onClick={() => navigate('/trip-story')} className="btn-primary mt-4">
                View Stories
              </button>
            </article>
          </section>
        </Reveal>
      </div>
    </div>
  )
}
