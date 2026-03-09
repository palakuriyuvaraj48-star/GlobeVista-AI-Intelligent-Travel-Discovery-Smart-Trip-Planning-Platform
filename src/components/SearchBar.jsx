import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useSearchSuggestions from '../hooks/useSearchSuggestions'

function SuggestionIcon({ icon }) {
  if (icon === 'hotel') return <span className="text-sm">HT</span>
  if (icon === 'beach') return <span className="text-sm">BC</span>
  if (icon === 'food') return <span className="text-sm">FD</span>
  return <span className="text-sm">SR</span>
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  suggestions = [],
  placeholder = 'Search by title or location...',
}) {
  const navigate = useNavigate()
  const [internalValue, setInternalValue] = useState(value ?? '')
  const [activeSuggestion, setActiveSuggestion] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const isControlled = typeof value === 'string' && typeof onChange === 'function'

  useEffect(() => {
    if (isControlled) setInternalValue(value)
  }, [isControlled, value])

  const currentValue = isControlled ? value : internalValue
  const hookSuggestions = useSearchSuggestions(currentValue)

  const normalizedSuggestions = suggestions.length
    ? suggestions.map((item, index) =>
        typeof item === 'string'
          ? { id: `custom-${index}`, label: item, icon: 'search', to: '/places' }
          : item
      )
    : hookSuggestions

  const handleChange = (event) => {
    const nextValue = event.target.value
    if (isControlled) {
      onChange(nextValue)
      if (typeof onSearch === 'function') onSearch(nextValue)
    } else {
      setInternalValue(nextValue)
      if (typeof onSearch === 'function') onSearch(nextValue)
    }
    setShowSuggestions(nextValue.trim().length > 0)
    setActiveSuggestion(-1)
  }

  const clearSearch = (focusInput = false) => {
    if (isControlled) onChange('')
    else setInternalValue('')
    if (typeof onSearch === 'function') onSearch('')
    setShowSuggestions(false)
    setActiveSuggestion(-1)
    if (focusInput) document.getElementById('travel-search-input')?.focus()
  }

  const selectSuggestion = (item) => {
    if (isControlled) onChange(item.label)
    else setInternalValue(item.label)
    if (typeof onSearch === 'function') onSearch(item.label)
    setShowSuggestions(false)
    setActiveSuggestion(-1)
    if (item.to) navigate(item.to)
  }

  const onKeyDown = (event) => {
    if (!showSuggestions || normalizedSuggestions.length === 0) {
      if (event.key === 'Enter' && typeof onSearch === 'function') onSearch(currentValue)
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveSuggestion((prev) => (prev + 1) % normalizedSuggestions.length)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveSuggestion((prev) => (prev <= 0 ? normalizedSuggestions.length - 1 : prev - 1))
      return
    }

    if (event.key === 'Enter' && activeSuggestion >= 0) {
      event.preventDefault()
      selectSuggestion(normalizedSuggestions[activeSuggestion])
    }
  }

  return (
    <div className="relative w-full">
      <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-cyan-400 focus-within:shadow-md">
        <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="travel-search-input"
          type="text"
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(currentValue.trim().length > 0)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="ml-3 w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
        />
        {currentValue ? (
          <button type="button" onClick={() => clearSearch(true)} className="ml-2 text-slate-400 transition hover:text-slate-600">
            {'\u2715'}
          </button>
        ) : null}
      </div>
      {showSuggestions && normalizedSuggestions.length > 0 ? (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          {normalizedSuggestions.map((item, index) => (
            <button
              key={item.id || item.label}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectSuggestion(item)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                index === activeSuggestion ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <SuggestionIcon icon={item.icon} />
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
