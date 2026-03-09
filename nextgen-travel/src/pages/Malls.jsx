import Card from '../components/Card'

const malls = [
  {
    id: 'dubai',
    title: 'Dubai Luxury Mall Circuit',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1515165562835-c3b8b0b0b0a7?w=1920',
    description: 'Premium retail, dining, and architectural scale—built for a full-day experience.',
  },
  {
    id: 'mumbai',
    title: 'Mumbai Premium Shopping Hubs',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=1920',
    description: 'Curated brands, comfortable lounges, and high-convenience travel days.',
  },
  {
    id: 'paris',
    title: 'Paris Department Store Heritage',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1520975869015-2b6a3a59b3bd?w=1920',
    description: 'Design, history, and fashion—where shopping feels like culture.',
  },
]

export default function Malls() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515165562835-c3b8b0b0b0a7?w=1920"
          alt="Malls"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Urban Luxury</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Malls</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Premium shopping experiences, built into your itinerary.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {malls.map((m) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.location + ' mall')}`
            return (
              <Card key={m.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={m.image} alt={m.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">{m.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{m.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{m.description}</p>
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
