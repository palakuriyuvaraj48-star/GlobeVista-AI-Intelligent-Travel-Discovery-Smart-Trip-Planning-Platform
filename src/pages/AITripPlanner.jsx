import { useMemo, useState } from "react";
import TripTimelineBuilder from "../components/TripTimelineBuilder";
import { generateTripPlan, getDestinationRecommendations } from "../utils/aiTravel";

const interestOptions = ["nature", "food", "adventure", "culture"];

export default function AITripPlanner() {
  const [form, setForm] = useState({
    destination: "Goa",
    days: 5,
    budget: 50000,
    interests: ["nature", "food"],
    travelType: "couple",
  });
  const [recommendationFilters, setRecommendationFilters] = useState({
    budget: "medium",
    climate: "warm",
    interest: "nature",
  });
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const itinerary = useMemo(() => generateTripPlan(form), [form]);
  const recommendations = useMemo(
    () =>
      getDestinationRecommendations({
        budget: recommendationFilters.budget,
        climate: recommendationFilters.climate,
        interests: [recommendationFilters.interest],
      }),
    [recommendationFilters]
  );

  const toggleInterest = (interest) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated(true);
      setLoading(false);
    }, 700);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">AI Trip Planner</p>
          <h1 className="mt-3 text-4xl font-bold">Build a smart travel itinerary in seconds</h1>
          <p className="mt-3 max-w-2xl text-cyan-100">
            Turn a destination, budget, and travel style into a structured day-by-day plan.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-slate-900">Trip Request</h2>
            <p className="mt-1 text-sm text-slate-600">Example: Plan a 5 day trip to Goa under Rs 50,000</p>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                value={form.destination}
                onChange={(event) => setForm((current) => ({ ...current, destination: event.target.value }))}
                placeholder="Destination"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="number"
                  min={1}
                  value={form.days}
                  onChange={(event) => setForm((current) => ({ ...current, days: Number(event.target.value) || 1 }))}
                  placeholder="Number of days"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
                />
                <input
                  type="number"
                  min={1000}
                  value={form.budget}
                  onChange={(event) => setForm((current) => ({ ...current, budget: Number(event.target.value) || 0 }))}
                  placeholder="Budget"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
                />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-800">Travel interests</p>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        form.interests.includes(interest)
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              <select
                value={form.travelType}
                onChange={(event) => setForm((current) => ({ ...current, travelType: event.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
              >
                <option value="solo">Solo</option>
                <option value="couple">Couple</option>
                <option value="family">Family</option>
              </select>
              <button
                type="button"
                onClick={generate}
                className="w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Generate Trip Plan
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-slate-900">Smart Itinerary Timeline</h2>
            {!generated && !loading ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
                Fill the planner and generate a trip to view a timeline.
              </div>
            ) : null}
            {loading ? (
              <div className="mt-6 space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="animate-pulse rounded-2xl bg-slate-100 p-5">
                    <div className="h-4 w-24 rounded bg-slate-200" />
                    <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                    <div className="mt-2 h-3 w-2/3 rounded bg-slate-200" />
                  </div>
                ))}
              </div>
            ) : null}
            {generated ? (
              <div className="mt-6 space-y-5">
                {itinerary.map((day) => (
                  <div key={day.day} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="absolute left-6 top-6 h-full w-px bg-slate-200" />
                    <div className="relative flex gap-4">
                      <div className="relative z-10 mt-1 h-4 w-4 rounded-full bg-indigo-600" />
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">{day.day}</p>
                        <h3 className="mt-1 text-xl font-semibold text-slate-900">{day.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{day.summary}</p>
                        <ul className="mt-4 space-y-2 text-sm text-slate-600">
                          {day.activities.map((activity) => (
                            <li key={`${day.day}-${activity}`}>- {activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Recommended Destinations</h2>
              <p className="mt-1 text-sm text-slate-600">
                Match destinations by budget, climate, and travel interest.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <select
                value={recommendationFilters.budget}
                onChange={(event) =>
                  setRecommendationFilters((current) => ({ ...current, budget: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-200"
              >
                <option value="low">Budget: Low</option>
                <option value="medium">Budget: Medium</option>
                <option value="luxury">Budget: Luxury</option>
              </select>
              <select
                value={recommendationFilters.climate}
                onChange={(event) =>
                  setRecommendationFilters((current) => ({ ...current, climate: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-200"
              >
                <option value="warm">Climate: Warm</option>
                <option value="cool">Climate: Cool</option>
                <option value="tropical">Climate: Tropical</option>
              </select>
              <select
                value={recommendationFilters.interest}
                onChange={(event) =>
                  setRecommendationFilters((current) => ({ ...current, interest: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-200"
              >
                {interestOptions.map((interest) => (
                  <option key={interest} value={interest}>
                    Interest: {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {recommendations.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img src={item.image} alt={item.name} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {item.rating}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                  <button
                    type="button"
                    onClick={() => setForm((current) => ({ ...current, destination: item.name }))}
                    className="mt-4 w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                  >
                    Use Destination
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <TripTimelineBuilder />
      </div>
    </section>
  );
}
