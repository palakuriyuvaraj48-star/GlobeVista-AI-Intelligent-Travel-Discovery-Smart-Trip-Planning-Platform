import React from "react";
import { useNavigate } from "react-router-dom";

const hiddenPlaces = [
  { city: "Hallstatt" },
  { city: "Chefchaouen" },
  { city: "Colmar" },
  { city: "Luang Prabang" },
  { city: "Svalbard" },
];

export default function DestinationsHidden() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hidden Places</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hiddenPlaces.map((place) => (
          <div
            key={place.city}
            className="bg-white rounded-xl p-6 shadow hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/destination/${place.city.toLowerCase()}`)}
          >
            <h2 className="text-xl font-semibold mb-2">{place.city}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
