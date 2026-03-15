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
    <section className="section-divider">
      <h2 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">Continue Exploring</h2>
      <p className="mb-6 text-sm text-slate-600">Pick up right where you left off with your saved discoveries.</p>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-sm text-slate-500">
          You have not viewed any hotels or restaurants yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.category}-${item.id}`}
              className="card-base card-hover group"
            >
              <img src={item.image} alt={item.name} loading="lazy" className="h-52 w-full object-cover" />
              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.location}</p>
                {formatPrice(item) ? (
                  <p className="text-sm font-semibold text-slate-900">{formatPrice(item)}</p>
                ) : null}
                <button
                  type="button"
                  onClick={() => navigate(item.category === "Restaurant" ? "/restaurants" : "/hotels")}
                  className="btn-primary mt-2"
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
