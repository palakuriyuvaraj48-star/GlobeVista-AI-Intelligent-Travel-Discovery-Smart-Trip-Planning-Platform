import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Explore', href: '/explore' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Restaurants', href: '/restaurants' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Transport', href: '/transport' },
  { name: 'AI Tools', href: '/ai-tools' },
  { name: 'Group Travel', href: '/group-travel' },
  { name: 'Dashboard', href: '/dashboard' },
]

const aiTools = [
  { name: 'AI Trip Planner', href: '/ai-planner' },
  { name: 'Budget Calculator', href: '/budget-calculator' },
  { name: 'Destination Finder', href: '/recommendations' },
  { name: 'Travel Heatmap', href: '/travel-map' },
  { name: 'Trip Predictor', href: '/ai-predictor' },
]

export default function NavbarPro() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href) => location.pathname === href

  return (
    <>
      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-white'
        }
      `}>
        <Container className="px-6">
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
                  {item.name}
                </Link>
              ))}
              
              {/* AI Tools Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setAiDropdownOpen(true)}
                  onMouseLeave={() => setAiDropdownOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors flex items-center gap-1"
                >
                  AI Tools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {aiDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2"
                    onMouseEnter={() => setAiDropdownOpen(true)}
                    onMouseLeave={() => setAiDropdownOpen(false)}
                  >
                    {aiTools.map((tool) => (
                      <Link
                        key={tool.name}
                        to={tool.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* User Controls */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Saved Trips
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
        </Container>

        {/* Mobile Navigation */}
        <div className={`
          lg:hidden transition-all duration-300 overflow-hidden
          ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}
        `}>
          <div className="bg-white border-t border-slate-200">
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
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-200">
                <div className="space-y-2">
                  {aiTools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.href}
                      className="block px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Saved Trips
                </Button>
                <Button variant="ghost" size="sm">
                  <Avatar initials="JD" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
