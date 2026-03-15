import { destinations } from "../data/destinations";
import TravelCard from "./TravelCard";

export default function PopularPlaces() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Popular Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.slice(0, 8).map((place) => (
          <TravelCard
            key={place.id}
            title={place.name}
            image={place.image}
            description={place.description}
            rating={place.rating}
            location={place.country}
          />
        ))}
      </div>
    </section>
  );
}
