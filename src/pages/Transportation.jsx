import React from "react";
import Card from "../components/Card";

const transportationData = [
  {
    id: 1,
    title: "MetroLink Rapid Rail",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    rating: 4.4,
    location: "Bengaluru",
    type: "Train",
    averageFare: "\u20B980",
    speed: "120 km/h",
    description: "Fast city-to-suburb rail with frequent departures and smart-card ticketing.",
  },
  {
    id: 2,
    title: "CoastAir Express",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    location: "Mumbai",
    type: "Flight",
    routes: "20+",
    startingPrice: "\u20B93,500",
    description: "Short-haul regional flights connecting beach, business, and metro destinations.",
  },
  {
    id: 3,
    title: "CityDrive Transfers",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.3,
    location: "Hyderabad",
    type: "Taxi",
    averageFare: "\u20B9450",
    speed: "On-demand",
    description: "Airport and city transfer service with app booking and fixed-fare airport rides.",
  },
];

export default function Transportation() {
  const data = Array.isArray(transportationData) ? transportationData : [];
  const fallbackImage =
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-600 to-amber-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Transportation</h1>
          <p className="mt-2 text-orange-100">Reliable travel options for city and long-distance routes.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {data.length === 0 ? (
          <div className="py-20 text-center">
            <h2>No data available</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <Card key={item.id} className="h-full">
                <img
                  src={item.image || fallbackImage}
                  alt={item.title}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage;
                  }}
                  className="h-52 w-full object-cover"
                />
                <div className="flex h-[calc(100%-13rem)] flex-col p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                  <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {item.rating} rating</p>
                  <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                  <div className="mt-4 space-y-1 text-sm text-slate-700">
                    <p>Type: {item.type}</p>
                    {item.averageFare ? <p>Average Fare: {item.averageFare}</p> : null}
                    {item.speed ? <p>Speed: {item.speed}</p> : null}
                    {item.routes ? <p>Routes: {item.routes}</p> : null}
                    {item.startingPrice ? <p>Starting Price: {item.startingPrice}</p> : null}
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                    >
                      Check Routes
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.title} ${item.location}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-cyan-100 px-3 py-2 text-center text-sm font-medium text-cyan-700 transition hover:bg-cyan-200"
                    >
                      View Map
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
