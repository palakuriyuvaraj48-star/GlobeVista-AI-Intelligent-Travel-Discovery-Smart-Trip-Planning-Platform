import { useMemo, useState } from 'react'

const budgetOptions = [
  { id: 'under_5000', label: 'Under ₹5,000' },
  { id: '5000_15000', label: '₹5,000 – ₹15,000' },
  { id: '15000_50000', label: '₹15,000 – ₹50,000' },
  { id: 'luxury', label: 'Luxury (₹50,000+)' },
]

const placeTypeOptions = [
  'Beach',
  'Mountains',
  'Hills',
  'Forest',
  'Temple',
  'Historical',
  'Nightlife',
  'Luxury',
  'Spiritual',
  'Palace',
]

const rentalTypeOptions = ['Cars', 'Bikes', 'Luxury Cars', 'SUVs', 'Electric Vehicles']

function ToggleChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl px-3 py-2 text-xs font-semibold transition duration-300 ${
        active
          ? 'bg-indigo-600 text-white shadow-sm'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15'
      }`}
    >
      {children}
    </button>
  )
}

export default function FilterPanel({
  value,
  onChange,
  className = '',
  collapsible = true,
}) {
  const [open, setOpen] = useState(!collapsible)

  const v = value || { budgets: [], placeTypes: [], rentalTypes: [] }

  const selectedCount = useMemo(() => (v.budgets?.length || 0) + (v.placeTypes?.length || 0) + (v.rentalTypes?.length || 0), [v])

  const setKey = (key, nextArr) => {
    onChange({ ...v, [key]: nextArr })
  }

  const toggle = (key, item) => {
    const cur = Array.isArray(v[key]) ? v[key] : []
    const exists = cur.includes(item)
    const next = exists ? cur.filter((x) => x !== item) : [...cur, item]
    setKey(key, next)
  }

  const clearAll = () => {
    onChange({ budgets: [], placeTypes: [], rentalTypes: [] })
  }

  return (
    <div className={`rounded-3xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`flex items-center gap-2 text-sm font-bold text-slate-900 transition dark:text-white ${
            collapsible ? 'hover:text-indigo-700 dark:hover:text-indigo-300' : 'cursor-default'
          }`}
          aria-expanded={open}
          disabled={!collapsible}
        >
          <span>Filters</span>
          {collapsible && (
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">({selectedCount})</span>
          )}
        </button>
        <button
          type="button"
          onClick={clearAll}
          className="rounded-2xl px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
        >
          Clear
        </button>
      </div>

      <div className={`mt-4 space-y-5 overflow-hidden transition-all duration-300 ${open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Budget</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {budgetOptions.map((b) => (
              <ToggleChip key={b.id} active={v.budgets?.includes(b.id)} onClick={() => toggle('budgets', b.id)}>
                {b.label}
              </ToggleChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Place Type</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {placeTypeOptions.map((p) => (
              <ToggleChip key={p} active={v.placeTypes?.includes(p)} onClick={() => toggle('placeTypes', p)}>
                {p}
              </ToggleChip>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Rental Type</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {rentalTypeOptions.map((r) => (
              <ToggleChip key={r} active={v.rentalTypes?.includes(r)} onClick={() => toggle('rentalTypes', r)}>
                {r}
              </ToggleChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const filterCatalog = {
  budgetOptions,
  placeTypeOptions,
  rentalTypeOptions,
}
