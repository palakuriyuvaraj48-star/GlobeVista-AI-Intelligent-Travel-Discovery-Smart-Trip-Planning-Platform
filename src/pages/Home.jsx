import { useState } from 'react';
import { destinations } from '../data/destinations';
import { hotels } from '../data/hotels';

const trending = [
  { id: 1, name: 'Paris', country: 'France', rating: 4.9, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { id: 2, name: 'Dubai', country: 'UAE', rating: 4.8, image: 'https://images.unsplash.com/photo-1465410460893-7f6a7d2a3c1b' },
  { id: 3, name: 'Tokyo', country: 'Japan', rating: 4.7, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99' },
  { id: 4, name: 'Bali', country: 'Indonesia', rating: 4.8, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
];

const travelCategories = [
  { name: 'Beaches', icon: '🏖️' },
  { name: 'Mountains', icon: '🏔️' },
  { name: 'Cities', icon: '🌆' },
  { name: 'Adventure', icon: '🧗' },
  { name: 'Culture', icon: '🎭' },
  { name: 'Food', icon: '🍽️' },
];

const smartTools = [
  { icon: '🤖', title: 'AI Trip Planner', desc: 'Let AI plan your perfect trip.', link: '/ai-trip-planner' },
  { icon: '💸', title: 'Budget Calculator', desc: 'Estimate your travel costs easily.', link: '/budget-calculator' },
  { icon: '🗺️', title: 'Travel Map Explorer', desc: 'Explore destinations visually.', link: '/explore' },
  { icon: '✨', title: 'Destination Recommender', desc: 'Get personalized suggestions.', link: '/destination-recommender' },
];

const featuredHotels = hotels.slice(0, 3);

const inspirationGallery = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://images.unsplash.com/photo-1468421870903-4df1664ac249',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
];

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-white">
      {/* SECTION 1 — HERO SEARCH */}
      <section className="relative h-[500px] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl font-bold text-white text-center">Discover your next adventure</h1>
          <p className="text-lg text-white mt-3 text-center">Find the best destinations, hotels, and experiences.</p>
          <div className="mt-8 w-full flex justify-center">
            <div className="max-w-xl w-full flex items-center bg-white rounded-full shadow-xl px-5 py-3 gap-3">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search destinations, hotels, restaurants..."
                className="flex-1 bg-transparent outline-none text-lg px-2"
              />
              <button className="bg-indigo-600 text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 transition-all duration-300">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRENDING DESTINATIONS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map(dest => (
            <div key={dest.id} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
              <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">{dest.name}</span>
                  <span className="text-sm text-slate-500">{dest.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 font-bold">★ {dest.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — TRAVEL CATEGORIES */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Travel Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {travelCategories.map(cat => (
            <div key={cat.name} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="text-lg font-semibold">{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — SMART TRAVEL TOOLS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Smart Travel Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {smartTools.map(tool => (
            <div key={tool.title} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <div className="text-xl font-bold mb-2">{tool.title}</div>
              <div className="text-slate-500 mb-4 text-center">{tool.desc}</div>
              <a href={tool.link} className="bg-indigo-600 text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 transition-all duration-300">Try Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — POPULAR HOTELS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Popular Hotels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredHotels.map(hotel => (
            <div key={hotel.id} className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
              <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover rounded-xl" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">{hotel.name}</span>
                  <span className="text-sm text-slate-500">{hotel.city}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 font-bold">★ {hotel.rating}</span>
                  <span className="text-indigo-600 font-semibold">${hotel.pricePerNight}/night</span>
                </div>
                <button className="bg-indigo-600 text-white rounded-full px-6 py-2 font-semibold shadow-xl hover:scale-105 transition-all duration-300">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — TRAVEL INSPIRATION GALLERY */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Travel Inspiration Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inspirationGallery.map((img, idx) => (
            <img key={idx} src={img} alt="Travel inspiration" className="rounded-xl object-cover w-full h-48 hover:scale-105 transition" loading="lazy" />
          ))}
        </div>
      </section>

      {/* SECTION 7 — AI TRAVEL PLANNER PROMO */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Plan your entire trip with AI</h2>
          <a href="/ai-trip-planner" className="bg-white text-indigo-600 rounded-full px-10 py-4 font-semibold shadow-xl hover:scale-105 transition-all duration-300 text-lg">Start Planning</a>
        </div>
      </section>

      {/* SECTION 8 — FINAL CALL TO ACTION */}
      <section className="container mx-auto px-6 py-16">
        <div className="rounded-xl bg-indigo-600 p-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Start your journey today</h2>
          <a href="/destinations" className="bg-white text-indigo-600 rounded-full px-10 py-4 font-semibold shadow-xl hover:scale-105 transition-all duration-300 text-lg">Explore Destinations</a>
        </div>
      </section>
    </div>
  );
}