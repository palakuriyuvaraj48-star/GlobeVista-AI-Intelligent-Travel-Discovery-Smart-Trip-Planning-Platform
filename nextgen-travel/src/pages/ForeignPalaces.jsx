import Card from '../components/Card'

const foreignPalaces = [
  { id: 1, name: 'Palace of Versailles', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800', country: 'France', location: 'Versailles, France', desc: 'Royal gardens, museum-level detail, and absolute scale.' },
  { id: 2, name: 'Buckingham Palace', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', country: 'United Kingdom', location: 'London, UK', desc: 'Ceremony, tradition, and iconic prestige at the heart of London.' },
  { id: 3, name: 'Topkapi Palace', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800', country: 'Turkey', location: 'Istanbul, Turkey', desc: 'Ottoman legacy, skyline views, and historic courtyards.' },
  { id: 4, name: 'Royal Palace of Madrid', image: 'https://images.unsplash.com/photo-1539037116277-4b20889b29f8?w=800', country: 'Spain', location: 'Madrid, Spain', desc: 'Grand halls and royal architecture built for ceremony.' },
  { id: 5, name: 'Winter Palace', image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800', country: 'Russia', location: 'Saint Petersburg, Russia', desc: 'A masterpiece of imperial color, art, and history.' },
  { id: 6, name: 'Alhambra', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800', country: 'Spain', location: 'Granada, Spain', desc: 'Intricate stonework, warm light, and timeless geometry.' },
]

export default function ForeignPalaces() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920"
          alt="Foreign Palaces"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Global Heritage</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Foreign Palaces</h1>
            <p className="mt-4 text-lg font-medium text-white/80">
              Royal landmarks that define history, design, and identity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foreignPalaces.map((palace) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(palace.location)}`

            return (
              <Card key={palace.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={palace.image} alt={palace.name} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                    {palace.country}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{palace.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{palace.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{palace.desc}</p>
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
