import { useEffect, useState } from "react";
import InteractiveMapSection from "../components/InteractiveMapSection";
import { isWishlisted, toggleWishlistItem } from "../utils/wishlistStorage";

const popularPlaces = [
  {
    id: 1,
    name: "Goa Beach Escape",
    city: "Goa",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
  {
    id: 2,
    name: "Udaipur Lake Palace View",
    city: "Udaipur",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200",
  },
  {
    id: 3,
    name: "Munnar Tea Trails",
    city: "Munnar",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  },
  {
    id: 4,
    name: "Jaipur Heritage Walk",
    city: "Jaipur",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
  },
  {
    id: 5,
    name: "Leh Mountain Pass",
    city: "Leh",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
  },
  {
    id: 6,
    name: "Alleppey Backwater Cruise",
    city: "Alleppey",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200",
  },
];

export default function PopularPlaces() {
  const [savedIds, setSavedIds] = useState([]);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    setSavedIds(popularPlaces.filter((place) => isWishlisted(`place-${place.id}`)).map((place) => place.id));
  }, []);

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-sky-600 to-cyan-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">Popular Places</p>
          <h1 className="mt-3 text-4xl font-bold">Top destinations travelers keep saving</h1>
          <p className="mt-3 max-w-2xl text-sky-100">
            Browse beach escapes, mountain retreats, and culture-rich city breaks in one modern discovery feed.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-end">
          <div className="rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "grid" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Grid View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "map" ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        {viewMode === "map" ? (
          <div className="mb-6">
            <InteractiveMapSection
              title="Destination Map Explorer"
              description="Browse saved-worthy destinations on a map and jump back into the destination cards below."
              items={popularPlaces}
              previewLabel="Destination preview"
            />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularPlaces.map((place) => (
            <article
              key={place.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img src={place.image} alt={place.name} loading="lazy" className="h-56 w-full object-cover" />
                <button
                  type="button"
                  onClick={() => {
                    const next = toggleWishlistItem({
                      id: `place-${place.id}`,
                      title: place.name,
                      description: `${place.name} in ${place.city}`,
                      image: place.image,
                      rating: place.rating,
                      category: "Place",
                      location: place.city,
                    });
                    setSavedIds(
                      next
                        .filter((item) => item.category === "Place")
                        .map((item) => Number(String(item.id).replace("place-", "")))
                    );
                  }}
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    savedIds.includes(place.id) ? "bg-rose-500 text-white" : "bg-white/90 text-slate-700"
                  }`}
                >
                  {savedIds.includes(place.id) ? "Saved" : "Save"}
                </button>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{place.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{place.city}</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                    {place.rating}
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Explore
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
