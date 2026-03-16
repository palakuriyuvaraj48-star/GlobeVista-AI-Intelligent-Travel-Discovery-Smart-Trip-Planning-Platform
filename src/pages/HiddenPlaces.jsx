import TravelCard from "../components/TravelCard";
import { hiddenPlaces } from "../data/hiddenPlaces";

export default function HiddenPlaces() {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {hiddenPlaces.map((place) => (
        <TravelCard key={place.id} item={place} />
      ))}
    </div>
  );
}
