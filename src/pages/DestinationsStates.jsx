import React from "react";
import { useNavigate } from "react-router-dom";

const states = [
  { city: "California" },
  { city: "Kerala" },
  { city: "Queensland" },
  { city: "Bavaria" },
  { city: "Ontario" },
];

export default function DestinationsStates() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">States</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {states.map((place) => (
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
