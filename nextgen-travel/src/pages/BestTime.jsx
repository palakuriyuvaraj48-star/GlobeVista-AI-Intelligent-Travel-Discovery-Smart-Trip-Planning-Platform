import { useMemo, useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const dataset = [
  {
    id: 'jaipur-sunset',
    place: 'Jaipur',
    bestMonth: 'November',
    bestTimeOfDay: 'Sunset',
    festivalOrEvent: 'Jaipur Literature Festival',
    experienceType: 'Romantic Evenings',
    experienceHighlight: 'Golden-hour fort views and palace lights that feel cinematic.',
    image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=1920',
  },
  {
    id: 'goa-night',
    place: 'Goa',
    bestMonth: 'December',
    bestTimeOfDay: 'Night',
    festivalOrEvent: 'Sunburn Festival',
    experienceType: 'Top Night Experiences',
    experienceHighlight: 'Beachfront energy, clean air, and music-driven nightlife.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
  },
  {
    id: 'kerala-sunrise',
    place: 'Kerala',
    bestMonth: 'January',
    bestTimeOfDay: 'Sunrise',
    festivalOrEvent: 'Onam (Seasonal)',
    experienceType: 'Sunrise Highlights',
    experienceHighlight: 'Misty backwaters and slow mornings that reset your mind.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a028?w=1920',
  },
  {
    id: 'paris-photography',
    place: 'Paris',
    bestMonth: 'May',
    bestTimeOfDay: 'Sunrise',
    festivalOrEvent: 'Spring promenades',
    experienceType: 'Photography Spots',
    experienceHighlight: 'Soft light, fewer crowds, and architecture that frames every shot.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920',
  },
  {
    id: 'bali-sunset',
    place: 'Bali',
    bestMonth: 'June',
    bestTimeOfDay: 'Sunset',
    festivalOrEvent: 'Temple ceremonies',
    experienceType: 'Sunset Views',
    experienceHighlight: 'Clifftop horizons with ocean tones that feel infinite.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920',
  },
  {
    id: 'dubai-festival',
    place: 'Dubai',
    bestMonth: 'January',
    bestTimeOfDay: 'Night',
    festivalOrEvent: 'Dubai Shopping Festival',
    experienceType: 'Festival Special Moments',
    experienceHighlight: 'City lights, premium shopping, and curated entertainment.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=1920',
  },
]

const timeOptions = ['All', 'Sunrise', 'Day', 'Sunset', 'Night']

function recommendBlock({ preferences, items }) {
  const style = String(preferences?.travelStyle || '').toLowerCase()
  const time = String(preferences?.preferredTimeOfDay || '').toLowerCase()

  const match = items.find((it) => {
    const a = String(it.experienceType || '').toLowerCase()
    const b = String(it.bestTimeOfDay || '').toLowerCase()
    return (style && a.includes(style)) || (time && b.includes(time))
  })

  if (!match) return null

  return {
    title: 'Perfect Experience For You',
    body: `${match.place} in ${match.bestMonth}, especially at ${match.bestTimeOfDay}. ${match.experienceHighlight}`,
  }
}

function getPrefs() {
  try {
    const raw = localStorage.getItem('ntp_profile_preferences')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export default function BestTime() {
  const [query, setQuery] = useState('')
  const [time, setTime] = useState('All')

  const preferences = useMemo(() => getPrefs(), [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return dataset.filter((d) => {
      const timeOk = time === 'All' ? true : String(d.bestTimeOfDay) === time
      if (!timeOk) return false
      if (!q) return true
      const hay = `${d.place} ${d.bestMonth} ${d.bestTimeOfDay} ${d.festivalOrEvent} ${d.experienceType}`.toLowerCase()
      return hay.includes(q)
    })
  }, [query, time])

  const grouped = useMemo(() => {
    const sections = {
      'Top Night Experiences': [],
      'Sunrise Highlights': [],
      'Sunset Views': [],
      'Romantic Evenings': [],
      'Photography Spots': [],
      'Festival Special Moments': [],
    }

    for (const item of filtered) {
      if (sections[item.experienceType]) sections[item.experienceType].push(item)
    }

    return sections
  }, [filtered])

  const ai = useMemo(() => recommendBlock({ preferences, items: filtered }), [preferences, filtered])

  return (
    <div>
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920"
          alt="Best time"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">Best Time Intelligence</h1>
            <p className="mt-3 text-lg font-medium text-white/80">
              Experience-based guidance that feels personal, precise, and premium.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
          <SearchBar value={query} onChange={setQuery} placeholder="Search experiences, places, festivals…" />

          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
            <div className="flex flex-wrap gap-2">
              {timeOptions.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={`rounded-2xl px-3 py-2 text-xs font-extrabold transition duration-300 ${
                    time === t
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {ai ? (
          <div className="mt-6">
            <Card className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">{ai.title}</p>
              <p className="mt-2 text-lg font-extrabold text-slate-900 dark:text-white">{ai.body}</p>
            </Card>
          </div>
        ) : null}

        <div className="mt-8 space-y-10">
          {Object.entries(grouped).map(([title, items]) => (
            <div key={title}>
              <div className="mb-4 flex items-end justify-between gap-3">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{items.length}</div>
              </div>

              {items.length === 0 ? (
                <p className="text-sm text-slate-600 dark:text-slate-300">No matching experiences.</p>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((it) => (
                    <Card key={it.id} className="overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img src={it.image} alt={it.place} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                          {it.bestTimeOfDay}
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-base font-extrabold text-slate-900 dark:text-white">{it.place}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                          Best month: <span className="font-extrabold">{it.bestMonth}</span>
                        </p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.experienceHighlight}</p>
                        <div className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
                          Festival/Event: <span className="font-extrabold">{it.festivalOrEvent}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
