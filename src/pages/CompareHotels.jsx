import React from "react";

const hotels = [
  { name: "Hotel Luxe", price: 180, rating: 4.7 },
  { name: "Budget Stay", price: 60, rating: 4.1 },
  { name: "City Center Inn", price: 120, rating: 4.4 },
];

export default function CompareHotels() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Compare Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.name}
            className="bg-white rounded-xl p-6 shadow hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
            <p className="text-gray-600 mb-1">Price: ${hotel.price}/night</p>
            <p className="text-yellow-600 font-bold">Rating: {hotel.rating}★</p>
          </div>
        ))}
      </div>
    </div>
  );
}
