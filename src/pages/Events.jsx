import { useEffect, useState } from "react";
import InteractiveMapSection from "../components/InteractiveMapSection";
import { isWishlisted, toggleWishlistItem } from "../utils/wishlistStorage";

const events = [
  {
    id: 1,
    name: "Sunset Beats Festival",
    city: "Goa",
    location: "Goa",
    date: "March 28, 2026",
    type: "Festival",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Royal Courtyard Concert",
    city: "Jaipur",
    location: "Jaipur",
    date: "April 12, 2026",
    type: "Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Kerala Cultural Nights",
    city: "Kochi",
    location: "Kochi",
    date: "May 2, 2026",
    type: "Cultural Event",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Himalayan Folk Gathering",
    city: "Manali",
    location: "Manali",
    date: "May 18, 2026",
    type: "Cultural Event",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200",
    rating: 4.4,
  },
  {
    id: 5,
    name: "City Lights Music Week",
    city: "Mumbai",
    location: "Mumbai",
    date: "June 7, 2026",
    type: "Concert",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Desert Rhythm Carnival",
    city: "Jaisalmer",
    location: "Jaisalmer",
    date: "June 21, 2026",
    type: "Festival",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    rating: 4.6,
  },
];

export default function Events() {
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    setSavedIds(events.filter((event) => isWishlisted(`event-${event.id}`)).map((event) => event.id));
  }, []);

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-fuchsia-600 to-rose-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100">Events</p>
          <h1 className="mt-3 text-4xl font-bold">Concerts, festivals, and local culture in one itinerary</h1>
          <p className="mt-3 max-w-2xl text-rose-100">
            Plan around the experiences that make each city memorable, from live music to destination festivals.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative">
                <img src={event.image} alt={event.name} loading="lazy" className="h-56 w-full object-cover" />
                <button
                  type="button"
                  onClick={() => {
                    const next = toggleWishlistItem({
                      id: `event-${event.id}`,
                      title: event.name,
                      description: `${event.type} in ${event.city} on ${event.date}`,
                      image: event.image,
                      rating: event.rating,
                      category: "Event",
                      location: event.city,
                    });
                    setSavedIds(next.filter((item) => item.category === "Event").map((item) => Number(String(item.id).replace("event-", ""))));
                  }}
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    savedIds.includes(event.id) ? "bg-rose-500 text-white" : "bg-white/90 text-slate-700"
                  }`}
                >
                  {savedIds.includes(event.id) ? "Saved" : "Save"}
                </button>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">{event.type}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-900">{event.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{event.city}</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                    ⭐ {event.rating}
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-600">{event.date}</p>
                <button
                  type="button"
                  className="w-full rounded-lg bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
                >
                  Book
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <InteractiveMapSection
            title="Event Map Explorer"
            description="Browse concerts, festivals, and cultural events with quick location previews."
            items={events}
            previewLabel="Event preview"
          />
        </div>
      </div>
    </section>
  );
}
