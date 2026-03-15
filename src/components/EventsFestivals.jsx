import TravelCard from "./TravelCard";
import { events } from "../data/events";

export default function EventsFestivals() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Events & Festivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.slice(0, 12).map((event) => (
          <TravelCard
            key={event.id}
            title={event.name}
            image={event.image}
            subtitle={event.location}
            rating={event.rating}
          />
        ))}
      </div>
    </section>
  );
}