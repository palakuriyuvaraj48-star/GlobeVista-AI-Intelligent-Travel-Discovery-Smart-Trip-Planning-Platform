import { useState } from 'react'
import Card from '../components/Card'
import { calculateBudgetEstimate, formatCurrency } from '../utils/budgetCalculator'

const initialForm = {
  destination: '',
  days: 4,
  travelers: 2,
  hotelType: 'standard',
  transportType: 'flight',
}

const inputBaseClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-100'

export default function BudgetPlanner() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(() => calculateBudgetEstimate(initialForm))

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: name === 'days' || name === 'travelers' ? Number(value) : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setResult(calculateBudgetEstimate(form))
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#ecfeff_45%,_#f8fafc_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-sm font-semibold tracking-[0.24em] text-teal-700 uppercase shadow-sm">
            Smart Budgeting
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Estimate your trip budget before you book.
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Enter the basics of your trip and get a fast budget estimate for stay, transport, meals, and daily essentials.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="hover:scale-100">
            <div className="p-6 sm:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Travel Budget Calculator</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Adjust your destination, trip length, group size, and travel style to see your projected spend.
                </p>
              </div>

              <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div className="sm:col-span-2">
                  <label htmlFor="destination" className="mb-2 block text-sm font-semibold text-slate-700">
                    Destination
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={form.destination}
                    onChange={handleChange}
                    placeholder="Paris, Tokyo, Goa..."
                    className={inputBaseClass}
                  />
                </div>

                <div>
                  <label htmlFor="days" className="mb-2 block text-sm font-semibold text-slate-700">
                    Number of days
                  </label>
                  <input
                    id="days"
                    name="days"
                    type="number"
                    min="1"
                    value={form.days}
                    onChange={handleChange}
                    className={inputBaseClass}
                  />
                </div>

                <div>
                  <label htmlFor="travelers" className="mb-2 block text-sm font-semibold text-slate-700">
                    Number of travelers
                  </label>
                  <input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    value={form.travelers}
                    onChange={handleChange}
                    className={inputBaseClass}
                  />
                </div>

                <div>
                  <label htmlFor="hotelType" className="mb-2 block text-sm font-semibold text-slate-700">
                    Hotel type
                  </label>
                  <select
                    id="hotelType"
                    name="hotelType"
                    value={form.hotelType}
                    onChange={handleChange}
                    className={inputBaseClass}
                  >
                    <option value="budget">Budget</option>
                    <option value="standard">Standard</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="transportType" className="mb-2 block text-sm font-semibold text-slate-700">
                    Transport type
                  </label>
                  <select
                    id="transportType"
                    name="transportType"
                    value={form.transportType}
                    onChange={handleChange}
                    className={inputBaseClass}
                  >
                    <option value="flight">Flight</option>
                    <option value="train">Train</option>
                    <option value="car">Car</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-200"
                  >
                    Calculate Budget
                  </button>
                </div>
              </form>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-900 text-white hover:scale-100">
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Estimated total</p>
                <div className="mt-4 rounded-3xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur">
                  <p className="text-4xl font-black tracking-tight sm:text-5xl">{formatCurrency(result.total)}</p>
                  <p className="mt-2 text-sm text-slate-200">
                    For {result.travelers} traveler{result.travelers > 1 ? 's' : ''} across {result.days} day{result.days > 1 ? 's' : ''}.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-slate-300">Destination factor</p>
                    <p className="mt-1 text-lg font-semibold text-white">{result.destinationLabel}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-slate-300">Daily average</p>
                    <p className="mt-1 text-lg font-semibold text-white">{formatCurrency(result.dailyAverage)}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:scale-100">
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900">Cost breakdown</h3>
                <div className="mt-5 space-y-4">
                  {result.breakdown.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{item.label}</p>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                        <p className="text-base font-bold text-teal-700">{formatCurrency(item.amount)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
