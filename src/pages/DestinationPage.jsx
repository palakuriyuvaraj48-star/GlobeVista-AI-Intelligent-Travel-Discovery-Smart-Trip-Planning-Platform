import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import DestinationHero from '../components/destination/DestinationHero'
import ThingsToDo from '../components/destination/ThingsToDo'
import BestTime from '../components/destination/BestTime'
import TripPackages from '../components/destination/TripPackages'
import TravelOptions from '../components/destination/TravelOptions'
import HotelStay from '../components/destination/HotelStay'
import ChatAssistant from '../components/destination/ChatAssistant'

import { destinationDetails, genericDestination } from '../data/destinationDetails'

const tabs = ['Things to Do', 'Best Time to Visit', 'Book Your Trip', 'Travel', 'Stay']

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
        </div>
        
        <div className={`transition-opacity duration-300 ${activeTab === 'Best Time to Visit' ? 'block animate-fadeIn' : 'hidden'}`}>
          <BestTime months={destination.bestTime.months} highlights={destination.bestTime.highlights} />
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
      </div>

      <ChatAssistant />
    </div>
  )
}
