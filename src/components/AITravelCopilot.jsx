import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { buildTripItinerary, getLiveRecommendation, getSmartSuggestions, travelMoods } from '../ai/TravelCopilot'

const quickActions = [
  { label: 'Plan My Trip', to: '/ai-planner' },
  { label: 'Find Destinations', to: '/places' },
  { label: 'Discover Hotels', to: '/hotels' },
  { label: 'Find Restaurants', to: '/restaurants' },
  { label: 'Explore Attractions', to: '/places' },
  { label: 'Show Events Near Me', to: '/events' },
]

const emptySummary = {
  destination: '',
  days: 0,
  budget: 0,
}

export default function AITravelCopilot() {
  const [open, setOpen] = useState(false)
  const [builder, setBuilder] = useState({
    destination: '',
    days: 5,
    budget: 45000,
    mood: 'Relax',
  })
  const [itinerary, setItinerary] = useState([])
  const [summary, setSummary] = useState(emptySummary)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem('aiTripAutopilot')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed?.destination) {
          setBuilder((prev) => ({
            ...prev,
            destination: parsed.destination,
            days: parsed.days || prev.days,
            budget: parsed.budget || prev.budget,
          }))
        }
      } catch (error) {
        return undefined
      }
    }
    return undefined
  }, [])

  const handleBuilderChange = (event) => {
    const { name, value } = event.target
    setBuilder((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = () => {
    const nextItinerary = buildTripItinerary({
      destination: builder.destination || 'Bali',
      days: builder.days,
    })
    setItinerary(nextItinerary)
    setSummary({
      destination: builder.destination || 'Bali',
      days: Number(builder.days) || 5,
      budget: Number(builder.budget) || 45000,
    })
  }

  const progress = useMemo(() => {
    const destinationSelected = Boolean(builder.destination)
    const hotelSelected = itinerary.length > 0
    const attractionsSelected = itinerary.length > 0
    const tripReady = itinerary.length > 0

    return [
      { label: 'Destination selected', done: destinationSelected },
      { label: 'Hotel selected', done: hotelSelected },
      { label: 'Attractions selected', done: attractionsSelected },
      { label: 'Trip plan ready', done: tripReady },
    ]
  }, [builder.destination, itinerary.length])

  const smartSuggestions = useMemo(() => getSmartSuggestions(builder.destination), [builder.destination])
  const liveRecommendation = getLiveRecommendation(location.pathname)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
      >
        ✨ AI Copilot
      </button>

      <div
        className={`fixed right-0 top-0 z-50 h-full w-[420px] max-w-full overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">GlobeVista AI Travel Copilot</h2>
            <p className="mt-2 text-sm text-slate-600">
              Hi! I am your GlobeVista AI Copilot. Tell me what kind of trip you want and I will help plan it.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
          >
            Close
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              {action.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Live Recommendation</p>
          <p className="mt-2 text-sm font-semibold text-slate-700">{liveRecommendation}</p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">AI Trip Builder</h3>
          <div className="mt-4 grid gap-3">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Destination
              <input
                name="destination"
                value={builder.destination}
                onChange={handleBuilderChange}
                placeholder="Bali"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-purple-500"
              />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Trip Days
              <input
                name="days"
                type="number"
                min="1"
                max="10"
                value={builder.days}
                onChange={handleBuilderChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-purple-500"
              />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Budget
              <input
                name="budget"
                type="number"
                value={builder.budget}
                onChange={handleBuilderChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-purple-500"
              />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Travel Mood
              <select
                name="mood"
                value={builder.mood}
                onChange={handleBuilderChange}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-purple-500"
              >
                {travelMoods.map((mood) => (
                  <option key={mood} value={mood}>
                    {mood}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-xl"
            >
              Generate Smart Trip
            </button>
          </div>

          {itinerary.length ? (
            <div className="mt-5 space-y-3">
              {itinerary.map((item) => (
                <div
                  key={`${item.day}-${item.title}`}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm transition hover:shadow-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Day {item.day}</p>
                  <p className="mt-2 font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.destination}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Trip Progress</h3>
          <div className="mt-4 space-y-2">
            {progress.map((step) => (
              <div key={step.label} className="flex items-center gap-3 text-sm">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                    step.done ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {step.done ? '✓' : '•'}
                </span>
                <span className="text-slate-700">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">AI Smart Suggestions</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {smartSuggestions.map((suggestion) => (
              <span key={suggestion} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                {suggestion}
              </span>
            ))}
          </div>
        </div>

        {itinerary.length ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Trip Summary</h3>
            <p className="mt-2 text-sm text-slate-600">
              Destination: {summary.destination || 'Bali'}
            </p>
            <p className="text-sm text-slate-600">Trip Duration: {summary.days} Days</p>
            <p className="text-sm text-slate-600">Estimated Budget: ₹{summary.budget.toLocaleString('en-IN')}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:shadow-xl">
                Save Trip
              </button>
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
                Download Plan
              </button>
              <button
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700"
                onClick={() => {
                  navigate('/travel-map')
                  setOpen(false)
                }}
              >
                View on Map
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
