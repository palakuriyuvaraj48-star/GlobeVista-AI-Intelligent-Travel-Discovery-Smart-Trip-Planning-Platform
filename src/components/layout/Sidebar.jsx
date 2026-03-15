import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '../ui/Avatar'
import Button from '../ui/Badge'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { name: 'Explore', href: '/explore', icon: '🗺️' },
  { name: 'AI Tools', href: '/ai-planner', icon: '🤖' },
  { name: 'Hotels', href: '/hotels', icon: '🏨' },
  { name: 'Restaurants', href: '/restaurants', icon: '🍽️' },
  { name: 'Group Travel', href: '/group-travel', icon: '👥' },
  { name: 'Map', href: '/travel-map', icon: '📍' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GV</span>
              </div>
              <span className="font-semibold text-slate-900">GlobeVista AI</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <Avatar initials="JD" />
              <div>
                <p className="font-medium text-slate-900">John Doe</p>
                <p className="text-sm text-slate-500">john@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                  onClick={onClose}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                🚪 Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
