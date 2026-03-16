import { toggleWishlistItem } from "../../utils/wishlistStorage";
import { addRecentlyViewedItem } from "../../utils/recentlyViewed";
import { useNavigate } from "react-router-dom";

export default function HotelCard(props) {
  const navigate = useNavigate();
  const {
    hotel = {},
    nights = 1,
    wishlisted = false,
    onToggleWishlist,
    compared = false,
    onToggleCompare,
    highlighted = false,
    onTrackPrice,
  } = props;

  const totalPrice = (hotel.pricePerNight || 0) * nights;
  const description = hotel.highlights?.join(" • ") || hotel.distanceFromCenter || "Premium stay";
  const fallbackImage =
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80";

  return (
    <article
      onClick={() =>
        addRecentlyViewedItem({
          id: hotel.id,
          name: hotel.name,
          location: hotel.location,
          image: hotel.image || fallbackImage,
          price: hotel.pricePerNight,
          category: "Hotel",
        })
      }
      className={`overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl ${
        highlighted ? "ring-2 ring-cyan-300" : ""
      }`}
    >
      <div className="relative">
        <img
          src={hotel.image || fallbackImage}
          alt={hotel.name}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== fallbackImage) {
              event.currentTarget.src = fallbackImage;
            }
          }}
          className="h-56 w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
          {hotel.propertyType}
        </div>
        <button
          type="button"
          onClick={() => {
            toggleWishlistItem({
              id: `hotel-${hotel.id}`,
              title: hotel.name,
              description,
              image: hotel.image || fallbackImage,
              rating: hotel.rating,
              price: hotel.pricePerNight,
              category: "Hotel",
              location: hotel.location,
            });
            onToggleWishlist?.(hotel.id);
          }}
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold transition ${
            wishlisted
              ? "bg-rose-500 text-white"
              : "bg-white/90 text-slate-700 backdrop-blur hover:bg-white"
          }`}
        >
          {wishlisted ? "Saved" : "Save"}
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{hotel.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{hotel.location}</p>
          </div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-right">
            <p className="text-sm font-semibold text-amber-700">⭐ {hotel.rating}</p>
            <p className="text-xs text-amber-600">{hotel.starLevel}-star stay</p>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-600">{description}</p>

        <div className="flex flex-wrap gap-2">
          {(hotel.amenities || []).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-2xl font-bold text-slate-900">₹ {hotel.pricePerNight?.toLocaleString?.("en-IN")}</p>
            <p className="text-sm text-slate-500">
              per night • ₹ {totalPrice.toLocaleString("en-IN")} for {nights} night{nights > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onToggleCompare?.(hotel.id);
              }}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                compared
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {compared ? "Added" : "Compare"}
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                addRecentlyViewedItem({
                  id: hotel.id,
                  name: hotel.name,
                  location: hotel.location,
                  image: hotel.image || fallbackImage,
                  price: hotel.pricePerNight,
                  category: "Hotel",
                });
                navigate(`/hotel/${hotel.id}`);
              }}
              className="rounded-lg border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
            >
              Explore
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/booking?type=hotel&id=${hotel.id}`);
              }}
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
