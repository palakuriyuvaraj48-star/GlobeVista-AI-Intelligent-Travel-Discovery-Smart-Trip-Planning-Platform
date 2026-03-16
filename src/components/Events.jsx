import TravelCard from "./TravelCard";
import { events } from "../data/events";

export default function Events() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Events & Festivals</h2>
          <p className="text-gray-500 mt-2">
            Explore concerts, festivals, and cultural experiences.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          Browse Calendar
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.slice(0, 8).map((event) => (
          <TravelCard
            key={event.id}
            title={event.name}
            image={event.image}
            location={event.location}
            description={event.description}
            category={event.category}
            rating={event.rating}
            price={event.price}
          />
        ))}
      </div>
    </section>
  );
}
