import { useMemo } from 'react'
import { estimateTripCost } from '../ai/AITripCost'

export default function TripCostEstimator({ destination, days, style }) {
  const breakdown = useMemo(
    () => estimateTripCost(destination, days, style),
    [destination, days, style]
  )

  const items = [
    { label: 'Hotel', value: breakdown.hotel },
    { label: 'Food', value: breakdown.food },
    { label: 'Transport', value: breakdown.transport },
    { label: 'Activities', value: breakdown.activities },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Trip Cost Estimator</h3>
      <p className="mt-1 text-sm text-slate-600">Estimated budget for {breakdown.destination}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">₹{item.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-white">
        <p className="text-xs uppercase tracking-wide text-white/70">Total</p>
        <p className="text-lg font-semibold">₹{breakdown.total.toLocaleString()}</p>
      </div>
    </div>
  )
}
