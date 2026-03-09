import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VoiceAssistant from './components/VoiceAssistant'
import Loader from './components/Loader'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Hotels = lazy(() => import('./pages/Hotels'))
const Restaurants = lazy(() => import('./pages/Restaurants'))
const PopularPlaces = lazy(() => import('./pages/PopularPlaces'))
const Events = lazy(() => import('./pages/Events'))
const BudgetPlanner = lazy(() => import('./pages/BudgetPlanner'))
const DressCode = lazy(() => import('./pages/DressCode'))
const Transportation = lazy(() => import('./pages/Transportation'))
const States = lazy(() => import('./pages/States'))
const HiddenPalaces = lazy(() => import('./pages/HiddenPalaces'))
const ForeignPalaces = lazy(() => import('./pages/ForeignPalaces'))
const BestSeason = lazy(() => import('./pages/BestSeason'))
// new pages
const Help = lazy(() => import('./pages/Help'))
const Rentals = lazy(() => import('./pages/Rentals'))
const FamousDishes = lazy(() => import('./pages/FamousDishes'))
const Pubs = lazy(() => import('./pages/Pubs'))
const Movies = lazy(() => import('./pages/Movies'))
const Malls = lazy(() => import('./pages/Malls'))
const TransportBooking = lazy(() => import('./pages/TransportBooking'))
const CompareHotels = lazy(() => import('./CompareHotels'))
const Preferences = lazy(() => import('./ProfilePreferences'))
const Explore = lazy(() => import('./pages/Explore'))
const AITripPlanner = lazy(() => import('./pages/AITripPlanner'))
const TravelMap = lazy(() => import('./pages/TravelMap'))
const BudgetCalculator = lazy(() => import('./pages/BudgetCalculator'))
const WeatherTravelAssistant = lazy(() => import('./pages/WeatherTravelAssistant'))
const DestinationRecommender = lazy(() => import('./pages/DestinationRecommender'))
const TravelWishlist = lazy(() => import('./pages/TravelWishlist'))
const TrendingDestinations = lazy(() => import('./pages/TrendingDestinations'))
const SmartItinerary = lazy(() => import('./pages/SmartItinerary'))
const PhotoSpotFinder = lazy(() => import('./pages/PhotoSpotFinder'))
const TravelSafety = lazy(() => import('./pages/TravelSafety'))
const SmartTravelDashboard = lazy(() => import('./pages/SmartTravelDashboard'))
const TripBuilder = lazy(() => import('./pages/TripBuilder'))
const Recommendations = lazy(() => import('./pages/Recommendations'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const ThemeDetails = lazy(() => import('./pages/ThemeDetails'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const ConfirmationPage = lazy(() => import('./pages/ConfirmationPage'))
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'))
const HiddenPlaceDetail = lazy(() => import('./pages/HiddenPlaceDetail'))

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
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/places" element={<PopularPlaces />} />
            <Route path="/events" element={<Events />} />
            <Route path="/budget" element={<BudgetPlanner />} />
            <Route path="/dress-code" element={<DressCode />} />
            <Route path="/transport" element={<Transportation />} />
            <Route path="/states" element={<States />} />
            <Route path="/hidden-palaces" element={<HiddenPalaces />} />
            <Route path="/foreign-palaces" element={<ForeignPalaces />} />
            <Route path="/best-season" element={<BestSeason />} />
            <Route path="/help" element={<Help />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/dishes" element={<FamousDishes />} />
            <Route path="/pubs" element={<Pubs />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/malls" element={<Malls />} />
            <Route path="/transport-booking" element={<TransportBooking />} />
            <Route path="/compare-hotels" element={<CompareHotels />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/ai-trip-planner" element={<AITripPlanner />} />
            <Route path="/travel-map" element={<TravelMap />} />
            <Route path="/budget-calculator" element={<BudgetCalculator />} />
            <Route path="/weather" element={<WeatherTravelAssistant />} />
            <Route path="/recommendations" element={<DestinationRecommender />} />
            <Route path="/wishlist" element={<TravelWishlist />} />
            <Route path="/trending" element={<TrendingDestinations />} />
            <Route path="/smart-itinerary" element={<SmartItinerary />} />
            <Route path="/photo-spots" element={<PhotoSpotFinder />} />
            <Route path="/safety" element={<TravelSafety />} />
            <Route path="/dashboard" element={<SmartTravelDashboard />} />
            <Route path="/trip-builder" element={<TripBuilder />} />
            <Route path="/recommendations-old" element={<Recommendations />} />
            <Route path="/wishlist-old" element={<Wishlist />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/theme/:themeName" element={<ThemeDetails />} />
            <Route path="/booking/:packageId" element={<BookingPage />} />
            <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
            <Route path="/destination/:name" element={<DestinationDetail />} />
            <Route path="/hidden/:placeName" element={<HiddenPlaceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  )
}

export default App
