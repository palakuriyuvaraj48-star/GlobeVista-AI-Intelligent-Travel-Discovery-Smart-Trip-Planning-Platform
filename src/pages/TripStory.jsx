import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const fallbackTrip = {
  destination: 'Bali',
  days: 5,
  budget: 45000,
  travelStyle: 'Relax',
  highlights: ['Best sunset spot', 'Top local restaurant', 'Hidden gem attraction'],
  story:
    'Your journey begins in Bali with a relaxing sunset at Seminyak Beach. The next morning you explore ancient temples surrounded by lush jungles. On day three you discover vibrant food markets and enjoy local Balinese cuisine. Day four brings adventure at a hidden waterfall, and the final day is perfect for shopping and a calm departure.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival and hotel check-in',
      location: 'Seminyak Beach',
      description: 'Settle into your resort and enjoy a golden sunset by the shore.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      cards: {
        hotel: { name: 'Taj Exotica Resort', latitude: -8.7996, longitude: 115.1972 },
        attraction: { name: 'Seminyak Beach', latitude: -8.6892, longitude: 115.1684 },
        restaurant: { name: 'Merah Putih', latitude: -8.6797, longitude: 115.1493 },
        event: { name: 'Seminyak Sunset DJ', latitude: -8.6914, longitude: 115.1572 },
      },
    },
    {
      day: 2,
      title: 'Explore attractions',
      location: 'Uluwatu',
      description: 'Visit cliffside temples and coastal viewpoints.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200',
      cards: {
        hotel: { name: 'The Mulia Bali', latitude: -8.8001, longitude: 115.2284 },
        attraction: { name: 'Uluwatu Temple', latitude: -8.8292, longitude: 115.0849 },
        restaurant: { name: 'Sardine', latitude: -8.6656, longitude: 115.1526 },
        event: { name: 'Legian Beach Club Night', latitude: -8.7127, longitude: 115.1675 },
      },
    },
    {
      day: 3,
      title: 'Food discovery and markets',
      location: 'Ubud',
      description: 'Enjoy local markets, food tastings, and artisan crafts.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      cards: {
        hotel: { name: 'Alila Seminyak', latitude: -8.6732, longitude: 115.1516 },
        attraction: { name: 'Ubud Monkey Forest', latitude: -8.5193, longitude: 115.2589 },
        restaurant: { name: 'Locavore', latitude: -8.5068, longitude: 115.2625 },
        event: { name: 'Ubud Cultural Show', latitude: -8.5069, longitude: 115.2626 },
      },
    },
    {
      day: 4,
      title: 'Adventure activities',
      location: 'Tegenungan',
      description: 'Chase waterfalls and take in jungle viewpoints.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
      cards: {
        hotel: { name: 'The Mulia Bali', latitude: -8.8001, longitude: 115.2284 },
        attraction: { name: 'Tegenungan Waterfall', latitude: -8.5067, longitude: 115.2887 },
        restaurant: { name: 'Merah Putih', latitude: -8.6797, longitude: 115.1493 },
        event: { name: 'Seminyak Sunset DJ', latitude: -8.6914, longitude: 115.1572 },
      },
    },
    {
      day: 5,
      title: 'Shopping and departure',
      location: 'Kuta',
      description: 'Pick up gifts and relax before your flight.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      cards: {
        hotel: { name: 'Taj Exotica Resort', latitude: -8.7996, longitude: 115.1972 },
        attraction: { name: 'Kuta Shopping Street', latitude: -8.7207, longitude: 115.1694 },
        restaurant: { name: 'Sardine', latitude: -8.6656, longitude: 115.1526 },
        event: { name: 'Legian Beach Club Night', latitude: -8.7127, longitude: 115.1675 },
      },
    },
  ],
}

const createDayIcon = (day) =>
  L.divIcon({
    className: 'ai-day-marker',
    html: `<div style="background:#2563eb;color:#fff;border-radius:999px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;border:2px solid #fff;box-shadow:0 8px 18px rgba(0,0,0,0.18)">${day}</div>`,
  })

const formatCurrency = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`

function Reveal({ children, className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

const generateStory = (itinerary, destination) => {
  if (!itinerary.length) return `Your journey through ${destination} is ready to unfold.`
  const first = itinerary[0]
  const second = itinerary[1]
  const third = itinerary[2]
  const finalDay = itinerary[itinerary.length - 1]

  return [
    `Your journey begins in ${destination} with ${first.title.toLowerCase()} at ${first.location}.`,
    second ? `The next day brings ${second.title.toLowerCase()}, highlighting ${second.location}.` : null,
    third ? `Midway through, you experience ${third.title.toLowerCase()} in ${third.location}.` : null,
    finalDay ? `You wrap up with ${finalDay.title.toLowerCase()} before departure.` : null,
  ]
    .filter(Boolean)
    .join(' ')
}

export default function TripStory() {
  const [trip, setTrip] = useState(fallbackTrip)
  const [shareMessage, setShareMessage] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('aiTripAutopilot')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed && Array.isArray(parsed.itinerary) && parsed.itinerary.length) {
          setTrip((prev) => ({ ...prev, ...parsed }))
        }
      } catch (error) {
        setTrip(fallbackTrip)
      }
    }
  }, [])

  const mapStops = useMemo(
    () =>
      trip.itinerary.flatMap((day) => [
        { day: day.day, label: day.cards.hotel.name, ...day.cards.hotel },
        { day: day.day, label: day.cards.attraction.name, ...day.cards.attraction },
        { day: day.day, label: day.cards.restaurant.name, ...day.cards.restaurant },
        { day: day.day, label: day.cards.event.name, ...day.cards.event },
      ]),
    [trip.itinerary]
  )

  const mapPositions = mapStops.map((stop) => [stop.latitude, stop.longitude])
  const storyText = trip.story || generateStory(trip.itinerary, trip.destination)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareMessage('Link copied to clipboard')
    } catch (error) {
      setShareMessage('Copy failed. Please try again.')
    }
    setTimeout(() => setShareMessage(''), 2500)
  }

  const handleShare = (target) => {
    const message = encodeURIComponent(`Check out my ${trip.destination} trip story on GlobeVista AI.`)
    if (target === 'whatsapp') {
      window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener')
    } else if (target === 'instagram') {
      window.open('https://www.instagram.com/', '_blank', 'noopener')
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">Trip Story</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{trip.destination} Journey</h1>
            <p className="mt-2 text-sm text-slate-600">
              Destination: {trip.destination} • Duration: {trip.days} Days • Estimated Budget {formatCurrency(trip.budget)}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
              Download Trip Plan
            </button>
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              Save Trip
            </button>
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              Share Trip
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {trip.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
              {highlight}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">AI Travel Timeline</h2>
          <p className="mt-2 text-base text-slate-600">Watch each day of your journey unfold with visual highlights.</p>

          <div className="relative mt-8 space-y-10">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500/40 via-blue-500/40 to-transparent" />
            {trip.itinerary.map((day, index) => {
              const isLeft = index % 2 === 0
              return (
                <Reveal
                  key={day.day}
                  className={`relative grid items-center gap-8 md:grid-cols-2 ${isLeft ? '' : 'md:text-right'}`}
                >
                  <div className={isLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                    <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:shadow-2xl">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Day {day.day}</p>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {day.location}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-slate-900">{day.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{day.description}</p>
                    </div>
                  </div>
                  <div className={isLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img src={day.image} alt={day.title} className="h-52 w-full object-cover" />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <div className="space-y-6">
          <Reveal className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <div className="h-[360px]">
              <MapContainer
                center={mapPositions.length ? mapPositions[0] : [fallbackTrip.itinerary[0].cards.hotel.latitude, fallbackTrip.itinerary[0].cards.hotel.longitude]}
                zoom={10}
                scrollWheelZoom
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                  {mapStops.map((stop, index) => (
                    <Marker
                      key={`${stop.label}-${index}`}
                      position={[stop.latitude, stop.longitude]}
                      icon={createDayIcon(stop.day)}
                    >
                      <Popup>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-900">Day {stop.day}</p>
                          <p className="text-xs text-slate-500">Visit {stop.label}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
                {mapPositions.length > 1 ? <Polyline positions={mapPositions} color="#2563eb" weight={3} /> : null}
              </MapContainer>
            </div>
          </Reveal>

          <Reveal className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white shadow-xl">
            <h3 className="text-xl font-semibold">Your Travel Story</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/90">{storyText}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Photo Story Gallery</h2>
              <p className="mt-2 text-sm text-slate-600">A visual recap of each day.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopyLink}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Copy Link
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Share to WhatsApp
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Share to Instagram
              </button>
            </div>
          </div>
          {shareMessage ? <p className="mt-3 text-sm text-purple-600">{shareMessage}</p> : null}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trip.itinerary.map((day) => (
              <div key={day.day} className="group overflow-hidden rounded-xl">
                <img
                  src={day.image}
                  alt={`Day ${day.day} ${day.title}`}
                  className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
