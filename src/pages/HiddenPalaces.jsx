import Hero from '../components/Hero'
import HiddenPlaceCard from '../components/hidden/HiddenPlaceCard'
import { hiddenPlaces } from '../data/hiddenPlaces'

export default function HiddenPalaces() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920"
        title="Hidden Palaces"
        subtitle="Discover lesser-known forts and palaces"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 opacity-0 animate-fadeIn">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Hidden Palaces</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Discover lesser-known forts and palaces</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hiddenPlaces.map((palace, i) => (
          <div key={palace.id} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${i*100}ms` }}>
            <HiddenPlaceCard place={palace} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
