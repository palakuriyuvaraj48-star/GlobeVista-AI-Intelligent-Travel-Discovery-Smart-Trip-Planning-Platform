import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecentlyViewedItems } from "../utils/recentlyViewed";

function formatPrice(item) {
  if (!item.price) return null;
  const value = typeof item.price === "number" ? item.price.toLocaleString("en-IN") : item.price;
  return item.category === "Restaurant" ? `Rs ${value} for two` : `Rs ${value}`;
}

export default function RecentlyViewed() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getRecentlyViewedItems());
  }, []);

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Recently Viewed</h2>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          You have not viewed any hotels or restaurants yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.category}-${item.id}`}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-900"
            >
              <img src={item.image} alt={item.name} loading="lazy" className="h-52 w-full object-cover" />
              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{item.location}</p>
                {formatPrice(item) ? (
                  <p className="text-sm font-semibold text-indigo-600">{formatPrice(item)}</p>
                ) : null}
                <button
                  type="button"
                  onClick={() => navigate(item.category === "Restaurant" ? "/restaurants" : "/hotels")}
                  className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
                >
                  View Again
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
