import TravelCard from "./TravelCard";
import { destinations } from "../data/destinations";
import { useNavigate } from "react-router-dom";

export default function PopularDestinations() {
  const navigate = useNavigate();

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
            onClick={() => navigate(`/destination/${(place.name || place.city).toLowerCase().replace(/\s+/g, '-')}`)}
          />
        ))}
      </div>
    </section>
  );
}