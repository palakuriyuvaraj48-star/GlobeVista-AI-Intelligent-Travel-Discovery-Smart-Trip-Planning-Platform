import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DropdownMenu({ title, items, isActive }) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
          isActive || isOpen ? 'text-purple-600' : 'text-slate-700 hover:text-purple-600'
        }`}
        aria-expanded={isOpen}
      >
        {title}
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div 
        className={`absolute top-full left-0 mt-2 w-56 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5 transition-all duration-200 transform origin-top-left ${
          isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
        }`}
      >
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
