import { useMemo, useState } from 'react'
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

const travelStyles = ['Relax', 'Adventure', 'Food', 'Nightlife', 'Nature']

const destinationProfiles = {
  Bali: {
    center: [-8.4095, 115.1889],
    highlights: ['Best sunset spot', 'Top local restaurant', 'Hidden jungle waterfall'],
    heroImage: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200',
    activities: [
      {
        title: 'Arrival and beach unwind',
        location: 'Seminyak Beach',
        description: 'Settle in with a sunset walk and a light seafood dinner by the shore.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
      },
      {
        title: 'Temple trails and markets',
        location: 'Uluwatu',
        description: 'Visit cliffside temples, then browse artisan markets and local crafts.',
        image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200',
      },
      {
        title: 'Waterfalls and adventure',
        location: 'Tegenungan',
        description: 'Ride through lush valleys and chase waterfalls with a local guide.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
      },
      {
        title: 'Night markets and culture',
        location: 'Ubud',
        description: 'Enjoy live music, street food, and a curated cultural performance.',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200',
      },
      {
        title: 'Shopping and departure',
        location: 'Kuta',
        description: 'Pick up souvenirs on the shopping street before heading to the airport.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      },
    ],
    hotels: [
      { name: 'Taj Exotica Resort', latitude: -8.7996, longitude: 115.1972 },
      { name: 'The Mulia Bali', latitude: -8.8001, longitude: 115.2284 },
      { name: 'Alila Seminyak', latitude: -8.6732, longitude: 115.1516 },
    ],
    restaurants: [
      { name: 'Merah Putih', latitude: -8.6797, longitude: 115.1493 },
      { name: 'Locavore', latitude: -8.5068, longitude: 115.2625 },
      { name: 'Sardine', latitude: -8.6656, longitude: 115.1526 },
    ],
    attractions: [
      { name: 'Uluwatu Temple', latitude: -8.8292, longitude: 115.0849 },
      { name: 'Tegalalang Rice Terrace', latitude: -8.4313, longitude: 115.2796 },
      { name: 'Ubud Monkey Forest', latitude: -8.5193, longitude: 115.2589 },
    ],
    events: [
      { name: 'Legian Beach Club Night', latitude: -8.7127, longitude: 115.1675 },
      { name: 'Ubud Cultural Show', latitude: -8.5069, longitude: 115.2626 },
      { name: 'Seminyak Sunset DJ', latitude: -8.6914, longitude: 115.1572 },
    ],
  },
  Paris: {
    center: [48.8566, 2.3522],
    highlights: ['River cruise sunset', 'Classic bistro menu', 'Hidden art passage'],
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
    activities: [
      {
        title: 'Arrival and Seine stroll',
        location: 'Saint-Germain',
        description: 'Check in and enjoy a leisurely walk along the Seine with cafe stops.',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200',
      },
      {
        title: 'Museum and landmark day',
        location: 'Louvre District',
        description: 'Visit iconic museums and take in the city skyline from a scenic viewpoint.',
        image: 'https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=1200',
      },
      {
        title: 'Market discovery',
        location: 'Le Marais',
        description: 'Shop local markets and taste gourmet treats with a culinary guide.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200',
      },
      {
        title: 'Evening show',
        location: 'Montmartre',
        description: 'Catch live music and enjoy a rooftop dinner with city views.',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200',
      },
      {
        title: 'Shopping and departure',
        location: 'Champs-Elysees',
        description: 'Pick up souvenirs and relax at a final cafe before departure.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200',
      },
    ],
    hotels: [
      { name: 'Le Meurice', latitude: 48.8656, longitude: 2.3285 },
      { name: 'Hotel Lutetia', latitude: 48.8519, longitude: 2.3257 },
      { name: 'Shangri-La Paris', latitude: 48.8635, longitude: 2.2915 },
    ],
    restaurants: [
      { name: 'Le Jules Verne', latitude: 48.8584, longitude: 2.2945 },
      { name: 'Septime', latitude: 48.8535, longitude: 2.3809 },
      { name: 'Le Chateaubriand', latitude: 48.8642, longitude: 2.3767 },
    ],
    attractions: [
      { name: 'Eiffel Tower', latitude: 48.8584, longitude: 2.2945 },
      { name: 'Louvre Museum', latitude: 48.8606, longitude: 2.3376 },
      { name: 'Montmartre', latitude: 48.8867, longitude: 2.3431 },
    ],
    events: [
      { name: 'Seine River Cruise', latitude: 48.8583, longitude: 2.3008 },
      { name: 'Moulin Rouge Show', latitude: 48.8841, longitude: 2.3325 },
      { name: 'Paris Jazz Night', latitude: 48.8569, longitude: 2.3522 },
    ],
  },
  Tokyo: {
    center: [35.6762, 139.6503],
    highlights: ['Skyline viewing deck', 'Michelin ramen stop', 'Hidden shrine visit'],
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200',
    activities: [
      {
        title: 'Arrival and neon city walk',
        location: 'Shinjuku',
        description: 'Check in, then explore lively streets and rooftop views.',
        image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200',
      },
      {
        title: 'Cultural highlights',
        location: 'Asakusa',
        description: 'Visit historic temples and sample street food favorites.',
        image: 'https://images.unsplash.com/photo-1479812627010-aa5bd9d173b1?w=1200',
      },
      {
        title: 'Food discovery',
        location: 'Tsukiji',
        description: 'Join a curated food trail with sushi and seasonal snacks.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
      },
      {
        title: 'Nightlife and skyline',
        location: 'Shibuya',
        description: 'See the famous crossing and unwind with live music.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      },
      {
        title: 'Shopping and departure',
        location: 'Ginza',
        description: 'Pick up souvenirs and enjoy a final cafe before departure.',
        image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1200',
      },
    ],
    hotels: [
      { name: 'Park Hyatt Tokyo', latitude: 35.6852, longitude: 139.6917 },
      { name: 'Aman Tokyo', latitude: 35.6841, longitude: 139.7708 },
      { name: 'The Peninsula Tokyo', latitude: 35.6752, longitude: 139.7638 },
    ],
    restaurants: [
      { name: 'Sushi Dai', latitude: 35.6655, longitude: 139.7708 },
      { name: 'Ichiran Ramen', latitude: 35.6594, longitude: 139.7006 },
      { name: 'Narisawa', latitude: 35.6683, longitude: 139.728 },
    ],
    attractions: [
      { name: 'Senso-ji Temple', latitude: 35.7148, longitude: 139.7967 },
      { name: 'Meiji Shrine', latitude: 35.6764, longitude: 139.6993 },
      { name: 'Tokyo Skytree', latitude: 35.7101, longitude: 139.8107 },
    ],
    events: [
      { name: 'Shibuya Night Walk', latitude: 35.6595, longitude: 139.7005 },
      { name: 'Roppongi Jazz Session', latitude: 35.6626, longitude: 139.731 },
      { name: 'TeamLab Planets', latitude: 35.6492, longitude: 139.7894 },
    ],
  },
}

const emptyPlan = {
  destination: '',
  days: 0,
  budget: 0,
  travelStyle: 'Relax',
  itinerary: [],
  costs: [],
  mapStops: [],
  highlights: [],
}

const createDayIcon = (day) =>
  L.divIcon({
    className: 'ai-day-marker',
    html: `<div style="background:#7c3aed;color:#fff;border-radius:999px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;border:2px solid #fff;box-shadow:0 8px 18px rgba(0,0,0,0.18)">${day}</div>`,
  })

const formatCurrency = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`

const clampDays = (value) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return 4
  return Math.min(10, Math.max(1, Math.round(parsed)))
}

const buildItinerary = ({ destination, days, travelStyle, budget }) => {
  const profile = destinationProfiles[destination] || destinationProfiles.Bali
  const itinerary = Array.from({ length: days }, (_, index) => {
    const activity = profile.activities[index % profile.activities.length]
    const hotel = profile.hotels[index % profile.hotels.length]
    const restaurant = profile.restaurants[index % profile.restaurants.length]
    const attraction = profile.attractions[index % profile.attractions.length]
    const event = profile.events[index % profile.events.length]

    return {
      day: index + 1,
      title: activity.title,
      location: activity.location,
      description: activity.description,
      image: activity.image,
      travelStyle,
      activities: [
        'Arrival and check-in',
        `Explore ${activity.location}`,
        travelStyle === 'Food' ? 'Curated food tasting' : 'Local discovery time',
        travelStyle === 'Nightlife' ? 'Evening experience' : 'Sunset viewpoint',
      ],
      cards: {
        hotel,
        restaurant,
        attraction,
        event,
      },
    }
  })

  const totalBudget = Number(budget) || days * 8000
  const costs = [
    { label: 'Hotel', value: totalBudget * 0.55 },
    { label: 'Food', value: totalBudget * 0.2 },
    { label: 'Transport', value: totalBudget * 0.12 },
    { label: 'Activities', value: totalBudget * 0.13 },
  ]

  const mapStops = itinerary.flatMap((day) => [
    { day: day.day, label: day.cards.hotel.name, ...day.cards.hotel },
    { day: day.day, label: day.cards.attraction.name, ...day.cards.attraction },
    { day: day.day, label: day.cards.restaurant.name, ...day.cards.restaurant },
    { day: day.day, label: day.cards.event.name, ...day.cards.event },
  ])

  return {
    destination,
    days,
    budget: totalBudget,
    travelStyle,
    itinerary,
    costs,
    mapStops,
    highlights: profile.highlights,
    center: profile.center,
    heroImage: profile.heroImage,
  }
}

export default function AITripAutopilot() {
  const [form, setForm] = useState({
    destination: 'Bali',
    days: 4,
    budget: 40000,
    travelStyle: 'Relax',
  })
  const [plan, setPlan] = useState(emptyPlan)
  const [generated, setGenerated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = (event) => {
    event.preventDefault()
    const nextPlan = buildItinerary({
      destination: form.destination.trim() || 'Bali',
      days: clampDays(form.days),
      budget: form.budget,
      travelStyle: form.travelStyle,
    })
    setPlan(nextPlan)
    setGenerated(true)
    localStorage.setItem('aiTripAutopilot', JSON.stringify(nextPlan))
  }

  const mapPositions = useMemo(() => plan.mapStops.map((stop) => [stop.latitude, stop.longitude]), [plan.mapStops])

  const totalCost = plan.costs.reduce((sum, item) => sum + item.value, 0)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">AI Trip Autopilot</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Plan an entire trip in seconds</h1>
            <p className="mt-2 text-base text-slate-600">
              Tell us the destination, budget, and vibe. Autopilot builds your itinerary, route, and costs like a smart AI
              travel agent.
            </p>

            <form onSubmit={handleGenerate} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">
                  Destination
                  <input
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    placeholder="Bali"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Trip Days
                  <input
                    name="days"
                    type="number"
                    min="1"
                    max="10"
                    value={form.days}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">
                  Budget
                  <input
                    name="budget"
                    type="number"
                    value={form.budget}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Travel Style
                  <select
                    name="travelStyle"
                    value={form.travelStyle}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-purple-500 focus:outline-none"
                  >
                    {travelStyles.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:shadow-2xl"
              >
                Generate Smart Trip
              </button>
            </form>
          </div>

          {generated ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Trip Summary</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {plan.destination} • {plan.days} Days • Estimated Budget {formatCurrency(plan.budget)}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                >
                  Download Trip Plan
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {plan.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <div className="h-[320px] bg-slate-100">
              <MapContainer
                center={plan.center || destinationProfiles.Bali.center}
                zoom={plan.center ? 10 : 4}
                scrollWheelZoom
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                  {plan.mapStops.map((stop, index) => (
                    <Marker
                      key={`${stop.label}-${index}`}
                      position={[stop.latitude, stop.longitude]}
                      icon={createDayIcon(stop.day)}
                    >
                      <Popup>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-900">Day {stop.day}</p>
                          <p className="text-xs text-slate-500">{stop.label}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
                {mapPositions.length > 1 ? <Polyline positions={mapPositions} color="#7c3aed" weight={3} /> : null}
              </MapContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">Cost Estimation</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {plan.costs.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{formatCurrency(item.value)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Total Estimated Cost</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{formatCurrency(totalCost)}</p>
            </div>
          </div>
        </div>
      </div>

      {generated ? (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-900">Autopilot Timeline</h2>
          <p className="mt-2 text-base text-slate-600">A day-by-day timeline with hotels, restaurants, events, and attractions.</p>

          <div className="relative mt-8 space-y-8">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/40 via-blue-500/40 to-transparent" />
            {plan.itinerary.map((day) => (
              <div key={day.day} className="relative flex gap-6">
                <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white shadow-lg">
                  {day.day}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{day.title}</h3>
                      <p className="text-sm text-slate-500">{day.location}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {day.travelStyle} Focus
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{day.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {day.activities.map((activity) => (
                      <span key={activity} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {activity}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {[
                      { label: 'Hotel', value: day.cards.hotel.name },
                      { label: 'Restaurant', value: day.cards.restaurant.name },
                      { label: 'Attraction', value: day.cards.attraction.name },
                      { label: 'Event', value: day.cards.event.name },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
