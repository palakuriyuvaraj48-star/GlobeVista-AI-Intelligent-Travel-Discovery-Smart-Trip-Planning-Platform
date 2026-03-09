import { useEffect, useMemo, useState } from 'react'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

export default function BookingModal({ isOpen, onClose, item }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [people, setPeople] = useState(2)
  const [payment, setPayment] = useState('Card')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setSuccess(false)
    }
  }, [isOpen])

  const price = Number(item?.price || 0)

  const total = useMemo(() => {
    const p = Math.max(1, Number(people) || 1)
    if (!price) return 0
    return price * p
  }, [price, people])

  const submit = (e) => {
    e.preventDefault()
    setSuccess(true)

    try {
      const key = 'ntp_mock_bookings'
      const stored = JSON.parse(localStorage.getItem(key) || '[]')
      const next = Array.isArray(stored) ? stored : []
      next.push({
        id: `${Date.now()}`,
        createdAt: new Date().toISOString(),
        itemId: item?.id ?? null,
        itemTitle: item?.title || item?.name || '',
        name,
        email,
        date,
        people: Number(people) || 1,
        payment,
        total,
      })
      localStorage.setItem(key, JSON.stringify(next))
    } catch {
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5 dark:border-white/10">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Mock Booking</h3>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
              {item?.title || item?.name ? `Booking for ${item.title || item.name}` : 'Enter your details to reserve your experience.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5">
          {success ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              <p className="text-lg font-extrabold">Your Journey Awaits ✨</p>
              <p className="mt-2 text-sm font-medium opacity-90">We’ve recorded your mock booking request. This is UI-only.</p>
              <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
                <div><span className="font-extrabold">Total:</span> {total ? `₹${total.toLocaleString()}` : '—'}</div>
                <div><span className="font-extrabold">Payment:</span> {payment}</div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-extrabold text-white transition hover:opacity-95"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  required
                />
              </Field>
              <Field label="Email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  required
                />
              </Field>
              <Field label="Date">
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  required
                />
              </Field>
              <Field label="People">
                <input
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value) || 1)}
                  type="number"
                  min={1}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                  required
                />
              </Field>
              <Field label="Payment method">
                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white"
                >
                  <option>Card</option>
                  <option>UPI</option>
                  <option>NetBanking</option>
                  <option>Pay at Hotel</option>
                </select>
              </Field>

              <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-extrabold text-slate-900 dark:text-white">Summary</p>
                    <p className="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                      {item?.title || item?.name ? item.title || item.name : 'Selected experience'}
                    </p>
                  </div>
                  <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-300">
                    {total ? `₹${total.toLocaleString()}` : '—'}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition duration-300 hover:opacity-95"
                >
                  Confirm
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
