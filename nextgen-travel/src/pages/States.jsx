import Card from '../components/Card'

const states = [
  { id: 1, name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=800', desc: 'Palaces, forts, and desert culture.', location: 'Rajasthan, India' },
  { id: 2, name: 'Goa', image: 'https://images.unsplash.com/photo-1555881404-251498ef9dba?w=800', desc: 'Beaches, nightlife, and Portuguese heritage.', location: 'Goa, India' },
  { id: 3, name: 'Kerala', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a028?w=800', desc: 'Backwaters, hills, and Ayurveda.', location: 'Kerala, India' },
  { id: 4, name: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800', desc: 'Mountains, trekking, and hill stations.', location: 'Himachal Pradesh, India' },
  { id: 5, name: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800', desc: 'Temples, Chettinad, and heritage.', location: 'Tamil Nadu, India' },
  { id: 6, name: 'Maharashtra', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', desc: 'Mumbai, Ajanta-Ellora, and Western Ghats.', location: 'Maharashtra, India' },
]

export default function States() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920"
          alt="States"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Official Destinations</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">States (India)</h1>
            <p className="mt-4 text-lg font-medium text-white/80">
              Curated gateways for culture, coastlines, hills, and heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state.location)}`

            return (
              <Card key={state.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={state.image} alt={state.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{state.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{state.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{state.desc}</p>
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-xs font-extrabold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    Google Maps
                  </a>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
