import Card from '../components/Card'
import { events } from '../data/events'

export default function Events() {
  return (
    <div>
      <section className="relative h-[56vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920"
          alt="Events"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Experience Calendar</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Events</h1>
            <p className="mt-4 text-lg font-medium text-white/80">Festivals and high-signal experiences around the world.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="transition duration-300">
              <Card>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{event.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{event.location}</p>
                  <p className="text-indigo-600 dark:text-indigo-300 text-sm font-extrabold mt-1">{event.date}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{event.description}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-xs font-extrabold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    Google Maps
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
