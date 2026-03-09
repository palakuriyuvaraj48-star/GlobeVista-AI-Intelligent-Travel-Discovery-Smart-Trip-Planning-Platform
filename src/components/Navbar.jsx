import { useContext, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageContext } from '../LanguageContext'
import ThemeToggle from '../ThemeToggle'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'HI' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
]

const menuGroups = [
  {
    label: 'Explore',
    items: [
      { to: '/places', key: 'places', label: 'Popular Places' },
      { to: '/hidden-palaces', key: 'hiddenPalaces', label: 'Hidden Palaces' },
      { to: '/foreign-palaces', key: 'foreignPalaces', label: 'Foreign Palaces' },
      { to: '/states', key: 'states', label: 'States' },
      { to: '/best-season', key: 'bestSeason', label: 'Best Season' },
    ],
  },
  {
    label: 'Experiences',
    items: [
      { to: '/events', key: 'events', label: 'Events' },
      { to: '/dishes', key: 'dishes', label: 'Famous Dishes' },
      { to: '/pubs', key: 'pubs', label: 'Pubs' },
      { to: '/movies', key: 'movies', label: 'Movies' },
      { to: '/malls', key: 'malls', label: 'Malls' },
    ],
  },
  {
    label: 'Planner',
    items: [
      { to: '/budget', key: 'budget', label: 'Budget Planner' },
      { to: '/compare-hotels', key: 'compareHotels', label: 'Compare Hotels' },
      { to: '/preferences', key: 'preferences', label: 'Travel Preferences' },
      { to: '/recommendations', key: 'recommendations', label: 'Recommendations' },
    ],
  },
  {
    label: 'Transport',
    items: [
      { to: '/transport', key: 'transport', label: 'Transportation' },
      { to: '/transport-booking', key: 'transportBooking', label: 'Transport Booking' },
      { to: '/rentals', key: 'rentals', label: 'Rentals' },
    ],
  },
  {
    label: 'More',
    items: [
      { to: '/dress-code', key: 'dressCode', label: 'Dress Code' },
      { to: '/help', key: 'help', label: 'Help' },
    ],
  },
]

const exploreMegaMenu = [
  {
    title: "Destinations",
    items: [
      { to: "/places", label: "Popular Places", icon: "globe" },
      { to: "/hidden-palaces", label: "Hidden Places", icon: "landmark" },
      { to: "/states", label: "States", icon: "map" }
    ]
  },
  {
    title: "Experiences",
    items: [
      { to: "/events", label: "Events", icon: "sun" },
      { to: "/dishes", label: "Famous Dishes", icon: "compass" },
      { to: "/pubs", label: "Pubs", icon: "building" }
    ]
  },
  {
    title: "Planning",
    items: [
      { to: "/budget", label: "Budget Planner", icon: "wallet" },
      { to: "/compare-hotels", label: "Compare Hotels", icon: "building" },
      { to: "/preferences", label: "Travel Preferences", icon: "passport" }
    ]
  }
];

const primaryLinks = [
  { to: '/', key: 'home', label: 'Home' },
  { to: '/places', key: 'places', label: 'Explore' },
  { to: '/hotels', key: 'hotels', label: 'Hotels' },
  { to: '/restaurants', key: 'restaurants', label: 'Restaurants' },
]

const rightLinks = [
  { to: '/places', label: 'Search', icon: 'search' },
  { to: '/wishlist', label: 'Wishlist', icon: 'heart' },
  { to: '/ai-trip-planner', label: 'AI Planner', icon: 'sparkles' },
]

function ChevronIcon() {
  return (
    <svg className="h-4 w-4 transition duration-200 group-hover:translate-y-px" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function NavbarIcon({ icon }) {
  if (icon === 'heart') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-6.716-4.351-9.193-8.037C.613 9.695 2.374 5 6.794 5c2.228 0 3.623 1.22 4.206 2.143C11.583 6.22 12.978 5 15.206 5 19.626 5 21.387 9.695 21.193 12.963 18.716 16.649 12 21 12 21z" />
      </svg>
    )
  }

  if (icon === 'sparkles') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
        <path d="M19 15l.95 2.05L22 18l-2.05.95L19 21l-.95-2.05L16 18l2.05-.95L19 15z" />
      </svg>
    )
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  )
}

function MegaMenuIcon({ icon }) {
  if (icon === 'pin') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    )
  }

  if (icon === 'compass') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M14.8 9.2l-2.1 5.6-5.5 2.1 2.1-5.6 5.5-2.1z" />
      </svg>
    )
  }

  if (icon === 'building') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V7l8-4 8 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    )
  }

  if (icon === 'mountain') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 20l7-11 4 6 2-3 5 8H3z" />
      </svg>
    )
  }

  if (icon === 'landmark') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10h16" />
        <path d="M6 10V7l6-3 6 3v3" />
        <path d="M6 10v7M10 10v7M14 10v7M18 10v7" />
        <path d="M3 21h18" />
      </svg>
    )
  }

  if (icon === 'globe') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    )
  }

  if (icon === 'wallet') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7.5A2.5 2.5 0 016.5 5H18a2 2 0 012 2v10a2 2 0 01-2 2H6.5A2.5 2.5 0 014 16.5v-9z" />
        <path d="M16 13h4" />
      </svg>
    )
  }

  if (icon === 'passport') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 7h6M9 12h6M9 17h4" />
      </svg>
    )
  }

  if (icon === 'map') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 5l6-2 5 2v14l-6 2-5-2-5 2V7l5-2z" />
        <path d="M9 5v14M15 3v14" />
      </svg>
    )
  }

  if (icon === 'sun') {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    )
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 6v12M6 12h12" />
    </svg>
  )
}

function MegaMenu({ open, onOpen, onClose, onToggle, pathname }) {
  // Menu data
  const destinations = [
    {
      to: "/places",
      icon: "globe",
      title: "Popular Places",
      desc: "Discover famous destinations worldwide",
    },
    {
      to: "/hidden-palaces",
      icon: "landmark",
      title: "Hidden Places",
      desc: "Uncover secret gems and local spots",
    },
    {
      to: "/states",
      icon: "map",
      title: "States",
      desc: "Explore regions and states",
    },
  ];

  const experiences = [
    {
      to: "/events",
      icon: "sun",
      title: "Events",
      desc: "Festivals and cultural celebrations",
    },
    {
      to: "/dishes",
      icon: "compass",
      title: "Famous Dishes",
      desc: "Taste local and global cuisine",
    },
    {
      to: "/pubs",
      icon: "building",
      title: "Pubs",
      desc: "Nightlife and social spots",
    },
    {
      to: "/movies",
      icon: "movie",
      title: "Movies",
      desc: "Cinema and entertainment",
    },
    {
      to: "/malls",
      icon: "mall",
      title: "Malls",
      desc: "Shopping and leisure",
    },
  ];

  const planning = [
    {
      to: "/budget",
      icon: "wallet",
      title: "Budget Planner",
      desc: "Plan your travel expenses easily",
    },
    {
      to: "/compare-hotels",
      icon: "building",
      title: "Compare Hotels",
      desc: "Find the best hotel deals",
    },
    {
      to: "/preferences",
      icon: "passport",
      title: "Travel Preferences",
      desc: "Personalize your travel experience",
    },
    {
      to: "/recommendations",
      icon: "recommendations",
      title: "Recommendations",
      desc: "Get AI-powered suggestions",
    },
  ];

  // Animation classes
  const dropdownAnim = open
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-2";

  return (
    <div
      className={`absolute left-0 top-full mt-4 w-[1000px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-8 transition-all duration-300 z-50 ${dropdownAnim}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-4 gap-8">
        {/* Destinations */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-slate-800">Destinations</h3>
          <div className="space-y-4">
            {destinations.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 hover:scale-105 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <MegaMenuIcon icon={item.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-slate-800">Experiences</h3>
          <div className="space-y-4">
            {experiences.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 hover:scale-105 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <MegaMenuIcon icon={item.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Planning */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-slate-800">Planning</h3>
          <div className="space-y-4">
            {planning.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 hover:scale-105 transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <MegaMenuIcon icon={item.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Travel Inspiration Image Panel */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-full min-h-[260px] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Travel Inspiration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/40 p-6 rounded-2xl flex flex-col items-start">
              <div className="text-white text-xl font-bold mb-2">
                Explore the world
              </div>
              <div className="text-white text-sm mb-4">
                Plan your next adventure today
              </div>
              <Link
                to="/explore"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownMenu({ label, items, pathname }) {
  const active = items.some((item) => pathname === item.to)

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
          active ? 'bg-cyan-50 text-cyan-700' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
        }`}
      >
        <span>{label}</span>
        <ChevronIcon />
      </button>

      <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block rounded-xl px-4 py-3 text-sm transition duration-200 ${
              pathname === item.to
                ? 'bg-indigo-50 font-semibold text-indigo-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const { lang, setLang, t } = useContext(LanguageContext)

  const translatedPrimaryLinks = useMemo(
    () => primaryLinks.map((link) => ({ ...link, text: link.label || t(link.key) })),
    [t]
  );

  const translatedGroups = useMemo(
    () =>
      menuGroups.map((group) => ({
        ...group,
        items: group.items.map((item) => ({
          ...item,
          text: item.label || t(item.key),
        })),
      })),
    [t]
  );

  return (
    <nav className="relative z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Travel</div>
        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-6">
          {/* existing nav links */}
          {translatedPrimaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${location.pathname === link.to ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'}`}>{link.text}</Link>
          ))}
          {translatedGroups.map((group) =>
            group.label === 'Explore' ? (
              <MegaMenu
                key={group.label}
                label={group.label}
                columns={exploreMegaMenu}
                pathname={location.pathname}
                open={megaMenuOpen}
                onOpen={() => setMegaMenuOpen(true)}
                onClose={() => setMegaMenuOpen(false)}
                onToggle={() => setMegaMenuOpen((current) => !current)}
              />
            ) : (
              <DropdownMenu
                key={group.label}
                label={group.label}
                items={group.items.map((item) => ({ ...item, label: item.text }))}
                pathname={location.pathname}
              />
            )
          )}
        </div>
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2"
        >
          {/* Hamburger icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col p-4 space-y-3">
          {/* mobile nav links */}
          {translatedPrimaryLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${location.pathname === link.to ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>{link.text}</Link>
          ))}
          {translatedGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{group.label}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className={`rounded-2xl px-4 py-3 text-sm transition duration-300 ${location.pathname === item.to ? 'bg-indigo-50 font-semibold text-indigo-700' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}>{item.text}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
