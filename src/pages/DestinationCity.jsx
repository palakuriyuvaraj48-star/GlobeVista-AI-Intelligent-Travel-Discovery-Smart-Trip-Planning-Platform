import React from "react";
import { useParams } from "react-router-dom";

export default function DestinationCity() {
  const { city } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{city && city.charAt(0).toUpperCase() + city.slice(1)}</h1>
      <div className="bg-white rounded-xl p-6 shadow">
        <p className="text-gray-700">Welcome to {city && city.charAt(0).toUpperCase() + city.slice(1)}! Explore attractions, food, and experiences in this destination.</p>
      </div>
    </div>
  );
}
