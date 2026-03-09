import Card from '../components/Card'

const pubs = [
  {
    id: 'goa',
    title: 'Goa Beachfront Lounge Circuit',
    location: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920',
    description: 'Curated nightlife, premium music, and relaxed luxury by the sea.',
  },
  {
    id: 'mumbai',
    title: 'Mumbai Rooftop Evenings',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1920',
    description: 'City lights, smart casual energy, and skyline conversations.',
  },
  {
    id: 'london',
    title: 'London Classic Pubs & Modern Bars',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1514361892635-eae31a2f5fd3?w=1920',
    description: 'Heritage interiors with modern menus—comfort, style, and taste.',
  },
]

export default function Pubs() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920"
          alt="Pubs"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Nightlife Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Pubs</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Premium evenings—safe, curated, and memorable.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pubs.map((p) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.location + ' pubs')}`
            return (
              <Card key={p.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">{p.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{p.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
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
