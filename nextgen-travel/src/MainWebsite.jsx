import { Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VoiceAssistant from './components/VoiceAssistant'
import Loader from './components/Loader'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Hotels = React.lazy(() => import('./pages/Hotels'))
const Restaurants = React.lazy(() => import('./pages/Restaurants'))
const PopularPlaces = React.lazy(() => import('./pages/PopularPlaces'))
const Events = React.lazy(() => import('./pages/Events'))
const BudgetPlanner = React.lazy(() => import('./pages/BudgetPlanner'))
const DressCode = React.lazy(() => import('./pages/DressCode'))
const Transportation = React.lazy(() => import('./pages/Transportation'))
const States = React.lazy(() => import('./pages/States'))
const HiddenPalaces = React.lazy(() => import('./pages/HiddenPalaces'))
const ForeignPalaces = React.lazy(() => import('./pages/ForeignPalaces'))
const BestSeason = React.lazy(() => import('./pages/BestSeason'))
const BestTime = React.lazy(() => import('./pages/BestTime'))
const Rentals = React.lazy(() => import('./pages/Rentals'))
const Pubs = React.lazy(() => import('./pages/Pubs'))
const Movies = React.lazy(() => import('./pages/Movies'))
const Malls = React.lazy(() => import('./pages/Malls'))
const FamousDishes = React.lazy(() => import('./pages/FamousDishes'))
const VoiceAssistantPage = React.lazy(() => import('./pages/VoiceAssistant'))
const ProfilePreferences = React.lazy(() => import('./pages/ProfilePreferences'))
const CompareHotels = React.lazy(() => import('./pages/CompareHotels'))
const AdminAnalytics = React.lazy(() => import('./pages/AdminAnalytics'))

export default function MainWebsite() {
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
            <Route path="/best-time" element={<BestTime />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/pubs" element={<Pubs />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/malls" element={<Malls />} />
            <Route path="/famous-dishes" element={<FamousDishes />} />
            <Route path="/voice-assistant" element={<VoiceAssistantPage />} />
            <Route path="/profile-preferences" element={<ProfilePreferences />} />
            <Route path="/compare-hotels" element={<CompareHotels />} />
            <Route path="/admin-analytics" element={<AdminAnalytics />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <VoiceAssistant />
    </div>
  )
}
