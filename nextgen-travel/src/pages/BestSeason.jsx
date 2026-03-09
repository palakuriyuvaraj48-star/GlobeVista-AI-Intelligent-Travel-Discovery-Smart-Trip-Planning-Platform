import { useMemo, useState } from 'react'
import Card from '../components/Card'

const dataset = [
  {
    id: 'jaipur-winter',
    place: 'Jaipur',
    bestSeason: 'Winter',
    temperatureRange: '10°C – 26°C',
    reason: 'Clear skies, palace light, and comfortable walks through forts without the heat weighing you down.',
    image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=1920',
  },
  {
    id: 'goa-winter',
    place: 'Goa',
    bestSeason: 'Winter',
    temperatureRange: '18°C – 30°C',
    reason: 'Sea breeze, calm waters, and the kind of nightlife that feels curated—not chaotic.',
    image: 'https://images.unsplash.com/photo-1555881404-251498ef9dba?w=1920',
  },
  {
    id: 'kerala-monsoon',
    place: 'Kerala',
    bestSeason: 'Monsoon',
    temperatureRange: '22°C – 29°C',
    reason: 'Lush greens, rain-kissed backwaters, and Ayurveda season—where slow travel becomes healing.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a028?w=1920',
  },
  {
    id: 'himachal-spring',
    place: 'Himachal Pradesh',
    bestSeason: 'Spring',
    temperatureRange: '8°C – 22°C',
    reason: 'Crisp air, clear views, and trail-ready weather—adventure without exhaustion.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920',
  },
  {
    id: 'bali-summer',
    place: 'Bali',
    bestSeason: 'Summer',
    temperatureRange: '24°C – 31°C',
    reason: 'Dry days, golden sunsets, and ocean clarity—perfect for beach rituals and luxury stays.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920',
  },
  {
    id: 'paris-spring',
    place: 'Paris',
    bestSeason: 'Spring',
    temperatureRange: '10°C – 21°C',
    reason: 'Blooming boulevards, softer crowds, and sunlight that makes every street feel cinematic.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920',
  },
]

const seasons = ['Winter', 'Summer', 'Monsoon', 'Spring']

export default function BestSeason() {
  const [selectedSeason, setSelectedSeason] = useState('Winter')

  const items = useMemo(
    () => dataset.filter((d) => d.bestSeason === selectedSeason),
    [selectedSeason]
  )

  const hero = items[0] || dataset[0]

  return (
    <div>
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <img src={hero.image} alt={hero.place} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Seasonal Intelligence</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Best Season</h1>
            <p className="mt-4 text-lg font-medium text-white/80">
              Travel feels different when the weather agrees with your story.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {seasons.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSelectedSeason(s)}
              className={`rounded-2xl px-4 py-2 text-sm font-extrabold transition duration-300 ${
                selectedSeason === s
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((d) => (
            <Card key={d.id} className="overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={d.image} alt={d.place} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                  {d.bestSeason}
                </div>
              </div>
              <div className="p-5">
                <p className="text-base font-extrabold text-slate-900 dark:text-white">{d.place}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Temperature: <span className="font-extrabold">{d.temperatureRange}</span>
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{d.reason}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
