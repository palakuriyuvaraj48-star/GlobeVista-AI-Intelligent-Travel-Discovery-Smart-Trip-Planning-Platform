import { useMemo } from 'react'

function escapeRegExp(input) {
  return String(input).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function highlightText(text, query) {
  const t = String(text || '')
  const q = String(query || '').trim()
  if (!q) return t
  const re = new RegExp(`(${escapeRegExp(q)})`, 'ig')
  const parts = t.split(re)
  return parts.map((part, idx) => {
    const match = part.toLowerCase() === q.toLowerCase()
    if (!match) return part
    return (
      <mark
        key={`${part}-${idx}`}
        className="rounded-md bg-amber-300/60 px-1 py-0.5 text-slate-900"
      >
        {part}
      </mark>
    )
  })
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search…',
  className = '',
}) {
  const hasValue = useMemo(() => Boolean(String(value || '').trim()), [value])

  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.1-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-12 py-3 text-sm font-medium text-slate-800 shadow-sm outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100"
        aria-label="Search"
      />
      {hasValue && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Clear search"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}
