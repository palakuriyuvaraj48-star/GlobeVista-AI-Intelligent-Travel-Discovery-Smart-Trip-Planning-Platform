import { Link, useLocation } from 'react-router-dom'
import Avatar from '../components/ui/Avatar'
import Button from '../components/ui/Button'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Restaurants', to: '/restaurants' },
  { label: 'Experiences', to: '/events' },
  { label: 'Transport', to: '/transport' },
  { label: 'AI Tools', to: '/ai-autopilot' },
  { label: 'Group Travel', to: '/group-travel' },
  { label: 'Dashboard', to: '/dashboard' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold text-white shadow-md">
            GV
          </span>
          <span className="tracking-tight">GlobeVista AI</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-semibold transition ${
                location.pathname === item.to ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Avatar initials="AV" />
          <Link to="/wishlist" className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 md:inline-flex">
            Saved Trips
          </Link>
          <Link to="/preferences" className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 md:inline-flex">
            Profile
          </Link>
          <Button variant="secondary" size="sm" className="hidden md:inline-flex">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
