import React, { useState } from "react";

const filters = ["Beach", "Mountains", "Adventure", "Luxury", "Budget"];

export default function TravelPreferences() {
  const [selected, setSelected] = useState([]);

  const toggle = (filter) => {
    setSelected((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Travel Preferences</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggle(filter)}
            className={`px-5 py-2 rounded-xl border transition-all duration-300 ${selected.includes(filter) ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-white"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div>
        {selected.length > 0 ? (
          <div className="text-lg">Selected: {selected.join(", ")}</div>
        ) : (
          <div className="text-gray-500">No preferences selected.</div>
        )}
      </div>
    </div>
  );
}
