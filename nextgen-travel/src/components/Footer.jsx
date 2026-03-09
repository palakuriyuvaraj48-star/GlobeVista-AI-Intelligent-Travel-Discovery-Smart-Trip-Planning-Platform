import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">NextGen Travel Explorer</h3>
            <p className="text-sm">Explore the world in luxury. Curated hotels, restaurants, and experiences.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hotels" className="hover:text-white transition">Hotels</Link></li>
              <li><Link to="/restaurants" className="hover:text-white transition">Restaurants</Link></li>
              <li><Link to="/places" className="hover:text-white transition">Popular Places</Link></li>
              <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
              <li><Link to="/budget" className="hover:text-white transition">Budget Planner</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/states" className="hover:text-white transition">Indian States</Link></li>
              <li><Link to="/hidden-palaces" className="hover:text-white transition">Hidden Palaces</Link></li>
              <li><Link to="/foreign-palaces" className="hover:text-white transition">Foreign Palaces</Link></li>
              <li><Link to="/best-season" className="hover:text-white transition">Best Season</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          © {new Date().getFullYear()} NextGen Travel Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
