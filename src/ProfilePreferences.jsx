import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const budgetOptions = [
  { label: '\ud83d\udcb0 Low', value: 'low' },
  { label: '\ud83d\udcb0\ud83d\udcb0 Medium', value: 'medium' },
  { label: '\ud83d\udcb0\ud83d\udcb0\ud83d\udcb0 Luxury', value: 'luxury' },
]

const purposeOptions = [
  { label: '\ud83c\udfd6 Vacation', value: 'vacation' },
  { label: '\ud83d\udcbc Business', value: 'business' },
  { label: '\ud83d\udc8d Honeymoon', value: 'honeymoon' },
]

const interestOptions = [
  { label: '\ud83c\udf3f Nature', value: 'Nature' },
  { label: '\ud83c\udf5c Food', value: 'Food' },
  { label: '\ud83c\udfdb Culture', value: 'Culture' },
  { label: '\ud83c\udfd6 Beach', value: 'Beach' },
]

export default function ProfilePreferences() {
  const [prefs, setPrefs] = useState({ budget: '', purpose: '', interests: [] })
  const navigate = useNavigate()

  const toggleInterest = (interest) => {
    setPrefs((current) => {
      const alreadySelected = current.interests.includes(interest)
      return {
        ...current,
        interests: alreadySelected
          ? current.interests.filter((item) => item !== interest)
          : [...current.interests, interest],
      }
    })
  }

  const submit = () => {
    localStorage.setItem('profilePrefs', JSON.stringify(prefs))
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">Your Travel Preferences</h1>
        <p className="mb-8 text-slate-600">Choose your budget, trip purpose, and interests with quick pill controls.</p>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-slate-800">Budget</label>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setPrefs({ ...prefs, budget: option.value })}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition duration-300 ${
                  prefs.budget === option.value
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-slate-800">Purpose</label>
          <div className="flex flex-wrap gap-3">
            {purposeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setPrefs({ ...prefs, purpose: option.value })}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition duration-300 ${
                  prefs.purpose === option.value
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="mb-3 block text-sm font-semibold text-slate-800">Interests</label>
          <div className="flex flex-wrap gap-3">
            {interestOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleInterest(option.value)}
                className={`rounded-full border px-4 py-3 text-sm font-medium transition duration-300 ${
                  prefs.interests.includes(option.value)
                    ? 'border-cyan-600 bg-cyan-600 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={submit} className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700">
          Save & Continue
        </button>
      </div>
    </div>
  )
}
