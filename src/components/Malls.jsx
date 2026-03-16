import TravelCard from "./TravelCard";

const malls = [
  {
    id: 1,
    name: "Dubai Mall",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    location: "Dubai, UAE",
    rating: 4.9,
    price: 0,
    description: "Luxury boutiques, aquarium, and sky views.",
  },
  {
    id: 2,
    name: "Mall of America",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
    location: "Minnesota, USA",
    rating: 4.7,
    price: 0,
    description: "Massive indoor retail with theme park rides.",
  },
  {
    id: 3,
    name: "Westfield London",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    location: "London, UK",
    rating: 4.6,
    price: 0,
    description: "Designer brands and gourmet dining hall.",
  },
  {
    id: 4,
    name: "ION Orchard",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    location: "Singapore",
    rating: 4.7,
    price: 0,
    description: "Luxury fashion with panoramic city decks.",
  },
  {
    id: 5,
    name: "SM Megamall",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    location: "Manila, Philippines",
    rating: 4.5,
    price: 0,
    description: "Entertainment hubs with cinemas and events.",
  },
  {
    id: 6,
    name: "Galleria Vittorio",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
    location: "Milan, Italy",
    rating: 4.8,
    price: 0,
    description: "Historic arcade with luxury shopping.",
  },
  {
    id: 7,
    name: "Champs Elysees Hub",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    location: "Paris, France",
    rating: 4.6,
    price: 0,
    description: "Fashion flagships and gourmet patisseries.",
  },
  {
    id: 8,
    name: "Phoenix Marketcity",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    location: "Pune, India",
    rating: 4.5,
    price: 0,
    description: "Shopping, dining, and weekend performances.",
  },
];

export default function Malls() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Shopping Malls</h2>
          <p className="text-gray-500 mt-2">
            Shop at the best malls and retail destinations.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          Find Retail Deals
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {malls.map((mall) => (
          <TravelCard
            key={mall.id}
            title={mall.name}
            image={mall.image}
            location={mall.location}
            description={mall.description}
            category="Shopping"
            rating={mall.rating}
            price={mall.price}
          />
        ))}
      </div>
    </section>
  );
}
