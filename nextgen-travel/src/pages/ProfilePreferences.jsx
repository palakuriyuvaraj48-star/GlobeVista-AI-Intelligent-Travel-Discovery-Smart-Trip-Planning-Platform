import { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card'

const STORAGE_KEY = 'ntp_profile_preferences'

const budgetLevels = [
  { id: 'under_5000', label: 'Under ₹5,000' },
  { id: '5000_15000', label: '₹5,000 – ₹15,000' },
  { id: '15000_50000', label: '₹15,000 – ₹50,000' },
  { id: 'luxury', label: 'Luxury (₹50,000+)' },
]

const travelStyles = ['Relaxation', 'Adventure', 'Culture', 'Luxury', 'Nightlife', 'Spiritual']
const seasons = ['Winter', 'Summer', 'Monsoon', 'Spring']
const timesOfDay = ['Sunrise', 'Day', 'Sunset', 'Night']

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export function getStoredPreferences() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    return parsed
  } catch {
    return null
  }
}

export default function ProfilePreferences() {
  const stored = useMemo(() => getStoredPreferences(), [])

  const [budgetLevel, setBudgetLevel] = useState(stored?.budgetLevel || '5000_15000')
  const [travelStyle, setTravelStyle] = useState(stored?.travelStyle || 'Culture')
  const [preferredSeason, setPreferredSeason] = useState(stored?.preferredSeason || 'Winter')
  const [preferredTimeOfDay, setPreferredTimeOfDay] = useState(stored?.preferredTimeOfDay || 'Sunset')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!saved) return
    const id = setTimeout(() => setSaved(false), 1600)
    return () => clearTimeout(id)
  }, [saved])

  const save = () => {
    const payload = { budgetLevel, travelStyle, preferredSeason, preferredTimeOfDay }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    setSaved(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Profile Preferences</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">Personalize recommendations. Stored locally.</p>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Budget level</p>
            <div className="mt-2">
              <Select
                value={budgetLevel}
                onChange={setBudgetLevel}
                options={budgetLevels.map((b) => ({ value: b.id, label: b.label }))}
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Travel style</p>
            <div className="mt-2">
              <Select
                value={travelStyle}
                onChange={setTravelStyle}
                options={travelStyles.map((s) => ({ value: s, label: s }))}
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Preferred season</p>
            <div className="mt-2">
              <Select
                value={preferredSeason}
                onChange={setPreferredSeason}
                options={seasons.map((s) => ({ value: s, label: s }))}
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Preferred time of day</p>
            <div className="mt-2">
              <Select
                value={preferredTimeOfDay}
                onChange={setPreferredTimeOfDay}
                options={timesOfDay.map((t) => ({ value: t, label: t }))}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={save}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition duration-300 hover:opacity-95"
          >
            Save Preferences
          </button>

          <div className={`text-sm font-extrabold transition ${saved ? 'text-emerald-600 dark:text-emerald-300' : 'text-transparent'}`}>
            Saved
          </div>
        </div>
      </Card>
    </div>
  )
}
