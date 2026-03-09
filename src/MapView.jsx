import { useState } from 'react'

const clusters = [
  { id: 'north', label: '5 Night Spots in Hyderabad', query: 'Hyderabad night spots' },
  { id: 'beaches', label: '8 Beach Locations', query: 'Goa beaches' },
  { id: 'mountains', label: '4 Mountain Resorts', query: 'Himachal resorts' },
]

export default function MapView() {
  const [active, setActive] = useState(clusters[0])
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-8">
      <div className="lg:w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">Map Clusters</h2>
        {clusters.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c)}
            className={
              `w-full text-left p-4 rounded-2xl shadow hover:shadow-2xl transition flex justify-between items-center ` +
              (active.id === c.id ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800')
            }
          >
            <span>{c.label}</span>
            <span className="text-sm">▶</span>
          </button>
        ))}
      </div>
      <div className="flex-1">
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(active.query)}&output=embed`}
          className="w-full h-96 rounded-2xl border border-slate-200"
        />
      </div>
    </div>
  )
}
