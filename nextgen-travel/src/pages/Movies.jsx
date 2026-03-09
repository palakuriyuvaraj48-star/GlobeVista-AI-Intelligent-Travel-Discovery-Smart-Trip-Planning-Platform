import Card from '../components/Card'

const movies = [
  {
    id: 'jaipur',
    title: 'Jaipur Cinematic Heritage Walk',
    location: 'Jaipur, India',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=1920',
    description: 'Locations that feel like film sets—arches, courtyards, and golden-hour frames.',
  },
  {
    id: 'paris',
    title: 'Paris Classic Cinema Views',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1920',
    description: 'Architecture that tells stories—perfect for photography-first itineraries.',
  },
  {
    id: 'mumbai',
    title: 'Mumbai Film City Energy',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920',
    description: 'A tribute to the city that powers India’s cinema culture.',
  },
]

export default function Movies() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920"
          alt="Movies"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Experience Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Movies</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Travel through cinema—locations that feel like scenes.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((m) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.location)}`
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
