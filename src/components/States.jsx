const states = [
  {
    id: 1,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Beaches, nightlife, and heritage.",
    location: "India",
  },
  {
    id: 2,
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Palaces, forts, and deserts.",
    location: "India",
  },
  {
    id: 3,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Backwaters, hills, and Ayurveda.",
    location: "India",
  },
  {
    id: 4,
    name: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
    description: "Mountains, valleys, and adventure.",
    location: "India",
  },
  {
    id: 5,
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    description: "Temples, beaches, and culture.",
    location: "India",
  },
  {
    id: 6,
    name: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Himalayas, yoga, and spirituality.",
    location: "India",
  },
  {
    id: 7,
    name: "Maharashtra",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Cities, caves, and coastlines.",
    location: "India",
  },
  {
    id: 8,
    name: "West Bengal",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    description: "Heritage, tea gardens, and art.",
    location: "India",
  },
];
import TravelCard from "./TravelCard";

export default function States() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-8">States Explorer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {states.map((state) => (
          <TravelCard
            key={state.id}
            title={state.name}
            image={state.image}
            description={state.description}
            location={state.location}
            category="State"
          />
        ))}
      </div>
    </section>
  );
}
