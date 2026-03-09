import { useState } from 'react'

export default function FestivalTicketModal({ isOpen, onClose, event }) {
  const [form, setForm] = useState({ type: 'General', count: 1 })
  const [confirmed, setConfirmed] = useState(false)
  const priceMap = { General: 500, VIP: 1200, Premium: 2500 }
  const total = priceMap[form.type] * form.count
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl relative opacity-0 animate-popIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">×</button>
        {!confirmed ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Book Festival Ticket</h2>
            <p className="mb-2">{event?.name}</p>
            <form className="space-y-4">
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-2 border rounded-xl"
              >
                <option>General</option>
                <option>VIP</option>
                <option>Premium</option>
              </select>
              <input
                type="number"
                min="1"
                value={form.count}
                onChange={(e) => setForm({ ...form, count: e.target.value })}
                className="w-full px-4 py-2 border rounded-xl"
              />
              <div className="mt-4">
                <p>Price per ticket: ₹{priceMap[form.type]}</p>
                <p>Total: ₹{total}</p>
              </div>
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="w-full py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl"
              >
                Confirm Ticket
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold">Ticket Confirmed!</h3>
            <p className="mt-2">Download your e-ticket (mock)</p>
            <button
              onClick={onClose}
              className="mt-4 py-2 px-6 bg-indigo-600 text-white rounded-xl"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
