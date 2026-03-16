import Container from '../components/ui/Container'
import { FaShieldAlt, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa'

export default function TravelSafety() {
  return (
    <Container className="py-12 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Travel Safety Hub</h1>
        <p className="text-lg text-slate-600">Real-time alerts and guidelines for your upcoming destinations.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border-l-4 border-l-yellow-500 shadow-sm flex gap-4">
          <div className="text-yellow-500 text-2xl shrink-0 mt-1"><FaExclamationTriangle /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Weather Advisory - Coastal Regions</h3>
            <p className="text-slate-600 mt-1">Heavy rainfall expected in coastal areas over the next 48 hours. Please check local transport schedules as delays are highly likely.</p>
            <span className="text-xs text-slate-400 mt-2 block">Updated 2 hours ago</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm flex gap-4">
          <div className="text-blue-500 text-2xl shrink-0 mt-1"><FaInfoCircle /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Health Guidelines Update</h3>
            <p className="text-slate-600 mt-1">No mandatory vaccination requirements for domestic travel. Masks are recommended but not required in public transport.</p>
            <span className="text-xs text-slate-400 mt-2 block">Updated yesterday</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border-l-4 border-l-green-500 shadow-sm flex gap-4">
          <div className="text-green-500 text-2xl shrink-0 mt-1"><FaShieldAlt /></div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">General Safety Tips</h3>
            <ul className="list-disc list-inside mt-2 text-slate-600 space-y-1">
              <li>Keep digital copies of all important identification.</li>
              <li>Share your itinerary with a trusted friend or family member.</li>
              <li>Avoid traveling alone late at night in unfamiliar areas.</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}