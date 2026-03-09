import { useMemo, useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const dataset = [
  {
    id: 'jaipur-palace-winter',
    place: 'Jaipur',
    type: 'Palace',
    season: 'Winter',
    recommendedDress: 'Elegant formal layers, closed shoes, and a light stole for evening palace air.',
    image: 'https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=1920',
    description: 'Palace halls reward refined choices. Dress with quiet confidence, not noise.',
  },
  {
    id: 'varanasi-temple-summer',
    place: 'Varanasi',
    type: 'Temple',
    season: 'Summer',
    recommendedDress: 'Traditional modest clothing, breathable fabric, and a scarf for respectful coverage.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1920',
    description: 'In sacred spaces, the right dress is part of the ritual—simple, respectful, intentional.',
  },
  {
    id: 'goa-beach-summer',
    place: 'Goa',
    type: 'Beach',
    season: 'Summer',
    recommendedDress: 'Premium summer wear, comfortable sandals, and a cover-up for cafes and markets.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
    description: 'Travel light, look polished. Beach days can still feel premium with the right essentials.',
  },
  {
    id: 'himachal-trekking-winter',
    place: 'Himachal Pradesh',
    type: 'Trekking',
    season: 'Winter',
    recommendedDress: 'Insulated jackets, thermal base layer, trekking shoes, and wind protection.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920',
    description: 'Winter trails demand performance. Warmth is safety; grip is confidence.',
  },
  {
    id: 'mumbai-nightlife-monsoon',
    place: 'Mumbai',
    type: 'Nightlife',
    season: 'Monsoon',
    recommendedDress: 'Smart casual with water-resistant outerwear and minimal accessories.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1920',
    description: 'Nightlife is energy. Your outfit should feel effortless, sharp, and rain-ready.',
  },
  {
    id: 'jaipur-festival-spring',
    place: 'Jaipur',
    type: 'Festival',
    season: 'Spring',
    recommendedDress: 'Cultural attire with comfortable footwear and subtle statement pieces.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920',
    description: 'Festivals are color and heritage. Dress to belong—without sacrificing comfort.',
  },
]

function inferRecommended(type, season) {
  const t = String(type || '').toLowerCase()
  const s = String(season || '').toLowerCase()

  if (t.includes('temple')) return 'Traditional modest attire, covered shoulders/knees, and easy-to-remove footwear.'
  if (t.includes('beach')) return 'Premium summer wear and a cover-up for common areas.'
  if (s.includes('winter')) return 'Warm layers, jackets, and closed shoes.'
  if (t.includes('festival')) return 'Cultural dress with comfortable footwear.'
  if (t.includes('nightlife')) return 'Smart casual with polished, minimal accessories.'
  if (t.includes('palace')) return 'Elegant formal outfits, refined colors, and comfortable walking shoes.'
  if (t.includes('trekking')) return 'Sportswear, performance layers, and trekking shoes.'
  return 'Comfort-first premium basics with respectful coverage.'
}

export default function DressCode() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return dataset
    return dataset.filter((d) => `${d.place} ${d.type} ${d.season}`.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920"
          alt="Dress code"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Intelligent Dress Code</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">Dress Code</h1>
            <p className="mt-4 text-lg font-medium text-white/80">
              Dress like you belong. Feel comfortable. Look premium.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by place, type, or season…" />
          <Card className="p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Logic snapshot</p>
            <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Temple → Traditional · Beach → Summer wear · Winter → Jackets · Festival → Cultural · Nightlife → Smart casual · Palace → Elegant formal · Trekking → Sportswear
            </p>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => {
            const fallback = inferRecommended(d.type, d.season)
            const dress = d.recommendedDress || fallback

            return (
              <Card key={d.id} className="overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={d.image} alt={d.place} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">{d.type}</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">{d.season}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">{d.place}</p>
                  <p className="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300">{dress}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{d.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
