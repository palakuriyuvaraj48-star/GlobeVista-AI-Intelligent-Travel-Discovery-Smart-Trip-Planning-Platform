import { useMemo, useState } from 'react'
import Card from '../components/Card'
import { hotels } from '../data/hotels'

function scoreHotel(h) {
  const price = Number(h?.price || 0)
  const rating = Number(h?.rating || 0)
  if (!price) return rating
  return rating * 100000 - price
}

export default function CompareHotels() {
  const [selectedIds, setSelectedIds] = useState([])

  const selected = useMemo(() => hotels.filter((h) => selectedIds.includes(h.id)).slice(0, 3), [selectedIds])

  const bestValueId = useMemo(() => {
    if (!selected.length) return null
    const sorted = [...selected].sort((a, b) => scoreHotel(b) - scoreHotel(a))
    return sorted[0]?.id ?? null
  }, [selected])

  const toggle = (id) => {
    setSelectedIds((cur) => {
      const exists = cur.includes(id)
      if (exists) return cur.filter((x) => x !== id)
      if (cur.length >= 3) return cur
      return [...cur, id]
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Compare Hotels</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">Select up to 3 hotels and compare value signals.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Select hotels</h2>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{selectedIds.length}/3</div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hotels.map((h) => {
              const active = selectedIds.includes(h.id)
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => toggle(h.id)}
                  className={`rounded-2xl border p-4 text-left transition duration-300 ${
                    active
                      ? 'border-indigo-500 bg-indigo-500/10'
                      : 'border-slate-200 hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-slate-900 dark:text-white">{h.name}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">{h.city}</p>
                    </div>
                    <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">₹{h.price.toLocaleString()}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Comparison</h2>
          {selected.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Select hotels to compare.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {selected.map((h) => {
                const isBest = h.id === bestValueId
                return (
                  <div
                    key={h.id}
                    className={`rounded-3xl border p-4 transition ${
                      isBest
                        ? 'border-emerald-400 bg-emerald-500/10'
                        : 'border-slate-200 dark:border-white/10'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">{h.name}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{h.city}</p>
                      </div>
                      {isBest ? (
                        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white">Best Value</span>
                      ) : null}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Price</p>
                        <p className="mt-1 font-extrabold text-indigo-600 dark:text-indigo-300">₹{h.price.toLocaleString()}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Rating</p>
                        <p className="mt-1 font-extrabold text-amber-600 dark:text-amber-300">★ {h.rating.toFixed(1)}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Amenities</p>
                        <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">Premium</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Luxury</p>
                        <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">High</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
