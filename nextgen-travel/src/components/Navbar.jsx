import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/hotels', label: 'Hotels' },
  { to: '/restaurants', label: 'Restaurants' },
  { to: '/places', label: 'Places' },
  { to: '/events', label: 'Events' },
  { to: '/budget', label: 'Budget' },
  { to: '/dress-code', label: 'Dress Code' },
  { to: '/transport', label: 'Transport' },
  { to: '/rentals', label: 'Rentals' },
  { to: '/states', label: 'States' },
  { to: '/hidden-palaces', label: 'Hidden Palaces' },
  { to: '/foreign-palaces', label: 'Foreign Palaces' },
  { to: '/famous-dishes', label: 'Famous Dishes' },
  { to: '/pubs', label: 'Pubs' },
  { to: '/movies', label: 'Movies' },
  { to: '/malls', label: 'Malls' },
  { to: '/best-season', label: 'Best Season' },
  { to: '/best-time', label: 'Best Time' },
  { to: '/voice-assistant', label: 'Voice AI' },
  { to: '/profile-preferences', label: 'Preferences' },
  { to: '/compare-hotels', label: 'Compare' },
  { to: '/admin-analytics', label: 'Analytics' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, languages } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              NextGen Travel Explorer
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-100"
              aria-label="Language"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2 px-2 pb-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="flex-1 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              aria-label="Language"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <ThemeToggle className="shrink-0" />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
