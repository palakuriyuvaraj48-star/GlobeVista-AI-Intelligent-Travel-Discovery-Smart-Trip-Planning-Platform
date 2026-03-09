import { useEffect, useState } from "react";
import TravelCard from "../TravelCard";
import { clearWishlist, getWishlistItems } from "../utils/wishlistStorage";

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getWishlistItems());
  }, []);

  const handleClear = () => {
    clearWishlist();
    setItems([]);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100">Wishlist</p>
          <h1 className="mt-3 text-4xl font-bold">Saved hotels, restaurants, places, and events</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">{items.length} saved item{items.length === 1 ? "" : "s"}</p>
          {items.length ? (
            <button
              type="button"
              onClick={handleClear}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Clear Wishlist
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No saved items yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <TravelCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                rating={item.rating}
                price={item.price}
                category={item.category}
                location={item.location}
                badge={item.category}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
