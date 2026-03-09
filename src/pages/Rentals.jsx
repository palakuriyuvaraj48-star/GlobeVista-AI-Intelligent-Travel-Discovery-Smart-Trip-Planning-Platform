const rentals = [
  {
    id: 1,
    name: "City Explorer Sedan",
    location: "Mumbai",
    pricePerDay: 3200,
    category: "Car Rental",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200",
  },
  {
    id: 2,
    name: "Coastal Ride Scooter",
    location: "Goa",
    pricePerDay: 900,
    category: "Bike Rental",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200",
  },
  {
    id: 3,
    name: "Midnight Class SUV",
    location: "Delhi",
    pricePerDay: 6400,
    category: "Luxury Vehicle",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
  },
  {
    id: 4,
    name: "Mountain Trail Jeep",
    location: "Manali",
    pricePerDay: 4800,
    category: "Car Rental",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200",
  },
  {
    id: 5,
    name: "Urban Zip Bike",
    location: "Bengaluru",
    pricePerDay: 1100,
    category: "Bike Rental",
    image: "https://images.unsplash.com/photo-1517846693594-1567da72af75?w=1200",
  },
  {
    id: 6,
    name: "Executive Chauffeur Van",
    location: "Hyderabad",
    pricePerDay: 7200,
    category: "Luxury Vehicle",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200",
  },
];

export default function Rentals() {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-slate-800 to-slate-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Rentals</p>
          <h1 className="mt-3 text-4xl font-bold">Choose the right ride for every part of the trip</h1>
          <p className="mt-3 max-w-2xl text-slate-200">
            Compare self-drive cars, city bikes, and premium transfers without leaving the travel platform.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rentals.map((rental) => (
            <article key={rental.id} className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
              <img src={rental.image} alt={rental.name} loading="lazy" className="h-56 w-full object-cover" />
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{rental.category}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-900">{rental.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">{rental.location}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-900">₹ {rental.pricePerDay.toLocaleString("en-IN")} <span className="text-sm font-medium text-slate-500">/ day</span></p>
                <button
                  type="button"
                  className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
