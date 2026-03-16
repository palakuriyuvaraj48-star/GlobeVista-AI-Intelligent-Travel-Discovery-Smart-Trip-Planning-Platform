import { useState } from 'react'

const filterCategories = ['All Categories', '3 Star', '4 Star', '5 Star', 'Luxury']

export default function HotelStay({ hotels, destinationName }) {
  const [activeFilter, setActiveFilter] = useState('All Categories')
  const [nights, setNights] = useState(2)

  const filteredHotels = activeFilter === 'All Categories' 
    ? hotels 
    : hotels.filter(h => h.category === activeFilter)

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Stay in {destinationName}</h2>
          <p className="text-slate-600 mt-2">Find the perfect accommodation for your trip.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
          <label className="text-sm font-bold text-slate-700 ml-2">Stay Length:</label>
          <input 
            type="number" 
            min="1"
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            className="w-20 p-2 text-center rounded-lg border border-slate-300"
          />
          <span className="text-sm text-slate-500 mr-2">nights</span>
        </div>
      </div>

      {/* Hotel Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterCategories.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition bg-white border ${
              activeFilter === filter 
                ? 'border-purple-600 text-purple-700 bg-purple-50' 
                : 'border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Hotel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel, idx) => {
          const total = hotel.price * nights;
          return (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {hotel.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/95 px-2 py-1 rounded-lg text-sm font-bold shadow-sm flex items-center gap-1">
                  <span className="text-yellow-500">★</span> {hotel.rating}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{hotel.name}</h3>
                
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="text-sm">Price per night</span>
                    <span className="font-medium">₹{hotel.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 mb-6">
                    <span className="font-bold text-slate-900">Total ({nights} nights)</span>
                    <span className="text-2xl font-black text-purple-600">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition text-sm">
                    Explore
                  </button>
                  <button className="py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {filteredHotels.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No hotels found in this category.
        </div>
      )}
    </div>
  )
}
