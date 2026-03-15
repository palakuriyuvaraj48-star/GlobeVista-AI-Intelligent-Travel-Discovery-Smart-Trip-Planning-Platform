import React from "react";

const foodCards = [
  { title: "Street Food", description: "Local delicacies and snacks." },
  { title: "Fine Dining", description: "Top restaurants and cuisines." },
  { title: "Traditional Dishes", description: "Must-try regional foods." },
];

export default function Food() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Famous Dishes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl p-6 shadow hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
