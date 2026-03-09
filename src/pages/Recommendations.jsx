import { useMemo, useState } from "react";
import DestinationRecommendationCard from "../components/recommendations/DestinationRecommendationCard";
import RecommendationFilters from "../components/recommendations/RecommendationFilters";
import { getDestinationRecommendations } from "../utils/aiTravel";

export default function Recommendations() {
  const [filters, setFilters] = useState({
    budget: "medium",
    climate: "tropical",
    interest: "beach",
  });

  const recommendations = useMemo(
    () =>
      getDestinationRecommendations({
        budget: filters.budget,
        climate: filters.climate,
        interest: filters.interest,
      }),
    [filters]
  );

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">Recommendations</p>
          <h1 className="mt-3 text-4xl font-bold">Recommended Destinations</h1>
          <p className="mt-3 max-w-2xl text-emerald-100">
            Filter destinations by budget, climate, and travel interest to find your next trip.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <RecommendationFilters filters={filters} onChange={handleFilterChange} />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recommendations.map((destination) => (
            <DestinationRecommendationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
