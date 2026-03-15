import { useMemo, useState } from 'react'
import { generateTrip } from '../ai/AIPlanner'
import { generateRoute } from '../ai/AIRoutePlanner'
import AITravelFeed from '../components/AITravelFeed'
import TripCostEstimator from '../components/TripCostEstimator'
import TravelMoodSelector from '../components/TravelMoodSelector'

const travelStyles = ['Relax', 'Adventure', 'Food', 'Nightlife', 'Nature']

export default function AIPlanner() {
  const [form, setForm] = useState({
    destination: 'Goa',
    days: 5,
    budget: '',
    style: 'Relax',
  })
  const [itinerary, setItinerary] = useState(generateTrip('Goa', 5, 'Relax'))

  const routePlan = useMemo(() => generateRoute(itinerary), [itinerary])

  const handleSubmit = (event) => {
    event.preventDefault()
    setItinerary(generateTrip(form.destination, form.days, form.style))
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">AI Travel Planner</h1>
          <p className="mt-2 text-lg text-slate-600">
            Generate a smart itinerary tailored to your destination, days, and travel style.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Destination"
                value={form.destination}
                onChange={(event) => setForm((current) => ({ ...current, destination: event.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="number"
                placeholder="Trip Days"
                value={form.days}
                onChange={(event) => setForm((current) => ({ ...current, days: event.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Budget"
                value={form.budget}
                onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <select
                value={form.style}
                onChange={(event) => setForm((current) => ({ ...current, style: event.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                {travelStyles.map((style) => (
                  <option key={style}>{style}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.01]"
            >
              Generate AI Trip
            </button>
          </form>
        </div>
        <TripCostEstimator destination={form.destination} days={form.days} style={form.style} />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Your AI Itinerary</h2>
        <div className="mt-6 space-y-4">
          {routePlan.map((step) => (
            <div key={step.day} className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white">
                {step.day}
              </div>
              <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">Day {step.day}</p>
                <p className="mt-1 text-sm text-slate-600">{step.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TravelMoodSelector mode="cards" onSelect={(value) => setForm((current) => ({ ...current, style: value }))} />

      <AITravelFeed />
    </div>
  )
}
