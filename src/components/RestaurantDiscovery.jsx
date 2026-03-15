import TravelCard from "./TravelCard";
import { restaurants } from "../data/restaurants";

export default function RestaurantDiscovery() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Restaurant Discovery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.slice(0, 12).map((rest) => (
          <TravelCard
            key={rest.id}
            title={rest.name}
            image={rest.image}
            subtitle={rest.city + " • " + rest.cuisine}
            rating={rest.rating}
          />
        ))}
      </div>
    </section>
  );
}