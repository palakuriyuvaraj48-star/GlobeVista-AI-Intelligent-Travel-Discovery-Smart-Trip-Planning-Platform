import TravelCard from "./TravelCard";
import { destinations } from "../data/destinations";

export default function PopularDestinations() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.slice(0, 12).map((place) => (
          <TravelCard
            key={place.id}
            title={place.name || place.city}
            image={place.image}
            subtitle={place.country}
            rating={place.rating}
          />
        ))}
      </div>
    </section>
  );
}