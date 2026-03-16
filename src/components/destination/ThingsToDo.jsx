import { useState } from 'react'

const filters = ['Most Loved Places', 'Memorable Experiences', "What's Around", 'Adventure']

export default function ThingsToDo({ activities }) {
  const [activeFilter, setActiveFilter] = useState('Most Loved Places')

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Things to See & Do</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === filter 
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Activity Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-sm border border-slate-100">
              <img 
                src={activity.image} 
                alt={activity.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1 shadow-sm">
                <span className="text-yellow-500">★</span> {activity.rating}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{activity.name}</h3>
            <p className="text-sm text-slate-600 mt-1 line-clamp-2">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
