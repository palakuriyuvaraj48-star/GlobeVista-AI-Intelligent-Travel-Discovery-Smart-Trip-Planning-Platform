import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import NavbarWithI18n from './components/layout/NavbarWithI18n'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Lazy load pages
const HomePro = lazy(() => import('./pages/HomePro'))
const DestinationPage = lazy(() => import('./pages/DestinationPage'))
const HotelDetailsPage = lazy(() => import('./pages/HotelDetailsPage'))
const RestaurantDetailsPage = lazy(() => import('./pages/RestaurantDetailsPage'))
const ExperienceDetailsPage = lazy(() => import('./pages/ExperienceDetailsPage'))
const ExplorePage = lazy(() => import('./pages/ExplorePage'))
const Hotels = lazy(() => import('./pages/Hotels'))
const Restaurants = lazy(() => import('./pages/Restaurants'))
const Experiences = lazy(() => import('./pages/Experiences'))
const Transport = lazy(() => import('./pages/Transport'))
const TransportBooking = lazy(() => import('./pages/TransportBooking'))
const TravelMapFixed = lazy(() => import('./pages/TravelMapFixed'))
const AITripPlanner = lazy(() => import('./pages/AITripPlannerNew'))
const AIBudgetCalculator = lazy(() => import('./pages/AIBudgetCalculator'))
const AIRecommendations = lazy(() => import('./pages/AIRecommendations'))
const GroupTravel = lazy(() => import('./pages/GroupTravel'))
const Malls = lazy(() => import('./pages/Malls'))
const Pubs = lazy(() => import('./pages/Pubs'))
const HiddenPlaces = lazy(() => import('./pages/HiddenPlaces'))
const FamousDishes = lazy(() => import('./pages/FamousDishes'))
const Rentals = lazy(() => import('./pages/Rentals'))
const HiddenPlaceDetail = lazy(() => import('./pages/HiddenPlaceDetail'))
const TravelDashboard = lazy(() => import('./pages/TravelDashboard'))
const SavedTrips = lazy(() => import('./pages/SavedTrips'))
const Details = lazy(() => import('./pages/Details'))
const Booking = lazy(() => import('./pages/Booking'))
const Payment = lazy(() => import('./pages/Payment'))
const Success = lazy(() => import('./pages/Success'))
const ForeignPlaces = lazy(() => import('./pages/ForeignPlaces'))
const States = lazy(() => import('./pages/States'))
const BestSeason = lazy(() => import('./pages/BestSeason'))
const Movies = lazy(() => import('./pages/Movies'))
const CompareHotels = lazy(() => import('./pages/CompareHotels'))
const TravelPreferences = lazy(() => import('./pages/TravelPreferences'))
const WeatherAssistant = lazy(() => import('./pages/WeatherAssistant'))
const SmartItinerary = lazy(() => import('./pages/SmartItinerary'))
const PhotoSpotFinder = lazy(() => import('./pages/PhotoSpotFinder'))
const TravelSafety = lazy(() => import('./pages/TravelSafety'))
const TrendingDestinations = lazy(() => import('./pages/TrendingDestinations'))
const DressCode = lazy(() => import('./pages/DressCode'))
const Help = lazy(() => import('./pages/Help'))

// Page wrapper for animations
function PageWrapper({ children }) {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function AppWithRoutes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarWithI18n />
      
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={
              <PageWrapper>
                <HomePro />
              </PageWrapper>
            } />
            
            <Route path="/explore" element={
              <PageWrapper>
                <ExplorePage />
              </PageWrapper>
            } />
            
            <Route path="/destination/:city" element={
              <PageWrapper>
                <DestinationPage />
              </PageWrapper>
            } />
            
            <Route path="/hotel/:hotelId" element={
              <PageWrapper>
                <HotelDetailsPage />
              </PageWrapper>
            } />
            
            <Route path="/restaurant/:id" element={
              <PageWrapper>
                <RestaurantDetailsPage />
              </PageWrapper>
            } />
            
            <Route path="/experience/:id" element={
              <PageWrapper>
                <ExperienceDetailsPage />
              </PageWrapper>
            } />
            
            <Route path="/hotels" element={
              <PageWrapper>
                <Hotels />
              </PageWrapper>
            } />
            
            <Route path="/restaurants" element={
              <PageWrapper>
                <Restaurants />
              </PageWrapper>
            } />
            
            <Route path="/experiences" element={
              <PageWrapper>
                <Experiences />
              </PageWrapper>
            } />
            
            <Route path="/transport" element={
              <PageWrapper>
                <Transport />
              </PageWrapper>
            } />
            
            <Route path="/malls" element={
              <PageWrapper>
                <Malls />
              </PageWrapper>
            } />
            
            <Route path="/pubs" element={
              <PageWrapper>
                <Pubs />
              </PageWrapper>
            } />
            
            <Route path="/hidden-places" element={
              <PageWrapper>
                <HiddenPlaces />
              </PageWrapper>
            } />
            
            <Route path="/hidden-place/:placeName" element={
              <PageWrapper>
                <HiddenPlaceDetail />
              </PageWrapper>
            } />
            
            <Route path="/famous-dishes" element={
              <PageWrapper>
                <FamousDishes />
              </PageWrapper>
            } />
            
            <Route path="/rentals" element={
              <PageWrapper>
                <Rentals />
              </PageWrapper>
            } />

            <Route path="/transport-confirmation" element={
              <PageWrapper>
                <TransportBooking />
              </PageWrapper>
            } />
            
            <Route path="/map" element={
              <PageWrapper>
                <TravelMapFixed />
              </PageWrapper>
            } />
            
            <Route path="/ai/trip-planner" element={
              <PageWrapper>
                <AITripPlanner />
              </PageWrapper>
            } />
            
            <Route path="/ai/budget" element={
              <PageWrapper>
                <AIBudgetCalculator />
              </PageWrapper>
            } />
            
            <Route path="/ai/recommend" element={
              <PageWrapper>
                <AIRecommendations />
              </PageWrapper>
            } />
            
            <Route path="/group-travel" element={
              <PageWrapper>
                <GroupTravel />
              </PageWrapper>
            } />
            
            <Route path="/dashboard" element={
              <PageWrapper>
                <TravelDashboard />
              </PageWrapper>
            } />
            
            <Route path="/saved-trips" element={
              <PageWrapper>
                <SavedTrips />
              </PageWrapper>
            } />
            
            <Route path="/details/:id" element={
              <PageWrapper>
                <Details />
              </PageWrapper>
            } />
            
            <Route path="/booking" element={
              <PageWrapper>
                <Booking />
              </PageWrapper>
            } />
            
            <Route path="/payment" element={
              <PageWrapper>
                <Payment />
              </PageWrapper>
            } />
            
            <Route path="/success" element={
              <PageWrapper>
                <Success />
              </PageWrapper>
            } />
            
            <Route path="/foreign-places" element={<PageWrapper><ForeignPlaces /></PageWrapper>} />
            <Route path="/states" element={<PageWrapper><States /></PageWrapper>} />
            <Route path="/best-season" element={<PageWrapper><BestSeason /></PageWrapper>} />
            <Route path="/movies" element={<PageWrapper><Movies /></PageWrapper>} />
            <Route path="/compare-hotels" element={<PageWrapper><CompareHotels /></PageWrapper>} />
            <Route path="/travel-preferences" element={<PageWrapper><TravelPreferences /></PageWrapper>} />
            <Route path="/weather-assistant" element={<PageWrapper><WeatherAssistant /></PageWrapper>} />
            <Route path="/smart-itinerary" element={<PageWrapper><SmartItinerary /></PageWrapper>} />
            <Route path="/photo-spot-finder" element={<PageWrapper><PhotoSpotFinder /></PageWrapper>} />
            <Route path="/travel-safety" element={<PageWrapper><TravelSafety /></PageWrapper>} />
            <Route path="/trending-destinations" element={<PageWrapper><TrendingDestinations /></PageWrapper>} />
            <Route path="/dress-code" element={<PageWrapper><DressCode /></PageWrapper>} />
            <Route path="/help" element={<PageWrapper><Help /></PageWrapper>} />
            
            {/* Fallback route */}
            <Route path="*" element={
              <PageWrapper>
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-gray-600 mb-4">Page not found</p>
                    <a href="/" className="text-purple-600 hover:text-purple-700">
                      Go back home
                    </a>
                  </div>
                </div>
              </PageWrapper>
            } />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}
