import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageContext } from '../LanguageContext'
import ThemeToggle from '../ThemeToggle'

const primaryLinks = [
  { to: '/', key: 'home', label: 'Home' },
  { to: '/hotels', key: 'hotels', label: 'Hotels' },
  { to: '/restaurants', key: 'restaurants', label: 'Restaurants' },
  { to: '/transport', key: 'transport', label: 'Transport' },
  { to: '/ai-autopilot', key: 'ai-autopilot', label: '✨ AI Autopilot' },
  { to: '/trip-story', key: 'trip-story', label: 'Trip Story' },
]

const megaMenus = [
  {
    id: 'destinations',
    label: 'Destinations',
    sections: [
      {
        title: 'Destinations',
        links: [
          { to: '/destinations/popular', label: 'Popular Places' },
          { to: '/destinations/hidden', label: 'Hidden Places' },
          { to: '/destinations/states', label: 'States' },
        ],
      },
    ],
    image: {
      title: 'Explore the world',
      description: 'Start Exploring',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      action: { to: '/explore', label: 'Start Exploring' },
    },
  },
  {
    id: 'experiences',
    label: 'Experiences',
    sections: [
      {
        title: 'Experiences',
        links: [
          { to: '/events', label: 'Events' },
          { to: '/food', label: 'Famous Dishes' },
          { to: '/pubs', label: 'Pubs' },
          { to: '/movies', label: 'Movies' },
          { to: '/malls', label: 'Malls' },
        ],
      },
    ],
    image: {
      title: 'Taste & Nightlife',
      description: 'Food trails, rooftop lounges, and local favorites.',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
      action: { to: '/food', label: 'Find Experiences' },
    },
  },
  {
    id: 'planner',
    label: 'Planner',
    sections: [
      {
        title: 'Planning',
        links: [
          { to: '/planner/budget', label: 'Budget Planner' },
          { to: '/planner/compare-hotels', label: 'Compare Hotels' },
          { to: '/planner/preferences', label: 'Travel Preferences' },
          { to: '/planner/recommendations', label: 'Recommendations' },
        ],
      },
    ],
    image: {
      title: 'Plan with AI',
      description: 'Build itineraries, timelines, and budgets in minutes.',
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200',
      action: { to: '/planner/budget', label: 'Plan a Trip' },
    },
  },
  {
    id: 'transport',
    label: 'Transport',
    sections: [
      {
        title: 'Transport',
        links: [
          { to: '/transport', label: 'Transportation' },
          { to: '/transport/booking', label: 'Transport Booking' },
          { to: '/rentals', label: 'Rentals' },
        ],
      },
    ],
    image: {
      title: 'Get Around',
      description: 'Book rides, rentals, and more.',
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200',
      action: { to: '/transport', label: 'Book Transport' },
    },
  },
  {
    id: 'more',
    label: 'More',
    sections: [
      {
        title: 'More',
        links: [
          { to: '/travel/dress-code', label: 'Dress Code' },
          { to: '/help', label: 'Help' },
        ],
      },
    ],
    image: {
      title: 'More',
      description: 'Travel tips and support.',
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200',
      action: { to: '/help', label: 'Get Help' },
    },
  },
]

function ChevronIcon() {
  return (
    <svg className="h-4 w-4 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MegaMenu({ menu, pathname, isOpen, onToggle, onClose }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`nav-link ${isOpen ? 'is-active' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span>{menu.label}</span>
        <ChevronIcon />
      </button>

      {isOpen ? (
        <div
          className="absolute left-0 top-full z-[9999] mt-4 w-[780px] max-w-[calc(100vw-2rem)] rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-2xl backdrop-blur-xl"
          role="menu"
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {menu.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {section.title}
                  </p>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className={`rounded-xl px-3 py-2 text-sm font-semibold transition duration-200 ${
                          pathname === link.to
                            ? 'bg-slate-100 text-slate-900'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50">
              <div className="relative h-full">
                <img src={menu.image.src} alt={menu.image.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">{menu.image.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{menu.image.description}</p>
                  <Link
                    to={menu.image.action.to}
                    onClick={onClose}
                    className="mt-4 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-300 hover:bg-white"
                  >
                    {menu.image.action.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const menuRef = useRef(null)
  const { t } = useContext(LanguageContext)

  const translatedPrimaryLinks = useMemo(
    () => primaryLinks.map((link) => ({ ...link, text: link.label || t(link.key) })),
    [t]
  )

  useEffect(() => {
    const handleOutside = (event) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-[9999] border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-lg">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-sm font-bold text-white shadow-md">
              GV
            </span>
            <span className="font-display tracking-tight">GlobeVista AI</span>
          </Link>

          <div className="hidden xl:flex items-center justify-center">
            <div ref={menuRef} className="flex w-full max-w-5xl items-center justify-between">
              {translatedPrimaryLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'is-active' : ''}`}
                >
                  {link.text}
                </Link>
              ))}

              {megaMenus.map((menu) => (
                <MegaMenu
                  key={menu.id}
                  menu={menu}
                  pathname={location.pathname}
                  isOpen={openMenu === menu.id}
                  onClose={() => setOpenMenu(null)}
                  onToggle={() => setOpenMenu((current) => (current === menu.id ? null : menu.id))}
                />
              ))}
            </div>
          </div>

          <div className="hidden xl:flex items-center justify-end gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
              AV
            </div>
            <Link to="/wishlist" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-100">
              Saved Trips
            </Link>
            <Link to="/preferences" className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-100">
              Profile
            </Link>
            <ThemeToggle />
            <button type="button" className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M10 7V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2" />
                <path d="M15 12H3m0 0l3.5-3.5M3 12l3.5 3.5" />
              </svg>
              Logout
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden justify-self-end rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div className={`xl:hidden overflow-visible border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 ${mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 p-4">
          {translatedPrimaryLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold transition duration-300 ${
                location.pathname === link.to ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.text}
            </Link>
          ))}
          {megaMenus.map((menu) => (
            <div key={menu.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{menu.label}</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {menu.sections.flatMap((section) =>
                  section.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      {link.label}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
