import TravelCard from "../components/TravelCard";

const hiddenPlaces = [
  {
    id: 1,
    name: "Chefchaouen",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    rating: 4.8,
    description: "The Blue Pearl of Morocco."
  },
  {
    id: 2,
    name: "Colmar",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    rating: 4.7,
    description: "A fairy-tale town in France."
  },
  {
    id: 3,
    name: "Luang Prabang",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    rating: 4.6,
    description: "UNESCO World Heritage city in Laos."
  }
];

export default function HiddenPlaces() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {hiddenPlaces.map((place) => (
        <TravelCard key={place.id} item={place} />
      ))}
    </div>
  );
}
