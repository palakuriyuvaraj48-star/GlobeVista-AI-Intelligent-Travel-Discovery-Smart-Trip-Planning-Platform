import { useState } from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'

export default function TransportBooking() {
  const [form, setForm] = useState({ from: '', to: '', date: '', passengers: 1 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Booking submitted (static demo)')
  }

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1508747703725-7191a54faf42?w=1920"
        title="Transport Booking"
        subtitle="Stylish premium transport form"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">From</label>
              <input
                type="text"
                name="from"
                value={form.from}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">To</label>
              <input
                type="text"
                name="to"
                value={form.to}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Passengers</label>
              <input
                type="number"
                name="passengers"
                min={1}
                value={form.passengers}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium hover:opacity-90 transition"
            >
              Book Now
            </button>
          </form>
        </Card>
      </div>
    </>
  )
}