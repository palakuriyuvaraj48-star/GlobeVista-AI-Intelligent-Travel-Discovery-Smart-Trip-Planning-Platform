import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AITravelCopilot from './components/AITravelCopilot'
import TravelMoodSelector from './components/TravelMoodSelector'
import Loader from './components/Loader'

// Feature pages
import Home from './pages/Home'
import HiddenPlaces from './pages/HiddenPlaces'
import States from './pages/States'
import BudgetPlanner from './pages/BudgetPlanner'
import CompareHotels from './pages/CompareHotels'
import TravelPreferences from './pages/TravelPreferences'
import Recommendations from './pages/Recommendations'
import Hotels from './pages/Hotels'
import Restaurants from './pages/Restaurants'
import Experiences from './pages/Experiences'
import Map from './pages/Map'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Hotels = lazy(() => import('./pages/Hotels'))
const Restaurants = lazy(() => import('./pages/Restaurants'))
const PopularPlaces = lazy(() => import('./pages/PopularPlaces'))

// Experiences
const Events = lazy(() => import('./pages/Events'))
const Food = lazy(() => import('./pages/Food'))
const Pubs = lazy(() => import('./pages/Pubs'))
const Movies = lazy(() => import('./pages/Movies'))
const Malls = lazy(() => import('./pages/Malls'))

// Planner
const BudgetPlanner = lazy(() => import('./pages/BudgetPlanner'))
const CompareHotels = lazy(() => import('./pages/CompareHotels'))
const TravelPreferences = lazy(() => import('./pages/TravelPreferences'))
const Recommendations = lazy(() => import('./pages/Recommendations'))

// Transport
const Transport = lazy(() => import('./pages/Transport'))
const TransportBooking = lazy(() => import('./pages/TransportBooking'))
const Rentals = lazy(() => import('./pages/Rentals'))

// More
const DressCode = lazy(() => import('./pages/DressCode'))
const Help = lazy(() => import('./pages/Help'))

// Destinations
const DestinationsPopular = lazy(() => import('./pages/DestinationsPopular'))
const DestinationsHidden = lazy(() => import('./pages/DestinationsHidden'))
const DestinationsStates = lazy(() => import('./pages/DestinationsStates'))
const DestinationCity = lazy(() => import('./pages/DestinationCity'))

// Explore
const Explore = lazy(() => import('./pages/Explore'))

function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-2 text-slate-600">The requested route is not configured.</p>
      </div>
    </section>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <Navbar />
      <TravelMoodSelector mode="modal" />
      <main className="flex-1 pt-20">
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Routes location={location}>
                {/* Home and Explore */}
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/hidden-places" element={<HiddenPlaces />} />
                <Route path="/states" element={<States />} />
                <Route path="/budget-planner" element={<BudgetPlanner />} />
                <Route path="/compare-hotels" element={<CompareHotels />} />
                <Route path="/travel-preferences" element={<TravelPreferences />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/map" element={<Map />} />

                {/* Experiences */}
                <Route path="/events" element={<Events />} />
                <Route path="/food" element={<Food />} />
                <Route path="/pubs" element={<Pubs />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/malls" element={<Malls />} />

                {/* Planner */}
                <Route path="/planner/budget" element={<BudgetPlanner />} />
                <Route path="/planner/compare-hotels" element={<CompareHotels />} />
                <Route path="/planner/preferences" element={<TravelPreferences />} />
                <Route path="/planner/recommendations" element={<Recommendations />} />

                {/* Transport */}
                <Route path="/transport" element={<Transport />} />
                <Route path="/transport/booking" element={<TransportBooking />} />
                <Route path="/rentals" element={<Rentals />} />

                {/* More */}
                <Route path="/travel/dress-code" element={<DressCode />} />
                <Route path="/help" element={<Help />} />

                {/* Destinations Mega Menu */}
                <Route path="/destinations/popular" element={<DestinationsPopular />} />
                <Route path="/destinations/hidden" element={<DestinationsHidden />} />
                <Route path="/destinations/states" element={<DestinationsStates />} />
                <Route path="/destination/:city" element={<DestinationCity />} />

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <AITravelCopilot />
    </div>
  )
}

export default App
