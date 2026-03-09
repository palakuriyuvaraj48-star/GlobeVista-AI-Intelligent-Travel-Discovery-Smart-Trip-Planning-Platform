import Card from '../components/Card'

const dishes = [
  {
    id: 'jaipur',
    title: 'Dal Baati Churma',
    location: 'Rajasthan, India',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=1920',
    description: 'A signature heritage meal—rich, balanced, and deeply local.',
  },
  {
    id: 'goa',
    title: 'Goan Fish Curry',
    location: 'Goa, India',
    image: 'https://images.unsplash.com/photo-1604909053195-7b52d76e0fe3?w=1920',
    description: 'Coastal comfort with bold spice—best paired with sea air.',
  },
  {
    id: 'kerala',
    title: 'Kerala Sadya',
    location: 'Kerala, India',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=1920',
    description: 'A celebratory spread that feels like culture on a plate.',
  },
]

export default function FamousDishes() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604908176997-125f25cc500f?w=1920"
          alt="Famous dishes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Culinary Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Famous Dishes</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Taste the destination—one signature dish at a time.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.location + ' food')}`
            return (
              <Card key={d.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={d.image} alt={d.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">{d.title}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{d.location}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{d.description}</p>
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
