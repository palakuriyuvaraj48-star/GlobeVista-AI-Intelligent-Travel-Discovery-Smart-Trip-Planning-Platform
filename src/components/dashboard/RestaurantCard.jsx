import { useEffect, useState } from "react";
import { isWishlisted, toggleWishlistItem } from "../../utils/wishlistStorage";
import { addRecentlyViewedItem } from "../../utils/recentlyViewed";

export default function RestaurantCard(props) {
  const { restaurant = {} } = props;
  const fallbackImage =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80";
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isWishlisted(`restaurant-${restaurant.id}`));
  }, [restaurant.id]);

  return (
    <article
      onClick={() =>
        addRecentlyViewedItem({
          id: restaurant.id,
          name: restaurant.name,
          location: restaurant.location || restaurant.city,
          image: restaurant.image || fallbackImage,
          price: restaurant.priceForTwo,
          category: "Restaurant",
        })
      }
      className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={restaurant.image || fallbackImage}
          alt={restaurant.name}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== fallbackImage) {
              event.currentTarget.src = fallbackImage;
            }
          }}
          className="h-56 w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
          {restaurant.vegType}
        </div>
        <button
          type="button"
          onClick={() => {
            const next = toggleWishlistItem({
              id: `restaurant-${restaurant.id}`,
              title: restaurant.name,
              description: `${restaurant.cuisineType} dining in ${restaurant.city}`,
              image: restaurant.image || fallbackImage,
              rating: restaurant.rating,
              price: restaurant.priceForTwo,
              category: "Restaurant",
              location: restaurant.location,
            });
            setSaved(next.some((item) => item.id === `restaurant-${restaurant.id}`));
          }}
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            saved ? "bg-rose-500 text-white" : "bg-white/90 text-slate-700"
          }`}
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{restaurant.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{restaurant.city}</p>
          </div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
            ⭐ {restaurant.rating}
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-600">
          <p>{restaurant.location}</p>
          <p>
            Cuisine: <span className="font-semibold text-slate-800">{restaurant.cuisineType}</span>
          </p>
          <p>
            ₹ {restaurant.priceForTwo?.toLocaleString?.("en-IN")} for two
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              addRecentlyViewedItem({
                id: restaurant.id,
                name: restaurant.name,
                location: restaurant.location || restaurant.city,
                image: restaurant.image || fallbackImage,
                price: restaurant.priceForTwo,
                category: "Restaurant",
              });
            }}
            className="rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            View Details
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="rounded-lg bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-200"
          >
            View on Map
          </button>
        </div>
      </div>
    </article>
  );
}
