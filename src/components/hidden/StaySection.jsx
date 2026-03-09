import { useMemo, useState } from "react";

export default function StaySection({ place, onBook }) {
  const [selectedNights, setSelectedNights] = useState(2);
  const [wishlistIds, setWishlistIds] = useState([]);

  const groupedHotels = useMemo(() => {
    const groups = { "3 Star Hotels": [], "4 Star Hotels": [], "5 Star Hotels": [] };
    place.hotels.forEach((hotel) => {
      if (!groups[hotel.category]) groups[hotel.category] = [];
      groups[hotel.category].push(hotel);
    });
    return groups;
  }, [place.hotels]);

  const toggleWishlist = (hotelId) => {
    setWishlistIds((prev) => (prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]));
  };

  return (
    <section id="stay" className="scroll-mt-36 space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Stay in {place.name}</h2>
          <p className="text-sm text-slate-300">Handpicked hotels across premium categories.</p>
        </div>
        <label className="text-sm font-semibold text-slate-200">
          Nights
          <input
            type="number"
            min={1}
            value={selectedNights}
            onChange={(event) => setSelectedNights(Math.max(1, Number(event.target.value) || 1))}
            className="ml-2 h-10 w-20 rounded-lg border border-slate-600 bg-slate-900 px-2 text-white outline-none focus:border-cyan-500"
          />
        </label>
      </div>

      {Object.entries(groupedHotels).map(([category, hotels]) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-semibold text-cyan-200">{category}</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <div className="relative">
                  <img src={hotel.image} alt={hotel.name} className="h-44 w-full rounded-xl object-cover" />
                  <button
                    type="button"
                    onClick={() => toggleWishlist(hotel.id)}
                    className={`absolute right-2 top-2 rounded-full p-2 text-sm ${
                      wishlistIds.includes(hotel.id) ? "bg-rose-500/20 text-rose-300" : "bg-slate-900/70 text-white"
                    }`}
                  >
                    {wishlistIds.includes(hotel.id) ? "♥" : "♡"}
                  </button>
                </div>
                <div className="mt-3 space-y-2">
                  <h4 className="font-semibold text-white">{hotel.name}</h4>
                  <span className="inline-flex rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Excellent {hotel.rating}
                  </span>
                  <p className="text-sm text-cyan-300">
                    {"\u20B9"}
                    {hotel.pricePerNight.toLocaleString("en-IN")} / night Onwards
                  </p>
                  <p className="text-sm font-semibold text-slate-200">
                    Total: {"\u20B9"}
                    {(hotel.pricePerNight * selectedNights).toLocaleString("en-IN")}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="h-9 rounded-lg border border-slate-600 text-xs font-semibold text-slate-200 transition duration-300 hover:bg-slate-800"
                    >
                      EXPLORE
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onBook({
                          id: `${place.id}-${hotel.id}`,
                          title: `${hotel.name} Stay`,
                          basePrice: hotel.pricePerNight * selectedNights,
                          duration: `${selectedNights + 1}D/${selectedNights}N`,
                          nights: selectedNights,
                          destinations: [place.name],
                        })
                      }
                      className="h-9 rounded-lg bg-indigo-600 text-xs font-semibold text-white transition duration-300 hover:bg-indigo-700"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
