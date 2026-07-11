import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import DestinationHero from '../components/destination/DestinationHero'
import ThingsToDo from '../components/destination/ThingsToDo'
import BestTime from '../components/destination/BestTime'
import TripPackages from '../components/destination/TripPackages'
import TravelOptions from '../components/destination/TravelOptions'
import HotelStay from '../components/destination/HotelStay'
import ChatAssistant from '../components/destination/ChatAssistant'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

import { destinationDetails, genericDestination } from '../data/destinationDetails'

const tabs = ['Things to Do', 'Best Time to Visit', 'Book Your Trip', 'Travel', 'Stay', 'AI Shopping & Food']

export default function DestinationPage() {
  const { city: name } = useParams()
  const navigate = useNavigate()
  const [destination, setDestination] = useState(null)
  const [activeTab, setActiveTab] = useState('Things to Do')

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)

    // Lookup destination in our detailed mock data (checking keys or partial matches)
    const lookupKey = name ? name.toLowerCase() : ''
    let found = null;

    if (destinationDetails[lookupKey]) {
      found = destinationDetails[lookupKey]
    } else {
      // Trying to find partial match
      const keys = Object.keys(destinationDetails)
      for (const key of keys) {
        if (lookupKey.includes(key) || key.includes(lookupKey)) {
          found = destinationDetails[key]
          break;
        }
      }
    }

    if (found) {
      setDestination(found)
    } else {
      // Use fallback template, merging the requested name
      setDestination({ ...genericDestination, name: (name.charAt(0).toUpperCase() + name.slice(1)).replace('-', ' ') })
    }
  }, [name])

  if (!destination) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <DestinationHero destination={destination} images={destination.thumbnails} />

      {/* Feature 1: Digital Twin of Destination Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <Card className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4 mb-4">
            <div>
              <Badge className="bg-purple-100 text-purple-700 border-none font-bold text-[10px] mb-1">🔴 Live Destination Twin</Badge>
              <h3 className="text-2xl font-black text-slate-900">Digital Twin: {destination.name}</h3>
            </div>
            <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-2xl border border-purple-100 text-center shrink-0">
              <span className="text-2xl font-black block leading-none">88 <span className="text-sm font-medium">/100</span></span>
              <span className="text-[10px] font-bold uppercase tracking-wider block mt-1">Health Score</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs font-semibold text-slate-500">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span>👥 Crowd Forecast:</span>
              <span className="text-slate-800 font-bold block mt-1">Moderate (42% peak)</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span>🌦️ Weather / AQI:</span>
              <span className="text-slate-800 font-bold block mt-1">28°C Sunny | AQI 35 🟢</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span>🚗 Traffic Status:</span>
              <span className="text-slate-800 font-bold block mt-1">Low (Minimal delays)</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span>🏰 Attraction Wait:</span>
              <span className="text-slate-800 font-bold block mt-1">10-15 mins average</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span>🅿️ Parking / Transit:</span>
              <span className="text-slate-800 font-bold block mt-1">65% free | Metro Green</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-purple-50/30 border border-purple-100/50 rounded-2xl text-xs text-purple-900 font-medium leading-relaxed">
            🤖 <strong>AI Twin Summary:</strong> Excellent day for exploration. Dry skies, moderate crowds, and full transit accessibility make sightseeing highly efficient. All major heritage venues are fully open today.
          </div>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-6 font-bold text-sm transition-colors border-b-2 ${
                  activeTab === tab 
                    ? 'border-purple-600 text-purple-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className={`transition-opacity duration-300 ${activeTab === 'Things to Do' ? 'block animate-fadeIn' : 'hidden'}`}>
          <ThingsToDo activities={destination.activities} />
          
          {/* Feature 5: Virtual Destination Preview */}
          <Card className="p-6 mt-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              🎥 360° Virtual Destination Preview
            </h3>
            <p className="text-xs text-slate-500">Immerse yourself in a simulated virtual tour of {destination.name}'s key sights and scenic landmarks before you travel.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-56 rounded-2xl overflow-hidden relative border border-slate-100 shadow-xs">
                <img src={destination.coverImage || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"} alt="Virtual Tour" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <Badge className="bg-white text-purple-700 border-none font-black px-4 py-2 rounded-full text-xs shadow-md cursor-pointer hover:scale-105 transition-transform">
                    ▶ Play Virtual Walkthrough
                  </Badge>
                </div>
              </div>
              <div className="h-56 rounded-2xl overflow-hidden relative border border-slate-100 shadow-xs">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" alt="360 Panorama" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <Badge className="bg-white text-purple-700 border-none font-black px-4 py-2 rounded-full text-xs shadow-md cursor-pointer hover:scale-105 transition-transform">
                    🔄 Interactive 360° Panorama
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'Best Time to Visit' ? 'block animate-fadeIn' : 'hidden'}`}>
          <BestTime months={destination.bestTime.months} highlights={destination.bestTime.highlights} destinationName={destination.name} />
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'Book Your Trip' ? 'block animate-fadeIn' : 'hidden'}`}>
          <TripPackages packages={destination.packages} />
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'Travel' ? 'block animate-fadeIn' : 'hidden'}`}>
          <TravelOptions options={destination.travelOptions} />
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'Stay' ? 'block animate-fadeIn' : 'hidden'}`}>
          <HotelStay hotels={destination.hotels} destinationName={destination.name} />
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'AI Shopping & Food' ? 'block animate-fadeIn' : 'hidden'}`}>
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: AI Shopping Advisor */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                🛍️ AI Shopping Advisor
              </h3>
              <p className="text-slate-600 text-sm">Discover authentic local products, trusted markets, and fair pricing lists customized for {destination.name}.</p>
              
              <div className="space-y-4 text-xs font-semibold text-slate-700">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-purple-600 font-extrabold block text-[10px] uppercase mb-1">Traditional Clothing & Crafts:</span>
                  Handmade wooden crafts, local shell souvenirs, spices, and traditional attire.
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-purple-600 font-extrabold block text-[10px] uppercase mb-1">Famous Local Markets:</span>
                  Flea markets, local artisan bazaars, and trusted cooperative stores.
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-purple-600 font-extrabold block text-[10px] uppercase mb-1">Bargaining Guidelines:</span>
                  Bargain politely. Start around 30% lower than the quoted price at open street stalls.
                </div>
              </div>
            </div>

            {/* Column 2: Local Food Explorer */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                🍛 Local Food Explorer
              </h3>
              <p className="text-slate-600 text-sm">Savor authentic cuisines, local street snacks, and dietary options available in {destination.name}.</p>
              
              <div className="space-y-4 text-xs font-semibold text-slate-700">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-green-600 font-extrabold block text-[10px] uppercase mb-1">Must-Try Famous Dishes:</span>
                  Traditional curries, local flatbreads, fresh river/sea bakes, and heritage desserts.
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-green-600 font-extrabold block text-[10px] uppercase mb-1">Dietary Specialization:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[10px]">Veg</span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[10px]">Vegan</span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[10px]">Halal Options</span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-[10px]">Jain Meals</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-green-600 font-extrabold block text-[10px] uppercase mb-1">Pricing & Popularity:</span>
                  Street eats (₹150-300 per snack) | Heritage restaurants (₹1,500 for two). Popularity Index: Very High.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatAssistant />
    </div>
  )
}
