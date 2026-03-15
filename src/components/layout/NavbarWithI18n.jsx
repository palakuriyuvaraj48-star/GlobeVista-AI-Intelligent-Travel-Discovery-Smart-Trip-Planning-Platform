import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaGlobe } from 'react-icons/fa'
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

const navigation = [
  { name: 'navigation.home', href: '/' },
  { name: 'navigation.explore', href: '/explore' },
  { name: 'navigation.hotels', href: '/hotels' },
  { name: 'navigation.restaurants', href: '/restaurants' },
  { name: 'navigation.experiences', href: '/experiences' },
  { name: 'navigation.transport', href: '/transport' },
  { name: 'navigation.map', href: '/map' },
  { name: 'navigation.ai', href: '/ai' },
  { name: 'navigation.groupTravel', href: '/group-travel' },
  { name: 'navigation.dashboard', href: '/dashboard' }
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
      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GV</span>
              </div>
              <span className="font-bold text-xl text-slate-900">GlobeVista AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    text-sm font-medium transition-colors
                    ${isActive(item.href) 
                      ? 'text-purple-600' 
                      : 'text-slate-700 hover:text-purple-600'
                    }
                  `}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>

            {/* User Controls */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                        className={`
                          w-full px-4 py-2 text-left flex items-center gap-3 transition-colors
                          ${lang.code === i18n.language
                            ? 'bg-purple-50 text-purple-600'
                            : 'hover:bg-gray-50'
                          }
                        `}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="ghost" size="sm">
                {t('navigation.savedTrips')}
              </Button>
              <Button variant="ghost" size="sm">
                <Avatar initials="JD" />
              </Button>
            </div>

            {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden transition-all duration-300 overflow-hidden bg-white border-t border-gray-200
          ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}
        `}>
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  block px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${isActive(item.href) 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.name)}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
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
            
            <div className="pt-4 border-t border-gray-200 flex items-center gap-4 px-4">
              <Button variant="ghost" size="sm" className="flex-1">
                {t('navigation.savedTrips')}
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
