import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function HiddenPlaceCard({ place }) {
  const [wishlisted, setWishlisted] = useState(false);
  const categoryClass = useMemo(() => {
    if (place.category === "Hill") return "bg-cyan-50 text-cyan-700 border-cyan-200";
    if (place.category === "Adventure") return "bg-amber-50 text-amber-700 border-amber-200";
    if (place.category === "Nature") return "bg-emerald-50 text-emerald-700 border-emerald-200";
    return "bg-indigo-50 text-indigo-700 border-indigo-200";
  }, [place.category]);
  const fallbackImage =
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80";

  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img
          src={place.coverImage || place.heroImages?.[0] || fallbackImage}
          alt={place.name}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== fallbackImage) {
              event.currentTarget.src = fallbackImage;
            }
          }}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <button
          type="button"
          onClick={() => setWishlisted((prev) => !prev)}
          className={`absolute right-3 top-3 rounded-full p-2 text-sm transition duration-300 ${
            wishlisted ? "bg-rose-500 text-white" : "bg-white/90 text-slate-700"
          }`}
        >
          {wishlisted ? "\u2665" : "\u2661"}
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-700">
          ⭐ {place.rating}
        </span>
        <span className={`absolute left-3 bottom-3 rounded-full border px-2.5 py-1 text-xs font-semibold ${categoryClass}`}>
          {place.category}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-lg font-bold text-slate-900">{place.name}</h3>
        <p className="text-sm text-slate-500">{"\ud83d\udccd"} {place.location}</p>
        <p className="text-sm text-slate-600">{place.description}</p>
        <p className="text-sm font-semibold text-cyan-700">
          {"\ud83d\udcb0"} Starting {"\u20B9"}
          {(place.startingPrice || 0).toLocaleString("en-IN")}
        </p>
        <p className="text-sm text-slate-600">{"\u23f3"} Best season: {place.bestTime}</p>
        <Link
          to={`/hidden/${encodeURIComponent(place.name)}`}
          className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
        >
          Explore
        </Link>
      </div>
    </article>
  );
}
