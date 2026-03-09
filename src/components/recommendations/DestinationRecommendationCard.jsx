import { useNavigate } from "react-router-dom";

export default function DestinationRecommendationCard({ destination }) {
  const navigate = useNavigate();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{destination.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{destination.country}</p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            {destination.rating}
          </span>
        </div>
        <p className="text-sm text-slate-600">{destination.description}</p>
        <button
          type="button"
          onClick={() => navigate("/places")}
          className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-700"
        >
          Explore
        </button>
      </div>
    </article>
  );
}
