const budgets = ["low", "medium", "luxury"];
const climates = ["cold", "tropical", "moderate"];
const interests = ["beach", "adventure", "culture", "food"];

function formatLabel(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function RecommendationFilters({ filters, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <select
          value={filters.budget}
          onChange={(event) => onChange("budget", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        >
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              Budget: {formatLabel(budget)}
            </option>
          ))}
        </select>

        <select
          value={filters.climate}
          onChange={(event) => onChange("climate", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        >
          {climates.map((climate) => (
            <option key={climate} value={climate}>
              Climate: {formatLabel(climate)}
            </option>
          ))}
        </select>

        <select
          value={filters.interest}
          onChange={(event) => onChange("interest", event.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        >
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              Interest: {formatLabel(interest)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
