import { getRecommendedDestinations } from '../ai/AIRecommendations'
import { getTravelPersonality } from '../ai/AIMoodEngine'

export default function AITravelFeed() {
  const personality = getTravelPersonality() || 'Adventure Seeker'
  const destinations = getRecommendedDestinations(personality)

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">AI Personalized Feed</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">Recommendations for {personality}</h3>
        </div>
        <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white">
          Refresh
        </button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.name} className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
            <img src={destination.image} alt={destination.name} className="h-32 w-full rounded-t-2xl object-cover" />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-slate-900">{destination.name}</h4>
              <p className="mt-1 text-xs text-slate-600">{destination.description}</p>
              <button className="mt-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white">
                Explore
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
