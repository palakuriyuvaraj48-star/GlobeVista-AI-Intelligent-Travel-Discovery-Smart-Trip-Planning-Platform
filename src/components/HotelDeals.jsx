import TravelCard from "./TravelCard";
import { hotels } from "../data/hotels";

export default function HotelDeals() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Hotel Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.slice(0, 12).map((hotel) => (
          <TravelCard
            key={hotel.id}
            title={hotel.name}
            image={hotel.image}
            location={hotel.city}
            description={hotel.description}
            category="Hotel"
            price={hotel.price}
            rating={hotel.rating}
          />
        ))}
      </div>
    </section>
  );
}
