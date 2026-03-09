import { useEffect, useState } from 'react'

// using preferences to suggest best season

const suggestionMap = {
  'Leisure': 'Winter (Oct-Feb) for pleasant weather',
  'Business': 'Monsoon (Jun-Sep) to avoid crowds',
  'Adventure': 'Summer (Mar-May) for treks',
  'Wellness': 'Winter (Dec-Feb) for yoga retreats',
}

export default function BestSeason() {
  const [prefs, setPrefs] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('profilePrefs')
    if (stored) setPrefs(JSON.parse(stored))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Best Time to Visit</h1>
      {prefs ? (
        <p className="text-lg">
          {suggestionMap[prefs.purpose] || 'All year is good!'}
        </p>
      ) : (
        <p>Please set your <a href="/preferences" className="text-indigo-600 underline">preferences</a> to get a personalized suggestion.</p>
      )}
    </div>
  )
}
