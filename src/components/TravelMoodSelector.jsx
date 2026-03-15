import { useEffect, useState } from 'react'
import { setTravelPersonality, travelPersonalities, getTravelPersonality } from '../ai/AIMoodEngine'

const moodCards = [
  {
    title: 'Relax',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
  },
  {
    title: 'Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
  },
  {
    title: 'Food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200',
  },
  {
    title: 'Nightlife',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
  },
  {
    title: 'Nature',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200',
  },
]

export default function TravelMoodSelector({ mode = 'cards', onSelect }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (mode !== 'modal') return
    if (!getTravelPersonality()) {
      setShowModal(true)
    }
  }, [mode])

  const handleSet = (value) => {
    setTravelPersonality(value)
    if (onSelect) onSelect(value)
    setShowModal(false)
  }

  if (mode === 'modal') {
    if (!showModal) return null
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
        <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
          <h3 className="text-xl font-semibold text-slate-900">What type of traveler are you?</h3>
          <p className="mt-2 text-sm text-slate-600">We’ll personalize recommendations based on your style.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {travelPersonalities.map((personality) => (
              <button
                key={personality}
                type="button"
                onClick={() => handleSet(personality)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {personality}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Travel Mood Selector</h3>
          <p className="text-sm text-slate-600">Select a mood to filter AI recommendations.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {moodCards.map((mood) => (
          <button
            key={mood.title}
            type="button"
            onClick={() => onSelect?.(mood.title)}
            className="group relative h-44 overflow-hidden rounded-2xl"
          >
            <img src={mood.image} alt={mood.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-left text-white">
              <p className="text-lg font-semibold">{mood.title}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
