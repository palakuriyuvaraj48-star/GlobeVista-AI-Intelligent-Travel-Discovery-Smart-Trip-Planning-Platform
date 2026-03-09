import Card from '../components/Card'

const hiddenPalaces = [
  { id: 1, name: 'Bundi Palace', image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=800', location: 'Rajasthan' },
  { id: 2, name: 'Neemrana Fort', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800', location: 'Rajasthan' },
  { id: 3, name: 'Chettinad Mansions', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800', location: 'Tamil Nadu' },
  { id: 4, name: 'Orchha Palace', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800', location: 'Madhya Pradesh' },
  { id: 5, name: 'Mandu Fort', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800', location: 'Madhya Pradesh' },
  { id: 6, name: 'Bhangarh Fort', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800', location: 'Rajasthan' },
]

export default function HiddenPalaces() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920"
          alt="Hidden Palaces"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Rare Heritage</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Hidden Palaces</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Lesser-known forts and palaces—quiet, cinematic, unforgettable.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hiddenPalaces.map((palace) => {
            const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(palace.name + ' ' + palace.location)}`

            return (
              <Card key={palace.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={palace.image} alt={palace.name} className="w-full h-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{palace.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{palace.location}</p>
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
