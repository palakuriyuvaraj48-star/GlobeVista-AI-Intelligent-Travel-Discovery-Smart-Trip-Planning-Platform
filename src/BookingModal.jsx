import { useState } from 'react'

export default function BookingModal({ isOpen, onClose, item }) {
  const [form, setForm] = useState({ name: '', email: '', date: '', people: 1, method: 'Card' })
  const [confirmed, setConfirmed] = useState(false)
  const total = item?.price ? item.price * form.people : 0

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.date) {
      const bookingData = { ...form, total, itemName: item?.name, itemId: item?.id }
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
      bookings.push(bookingData)
      localStorage.setItem('bookings', JSON.stringify(bookings))
      setConfirmed(true)
      setTimeout(() => {
        setConfirmed(false)
        onClose()
      }, 3000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl relative animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition"
        >
          ×
        </button>

        {!confirmed ? (
          <>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">Complete Your Booking</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{item?.name || 'Your Destination'}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Number of Guests</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={form.people}
                    onChange={(e) => setForm({ ...form, people: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Payment Method</label>
                  <select
                    value={form.method}
                    onChange={(e) => setForm({ ...form, method: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-slate-800 dark:text-white"
                  >
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>UPI</option>
                    <option>Net Banking</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-600">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600 dark:text-slate-300">Subtotal:</span>
                    <span className="text-slate-800 dark:text-white font-semibold">₹{item?.price?.toLocaleString() || 0}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600 dark:text-slate-300">Guests: {form.people}</span>
                    <span className="text-slate-800 dark:text-white font-semibold">×{form.people}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-slate-800 dark:text-white">Total:</span>
                    <span className="text-indigo-600 dark:text-indigo-400">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="p-8 text-center animate-fadeIn">
            <div className="text-5xl mb-4 animate-bounce">✨</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Your Journey Awaits ✨</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Booking confirmed! A confirmation email has been sent to <strong>{form.email}</strong>
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">Redirecting in 3 seconds...</p>
          </div>
        )}  
      </div>
    </div>
  )
}
