import TravelCard from "./TravelCard";

const pubs = [
  {
    id: 1,
    name: "Skyline Rooftop",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
    location: "Mumbai, India",
    rating: 4.7,
    price: 900,
    description: "Craft cocktails with panoramic city views.",
  },
  {
    id: 2,
    name: "Old Town Alehouse",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    location: "Dublin, Ireland",
    rating: 4.8,
    price: 750,
    description: "Live folk music and signature stouts.",
  },
  {
    id: 3,
    name: "Neon Night Market",
    image: "https://images.unsplash.com/photo-1514361892635-6f6f8fb3c7b9?w=800",
    location: "Bangkok, Thailand",
    rating: 4.6,
    price: 680,
    description: "Street bites and mixology under the lights.",
  },
  {
    id: 4,
    name: "Harbor Lounge",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800",
    location: "Sydney, Australia",
    rating: 4.7,
    price: 820,
    description: "Waterfront lounge with sunset sessions.",
  },
  {
    id: 5,
    name: "Desert Groove",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    location: "Dubai, UAE",
    rating: 4.5,
    price: 1100,
    description: "Late-night DJ sets and premium shisha.",
  },
  {
    id: 6,
    name: "Brew Lab",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    location: "Berlin, Germany",
    rating: 4.6,
    price: 640,
    description: "Small-batch brews and tasting flights.",
  },
  {
    id: 7,
    name: "Coastal Tiki",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    location: "Goa, India",
    rating: 4.8,
    price: 720,
    description: "Beachside cocktails and live percussion.",
  },
  {
    id: 8,
    name: "Jazz & Juniper",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800",
    location: "New Orleans, USA",
    rating: 4.9,
    price: 980,
    description: "Late-night jazz with a curated gin list.",
  },
];

export default function Pubs() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Pubs & Nightlife</h2>
          <p className="text-gray-500 mt-2">
            Find the best nightlife and pub experiences.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          Plan a Night Out
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pubs.map((pub) => (
          <TravelCard
            key={pub.id}
            title={pub.name}
            image={pub.image}
            location={pub.location}
            description={pub.description}
            category="Nightlife"
            rating={pub.rating}
            price={pub.price}
          />
        ))}
      </div>
    </section>
  );
}
