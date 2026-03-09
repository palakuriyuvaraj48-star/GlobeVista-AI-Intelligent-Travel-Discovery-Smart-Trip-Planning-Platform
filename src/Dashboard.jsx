import { useEffect, useState } from 'react'
import AdminAnalytics from './AdminAnalytics'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [prefs, setPrefs] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('profilePrefs')
    if (stored) setPrefs(JSON.parse(stored))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {prefs ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Your Preferences</h2>
          <p>Budget: {prefs.budget}</p>
          <p>Purpose: {prefs.purpose}</p>
          <p>Interests: {prefs.interests.join(', ')}</p>
        </div>
      ) : (
        <div className="mb-6">
          <Link to="/preferences" className="text-indigo-600 underline">
            Tell us your travel preferences
          </Link>
        </div>
      )}
      <AdminAnalytics />
    </div>
  )
}
