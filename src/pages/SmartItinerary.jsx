import Container from '../components/ui/Container'
import { Link } from 'react-router-dom'

export default function SmartItinerary() {
  return (
    <Container className="py-12 max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Smart Itinerary</h1>
        <p className="text-lg text-slate-600">AI-generated day-by-day plans to maximize your time.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Bali 5-Day Escape</h2>
            <p className="text-slate-500">Perfect mix of culture and relaxation</p>
          </div>
          <div className="text-right">
            <span className="block text-sm text-slate-500">Estimated Cost</span>
            <span className="text-xl font-bold text-purple-600">₹50,000</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-16 shrink-0 text-center">
              <div className="bg-purple-100 text-purple-700 font-bold rounded-lg py-2">Day 1</div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Arrival & Beach Club</h4>
              <p className="text-sm text-slate-600">Check into your resort in Seminyak, watch the sunset at Potato Head Beach Club.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-16 shrink-0 text-center">
              <div className="bg-purple-100 text-purple-700 font-bold rounded-lg py-2">Day 2</div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Ubud Culture Tour</h4>
              <p className="text-sm text-slate-600">Visit the Sacred Monkey Forest and Tegallalang Rice Terraces.</p>
            </div>
          </div>
          
          {/* More days could go here in a real app */}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <Link to="/ai/trip-planner" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition">
            Generate New Itinerary
          </Link>
        </div>
      </div>
    </Container>
  )
}