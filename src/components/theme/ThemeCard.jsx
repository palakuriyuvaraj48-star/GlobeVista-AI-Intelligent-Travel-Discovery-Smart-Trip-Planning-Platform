import { Link, useNavigate } from "react-router-dom";

export default function ThemeCard({ theme, onBookPackage }) {
  const navigate = useNavigate();
  const startingFrom = Math.min(...theme.packages.map((pkg) => pkg.basePrice));
  const bestRated = Math.max(...theme.packages.map((pkg) => pkg.rating));
  const shortestDuration = theme.packages.reduce((min, current) =>
    current.durationDays < min.durationDays ? current : min
  );
  const quickDestinations = Array.from(
    new Set(theme.packages.flatMap((pkg) => pkg.destinations))
  ).slice(0, 4);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img
          src={theme.heroImage}
          alt={theme.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{theme.name}</h3>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
            {bestRated.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <p className="text-sm text-slate-600">{theme.description}</p>
        <div className="flex flex-wrap gap-2">
          {quickDestinations.map((destination) => (
            <button
              key={destination}
              type="button"
              onClick={() => navigate(`/destination/${encodeURIComponent(destination)}`)}
              className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 transition duration-300 hover:bg-cyan-100"
            >
              {destination}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
          <div>
            <p className="text-xs text-slate-500">Starting From</p>
            <p className="text-base font-bold text-slate-900">
              {"\u20B9"}
              {startingFrom.toLocaleString("en-IN")}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Package Duration</p>
            <p className="text-sm font-semibold text-slate-800">{shortestDuration.duration}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onBookPackage(theme.packages[0])}
            className="flex-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
          >
            Book Package
          </button>
          <Link
            to={`/theme/${encodeURIComponent(theme.name)}`}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-50"
          >
            View Packages
          </Link>
        </div>
      </div>
    </article>
  );
}
