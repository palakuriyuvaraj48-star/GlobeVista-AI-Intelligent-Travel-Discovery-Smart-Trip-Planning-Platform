import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">NextGen Travel Explorer</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Discover stays, food, transport, and destination experiences in one polished booking flow.
              </p>
            </div>
            <Link
              to="/explore"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start Exploring
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">NextGen Travel Explorer</h3>
            <p className="text-sm">Explore curated hotels, restaurants, events, and destinations with confidence.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hotels" className="transition hover:text-white">Hotels</Link></li>
              <li><Link to="/restaurants" className="transition hover:text-white">Restaurants</Link></li>
              <li><Link to="/events" className="transition hover:text-white">Events</Link></li>
              <li><Link to="/places" className="transition hover:text-white">Destinations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="transition hover:text-white">About</Link></li>
              <li><Link to="/help" className="transition hover:text-white">Contact</Link></li>
              <li><Link to="/help" className="transition hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/help" className="transition hover:text-white">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Twitter</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
          {'\u00A9'} 2026 NextGen Travel Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
