import { useState, useEffect } from 'react'

export default function AdminAnalytics() {
  const [bookings, setBookings] = useState(1250)
  const [destinations] = useState(320)
  const [mostSearched] = useState('Hotels')
  const [mostSaved] = useState('Jaipur Palace')
  const [seasonary] = useState([{ name: 'Winter', value: 40 }, { name: 'Summer', value: 25 }, { name: 'Monsoon', value: 20 }, { name: 'Spring', value: 15 }])

  useEffect(() => {
    const timer = setInterval(() => setBookings((b) => b + Math.floor(Math.random() * 5)), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Admin Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <div className="text-4xl font-bold text-indigo-600">{destinations}</div>
          <div className="mt-2 text-sm text-slate-600">Total Destinations</div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <div className="text-4xl font-bold text-indigo-600">{bookings}</div>
          <div className="mt-2 text-sm text-slate-600">Total Bookings</div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <div className="text-4xl font-bold text-indigo-600">{mostSearched}</div>
          <div className="mt-2 text-sm text-slate-600">Most Searched</div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-2xl transition text-center">
          <div className="text-4xl font-bold text-indigo-600">{mostSaved}</div>
          <div className="mt-2 text-sm text-slate-600">Most Saved</div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Seasonal Popularity</h2>
        <div className="space-y-2">
          {seasonary.map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <div className="w-24 font-medium">{s.name}</div>
              <div className="flex-1 h-4 bg-slate-200 dark:bg-slate-700 rounded-full">
                <div className="h-4 bg-indigo-600 rounded-full" style={{ width: `${s.value}%` }} />
              </div>
              <div className="w-12 text-right">{s.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
