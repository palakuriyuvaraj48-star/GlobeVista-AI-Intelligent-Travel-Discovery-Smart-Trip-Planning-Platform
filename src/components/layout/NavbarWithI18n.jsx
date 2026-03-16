import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'
import DropdownMenu from './DropdownMenu'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Explore', 
    dropdown: [
      { name: 'Popular Places', href: '/explore' },
      { name: 'Hidden Places', href: '/hidden-places' },
      { name: 'Foreign Places', href: '/foreign-places' },
      { name: 'States', href: '/states' },
      { name: 'Best Season', href: '/best-season' }
    ]
  },
  { 
    name: 'Experiences', 
    dropdown: [
      { name: 'Events', href: '/events' },
      { name: 'Famous Dishes', href: '/famous-dishes' },
      { name: 'Pubs', href: '/pubs' },
      { name: 'Movies', href: '/movies' },
      { name: 'Malls', href: '/malls' }
    ]
  },
  {
    name: 'Planning',
    dropdown: [
      { name: 'Budget Planner', href: '/ai/budget' },
      { name: 'Compare Hotels', href: '/compare-hotels' },
      { name: 'Travel Preferences', href: '/travel-preferences' },
      { name: 'Recommendations', href: '/ai/recommend' }
    ]
  },
  {
    name: 'Transport',
    dropdown: [
      { name: 'Transportation', href: '/transport' },
      { name: 'Transport Booking', href: '/transport-confirmation' },
      { name: 'Rentals', href: '/rentals' }
    ]
  },
  {
    name: 'AI Travel Tools',
    dropdown: [
      { name: 'AI Trip Planner', href: '/ai/trip-planner' },
      { name: 'Travel Map Explorer', href: '/map' },
      { name: 'Weather Assistant', href: '/weather-assistant' },
      { name: 'Destination Recommender', href: '/ai/recommend' },
      { name: 'Smart Itinerary', href: '/smart-itinerary' },
      { name: 'Photo Spot Finder', href: '/photo-spot-finder' },
      { name: 'Travel Safety', href: '/travel-safety' },
      { name: 'Trending Destinations', href: '/trending-destinations' },
      { name: 'Wishlist', href: '/saved-trips' }
    ]
  },
  {
    name: 'More',
    dropdown: [
      { name: 'Dress Code', href: '/dress-code' },
      { name: 'Help', href: '/help' },
      { name: 'Dashboard', href: '/dashboard' }
    ]
  }
]

export default function NavbarWithI18n() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguageDropdownOpen(false)
  }

  const isActive = (href) => location.pathname === href

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 shrink-0 mr-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GV</span>
              </div>
              <span className="font-bold text-lg text-slate-900 hidden lg:block xl:text-xl">GlobeVista</span>
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1 gap-2 xl:gap-6">
              {navigation.map((item) => (
                item.dropdown ? (
                  <DropdownMenu 
                    key={item.name} 
                    title={item.name} 
                    items={item.dropdown} 
                    isActive={item.dropdown.some(dropdownItem => isActive(dropdownItem.href))}
                  />
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors px-2 py-2 ${
                      isActive(item.href) 
                        ? 'text-purple-600' 
                        : 'text-slate-700 hover:text-purple-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-4">
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaGlobe className="text-gray-600" />
                  <span className="text-sm font-medium">{currentLanguage.flag}</span>
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors ${
                          lang.code === i18n.language ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="ghost" size="sm" className="hidden xl:inline-flex">
                Saved
              </Button>
              <Button variant="ghost" size="sm">
                <Avatar initials="JD" />
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 overflow-y-auto bg-white border-t border-gray-200 ${mobileMenuOpen ? 'max-h-[80vh] border-b' : 'max-h-0'}`}>
          <div className="px-6 py-4 flex flex-col gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="py-1">
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-4 py-2 font-bold text-slate-900 text-sm uppercase tracking-wider bg-slate-50 rounded-lg">{item.name}</div>
                    {item.dropdown.map(subItem => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className={`block px-4 py-2.5 ml-4 rounded-lg text-sm font-medium transition-colors ${
                          isActive(subItem.href) ? 'bg-purple-50 text-purple-600' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href) ? 'bg-purple-50 text-purple-600' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-200 mt-2">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium">Language</span>
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 flex items-center justify-center gap-8 px-4 pb-4">
              <Button variant="ghost" size="sm">
                Saved Trips
              </Button>
              <Button variant="ghost" size="sm">
                <Avatar initials="JD" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
