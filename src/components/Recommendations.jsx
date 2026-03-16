import TravelCard from "./TravelCard";

const recommendations = [
  {
    id: 1,
    name: "Santorini Sunset Escape",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    location: "Santorini, Greece",
    rating: 4.9,
    price: 34000,
    description: "AI-matched itinerary for romantic getaways.",
  },
  {
    id: 2,
    name: "Kyoto Culture Loop",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800",
    location: "Kyoto, Japan",
    rating: 4.8,
    price: 27500,
    description: "Temple visits, tea ceremony, and artisan trails.",
  },
  {
    id: 3,
    name: "Patagonia Adventure Pack",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    location: "El Calafate, Argentina",
    rating: 4.7,
    price: 42000,
    description: "Guided hikes and glacier cruises curated for you.",
  },
  {
    id: 4,
    name: "Maldives Overwater Bliss",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    location: "Maldives",
    rating: 4.9,
    price: 59000,
    description: "Private villas with lagoon experiences.",
  },
  {
    id: 5,
    name: "Istanbul Food Circuit",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    location: "Istanbul, Turkey",
    rating: 4.6,
    price: 23000,
    description: "Street bites, rooftop dinners, and spice bazaars.",
  },
  {
    id: 6,
    name: "Cape Town Coastal",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    location: "Cape Town, South Africa",
    rating: 4.7,
    price: 31000,
    description: "Winelands day trip and ocean drives.",
  },
  {
    id: 7,
    name: "New York City Lights",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800",
    location: "New York, USA",
    rating: 4.8,
    price: 36000,
    description: "Broadway nights and skyline viewpoints.",
  },
  {
    id: 8,
    name: "Nordic Aurora Quest",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800",
    location: "Tromso, Norway",
    rating: 4.9,
    price: 48000,
    description: "AI-timed aurora hunts and winter safaris.",
  },
];

export default function Recommendations() {
  return (
    <section className="px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">AI Recommendations</h2>
          <p className="text-gray-500 mt-2">
            Get AI-powered recommendations for your next adventure.
          </p>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:shadow-md">
          Refresh Suggestions
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <TravelCard
            key={item.id}
            title={item.name}
            image={item.image}
            location={item.location}
            description={item.description}
            category="AI Curated"
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
