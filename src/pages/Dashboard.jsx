import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingPanel from "../components/theme/BookingPanel";
import PaymentModal from "../components/theme/PaymentModal";
import RecentlyViewed from "../components/RecentlyViewed";
import { themes } from "../data/themePackages";
import { events } from "../data/events";
import { hotels } from "../data/hotels";
import { places } from "../data/places";
import { restaurants } from "../data/restaurants";
import { isWishlisted, toggleWishlistItem } from "../utils/wishlistStorage";

const heroImages = [
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920",
];

const quickDestinations = ["Goa", "Bali", "Dubai", "Paris", "Manali"];

const deals = [
  {
    title: "20% Off Goa Resorts",
    description: "Limited-time savings on beachfront stays with breakfast included.",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Free Breakfast Offer",
    description: "Selected city hotels now include daily breakfast and late checkout.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Weekend Escape Deals",
    description: "Quick two-night packages for short breaks and spontaneous getaways.",
    accent: "from-indigo-600 to-cyan-500",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900",
];

const topDestinations = [
  {
    name: "Goa",
    keywords: "Hotels, Budget Hotels, Resorts, Best Hotels, North Goa, Villas",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300",
  },
  {
    name: "Delhi",
    keywords: "Hotels, Budget Hotels, Resorts, Best Hotels, Near IGI Airport",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300",
  },
  {
    name: "Bangalore",
    keywords: "Hotels, Budget Hotels, Resorts, Near Airport",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=300",
  },
  {
    name: "Ooty",
    keywords: "Hotels, Resorts, Cottages, Budget Hotels, Homestay",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300",
  },
  {
    name: "Mumbai",
    keywords: "Hotels, Budget Hotels, Resorts, Couple Hotels",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=300",
  },
  {
    name: "Shimla",
    keywords: "Hotels, Budget Hotels, Resorts, Near Mall Road",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300",
  },
  {
    name: "Jaipur",
    keywords: "Hotels, Resorts, Budget Hotels, Near Railway Station",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300",
  },
  {
    name: "Manali",
    keywords: "Hotels, Resorts, Budget Hotels, Near Mall Road",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=300",
  },
  {
    name: "Dubai",
    keywords: "Hotels, Budget Hotels, 5 Star Hotels, Apartments",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=300",
  },
  {
    name: "Singapore",
    keywords: "Hotels, 5 Star Hotels, Orchard Road Hotels",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300",
  },
  {
    name: "Bangkok",
    keywords: "Hotels, 3 Star Hotels, 5 Star Hotels",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=300",
  },
  {
    name: "Pattaya",
    keywords: "Hotels, Budget Hotels, Beachfront Resorts",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300",
  },
  {
    name: "Phuket",
    keywords: "Hotels, Resorts, Beachfront Hotels",
    image: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=300",
  },
  {
    name: "Bali",
    keywords: "Hotels, Resorts, Villas",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300",
  },
  {
    name: "Maldives",
    keywords: "Hotels, Resorts, 5 Star Hotels",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300",
  },
];

const trendingTrips = [
  {
    title: "Goa Beach Escape",
    location: "Goa, India",
    rating: "4.6",
    price: "6,500",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
  },
  {
    title: "Manali Snow Adventure",
    location: "Manali, Himachal Pradesh",
    rating: "4.7",
    price: "5,200",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=900",
  },
  {
    title: "Dubai Luxury Weekend",
    location: "Dubai, UAE",
    rating: "4.8",
    price: "18,000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=900",
  },
  {
    title: "Bali Island Retreat",
    location: "Bali, Indonesia",
    rating: "4.9",
    price: "14,500",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
  },
  {
    title: "Maldives Water Villas",
    location: "Maldives",
    rating: "4.9",
    price: "25,000",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900",
  },
  {
    title: "Jaipur Heritage Tour",
    location: "Jaipur, Rajasthan",
    rating: "4.5",
    price: "4,800",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900",
  },
];

const quickNavigation = [
  { to: "/hotels", label: "Hotels", icon: "HT" },
  { to: "/restaurants", label: "Restaurants", icon: "RS" },
  { to: "/places", label: "Places", icon: "PL" },
  { to: "/events", label: "Events", icon: "EV" },
  { to: "/rentals", label: "Rentals", icon: "RN" },
  { to: "/movies", label: "Movies", icon: "MV" },
  { to: "/malls", label: "Malls", icon: "ML" },
  { to: "/pubs", label: "Pubs", icon: "PB" },
  { to: "/transport", label: "Transport", icon: "TR" },
  { to: "/states", label: "States", icon: "ST" },
  { to: "/hidden-palaces", label: "Hidden Palaces", icon: "HP" },
  { to: "/foreign-palaces", label: "Foreign Palaces", icon: "FP" },
];

const inspirationThemes = [
  {
    title: "Beach Trips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    description: "Sunrise swims, resort stays, and oceanfront dinners.",
  },
  {
    title: "Mountain Escapes",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    description: "Cool weather retreats with scenic drives and cabins.",
  },
  {
    title: "Food Tours",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    description: "Chef tables, local tasting trails, and street-food gems.",
  },
  {
    title: "Heritage Travel",
    image: "https://images.unsplash.com/photo-1563794343405-779c24940d6a?w=1200",
    description: "Palaces, museums, and culture-rich old city circuits.",
  },
  {
    title: "Nature Retreats",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    description: "Forest escapes, lakeside mornings, and restorative stays.",
  },
];

function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="h-52 animate-pulse bg-slate-200" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="grid grid-cols-2 gap-2 pt-2">
          <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 animate-pulse rounded-xl bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

function HotelHighlightCard({ hotel, saved, onToggleSave }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate("/hotels")}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleSave(hotel);
          }}
          className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg transition hover:bg-white"
        >
          {saved ? "Saved" : "Save"}
        </button>
        <div className="absolute bottom-4 left-4 rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-slate-900">
          STAR {hotel.rating}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{hotel.name}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{hotel.city}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Per night</p>
          <p className="mt-1 text-2xl font-bold text-indigo-600">Rs {hotel.price.toLocaleString("en-IN")}</p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate("/hotels");
            }}
            className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800"
          >
            View Details
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate("/hotels");
            }}
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg"
          >
            Book Now
          </button>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(hotel.city)}`}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="rounded-xl bg-indigo-50 px-4 py-3 text-center text-sm font-semibold text-indigo-700 transition duration-300 hover:bg-indigo-100"
          >
            View on Map
          </a>
        </div>
      </div>
    </article>
  );
}

function RestaurantHighlightCard({ restaurant, saved, onToggleSave }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate("/restaurants")}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleSave(restaurant);
          }}
          className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg transition hover:bg-white"
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{restaurant.name}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{restaurant.cuisine}</p>
          </div>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            {restaurant.rating}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">{restaurant.city}</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate("/restaurants");
            }}
            className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-emerald-700"
          >
            Reserve Table
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              navigate("/restaurants");
            }}
            className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800"
          >
            View Menu
          </button>
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.city)}`}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 transition duration-300 hover:bg-emerald-100"
          >
            View on Map
          </a>
        </div>
      </div>
    </article>
  );
}

function PlaceCard({ place, rating }) {
  return (
    <Link
      to="/places"
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{place.name}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{place.city}</p>
        </div>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">{rating}</span>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const trendingCarouselRef = useRef(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [pageReady, setPageReady] = useState(false);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [paymentPayload, setPaymentPayload] = useState(null);
  const [hotelWishlist, setHotelWishlist] = useState([]);
  const [restaurantWishlist, setRestaurantWishlist] = useState([]);
  const [searchForm, setSearchForm] = useState({
    destination: "Goa",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
  });
  const [aiPreview, setAiPreview] = useState({
    destination: "Bali",
    days: 5,
    budget: 50000,
  });

  useEffect(() => {
    const sliderId = setInterval(() => setHeroIndex((current) => (current + 1) % heroImages.length), 4500);
    return () => clearInterval(sliderId);
  }, []);

  useEffect(() => {
    const loadingId = setTimeout(() => setPageReady(true), 650);
    return () => clearTimeout(loadingId);
  }, []);

  useEffect(() => {
    setHotelWishlist(hotels.filter((hotel) => isWishlisted(`hotel-home-${hotel.id}`)).map((hotel) => hotel.id));
    setRestaurantWishlist(
      restaurants.filter((restaurant) => isWishlisted(`restaurant-home-${restaurant.id}`)).map((restaurant) => restaurant.id)
    );
  }, []);

  const featuredHotels = useMemo(() => hotels.slice(0, 3), []);
  const featuredRestaurants = useMemo(() => restaurants.slice(0, 3), []);
  const featuredPlaces = useMemo(() => places.slice(0, 3), []);
  const nearbyEvents = useMemo(() => events.slice(0, 3), []);
  const featuredThemes = useMemo(() => themes.slice(0, 3), []);

  const scrollTrendingTrips = (direction) => {
    if (!trendingCarouselRef.current) return;
    trendingCarouselRef.current.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  const saveBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("themeBookings") || "[]");
    localStorage.setItem("themeBookings", JSON.stringify([booking, ...existing]));
  };

  const toggleHotelSave = (hotel) => {
    const next = toggleWishlistItem({
      id: `hotel-home-${hotel.id}`,
      title: hotel.name,
      description: hotel.description,
      image: hotel.image,
      rating: hotel.rating,
      price: hotel.price,
      category: "Hotel",
      location: hotel.city,
    });
    setHotelWishlist(next.filter((item) => item.category === "Hotel").map((item) => Number(String(item.id).replace("hotel-home-", ""))));
  };

  const toggleRestaurantSave = (restaurant) => {
    const next = toggleWishlistItem({
      id: `restaurant-home-${restaurant.id}`,
      title: restaurant.name,
      description: `${restaurant.cuisine} dining in ${restaurant.city}`,
      image: restaurant.image,
      rating: restaurant.rating,
      category: "Restaurant",
      location: restaurant.city,
    });
    setRestaurantWishlist(
      next
        .filter((item) => item.category === "Restaurant")
        .map((item) => Number(String(item.id).replace("restaurant-home-", "")))
    );
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === heroIndex ? "opacity-100" : "opacity-0"}`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-slate-950/55" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Travel Dashboard</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Discover stays, food, events, and AI-powered trip planning in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
              A modern travel discovery platform inspired by Booking.com, Airbnb, and MakeMyTrip, built for planning end-to-end journeys.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto]">
              <input
                type="text"
                value={searchForm.destination}
                onChange={(event) => setSearchForm((current) => ({ ...current, destination: event.target.value }))}
                placeholder="Destination"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-800 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              />
              <input
                type="date"
                value={searchForm.checkIn}
                onChange={(event) => setSearchForm((current) => ({ ...current, checkIn: event.target.value }))}
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-800 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              />
              <input
                type="date"
                value={searchForm.checkOut}
                onChange={(event) => setSearchForm((current) => ({ ...current, checkOut: event.target.value }))}
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-800 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              />
              <select
                value={searchForm.guests}
                onChange={(event) => setSearchForm((current) => ({ ...current, guests: event.target.value }))}
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-800 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
              </select>
              <button
                type="button"
                onClick={() => navigate("/places")}
                className="h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 text-sm font-semibold text-white transition duration-300 hover:shadow-xl"
              >
                Search
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {quickDestinations.map((destination) => (
                <button
                  key={destination}
                  type="button"
                  onClick={() => setSearchForm((current) => ({ ...current, destination }))}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-200"
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8 lg:space-y-20">
        <section>
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">Explore Top Destinations</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topDestinations.map((destination) => (
              <button
                key={destination.name}
                type="button"
                onClick={() => navigate(`/hotels?destination=${destination.name.toLowerCase()}`)}
                className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{destination.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{destination.keywords}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Trending Trips & Weekend Getaways</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTrendingTrips(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-sm transition duration-300 hover:bg-slate-50"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={() => scrollTrendingTrips(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 shadow-sm transition duration-300 hover:bg-slate-50"
              >
                {">"}
              </button>
            </div>
          </div>

          <div ref={trendingCarouselRef} className="flex overflow-x-auto gap-6 pb-4">
            {trendingTrips.map((trip) => (
              <article
                key={trip.title}
                className="min-w-[300px] rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-900"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  loading="lazy"
                  className="h-48 w-full rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{trip.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{trip.location}</p>
                  <p className="text-sm font-medium text-amber-600">STAR {trip.rating}</p>
                  <p className="font-bold text-purple-600">Starting from Rs {trip.price}</p>
                  <button
                    type="button"
                    onClick={() => navigate("/hotels")}
                    className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <RecentlyViewed />

        <section>
          <SectionHeader
            eyebrow="Stay Curation"
            title="Featured Hotels"
            description="Premium stays with quick actions for details, booking, and map viewing."
            action={
              <Link to="/hotels" className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700">
                Open Hotels
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pageReady
              ? featuredHotels.map((hotel) => (
                  <HotelHighlightCard
                    key={hotel.id}
                    hotel={hotel}
                    saved={hotelWishlist.includes(hotel.id)}
                    onToggleSave={toggleHotelSave}
                  />
                ))
              : [1, 2, 3].map((item) => <SkeletonCard key={item} />)}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Dining Picks"
            title="Top Restaurants"
            description="Discover standout restaurants with reservation-ready actions and map access."
            action={
              <Link to="/restaurants" className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
                Open Restaurants
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pageReady
              ? featuredRestaurants.map((restaurant) => (
                  <RestaurantHighlightCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    saved={restaurantWishlist.includes(restaurant.id)}
                    onToggleSave={toggleRestaurantSave}
                  />
                ))
              : [1, 2, 3].map((item) => <SkeletonCard key={item} />)}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Explore More"
            title="Popular Places"
            description="Must-visit destinations travelers keep adding to their itineraries."
            action={
              <Link to="/places" className="text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                Open Places
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pageReady
              ? featuredPlaces.map((place, index) => <PlaceCard key={place.id} place={place} rating={(4.6 + index * 0.1).toFixed(1)} />)
              : [1, 2, 3].map((item) => <SkeletonCard key={item} />)}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Nearby Energy"
            title="Events Near You"
            description="Festivals, literature events, and entertainment picks to add to your journey."
            action={
              <Link to="/events" className="text-sm font-semibold text-rose-600 transition hover:text-rose-700">
                Open Events
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pageReady
              ? nearbyEvents.map((event) => (
                  <article
                    key={event.id}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        loading="lazy"
                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-4 p-5">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{event.name}</h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{event.location}</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{event.date}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigate("/events")}
                        className="w-full rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-rose-700"
                      >
                        Book Ticket
                      </button>
                    </div>
                  </article>
                ))
              : [1, 2, 3].map((item) => <SkeletonCard key={item} />)}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Inspiration"
            title="Travel Themes"
            description="Start from a mood, then dive into destinations and packages that match it."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {inspirationThemes.map((theme) => (
              <article
                key={theme.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-xl font-semibold">{theme.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{theme.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredThemes.map((theme) => (
              <article
                key={theme.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={theme.heroImage}
                  alt={theme.name}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-xl font-semibold">{theme.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{theme.description}</p>
                  <button
                    type="button"
                    onClick={() => setBookingPackage(theme.packages[0])}
                    className="mt-4 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:bg-slate-100"
                  >
                    Explore Theme
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Budget Planner Preview</p>
            <h2 className="mt-3 text-3xl font-bold">Plan your trip budget.</h2>
            <p className="mt-3 max-w-lg text-sm text-slate-300">
              Estimate travel spend before you book and compare where the budget goes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Hotel", value: "Rs 18,000" },
                { label: "Food", value: "Rs 6,500" },
                { label: "Transport", value: "Rs 4,200" },
                { label: "Activities", value: "Rs 8,000" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate("/budget")}
              className="mt-8 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:bg-slate-100"
            >
              Open Budget Planner
            </button>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">AI Travel Planner</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Generate a smart trip outline in seconds.</h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400">
              Try the AI planner with destination, trip length, and budget before opening the full planner page.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                type="text"
                value={aiPreview.destination}
                onChange={(event) => setAiPreview((current) => ({ ...current, destination: event.target.value }))}
                placeholder="Destination"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
              <input
                type="number"
                min={1}
                value={aiPreview.days}
                onChange={(event) => setAiPreview((current) => ({ ...current, days: Number(event.target.value) || 1 }))}
                placeholder="Number of days"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
              <input
                type="number"
                min={1000}
                value={aiPreview.budget}
                onChange={(event) => setAiPreview((current) => ({ ...current, budget: Number(event.target.value) || 0 }))}
                placeholder="Budget"
                className="h-14 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("/ai-trip-planner")}
                className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-xl"
              >
                Generate Trip
              </button>
              <Link
                to="/ai-trip-planner"
                className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
              >
                Open AI Planner
              </Link>
            </div>
          </article>
        </section>

        <section>
          <SectionHeader
            eyebrow="Promotions"
            title="Deals & Offers"
            description="Curated savings and seasonal offers across stays and quick getaways."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {deals.map((deal) => (
              <article
                key={deal.title}
                className={`rounded-[2rem] bg-gradient-to-br ${deal.accent} p-8 text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Offer</p>
                <h3 className="mt-4 text-2xl font-bold">{deal.title}</h3>
                <p className="mt-3 text-sm text-white/85">{deal.description}</p>
                <button
                  type="button"
                  onClick={() => navigate("/hotels")}
                  className="mt-8 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:bg-slate-100"
                >
                  Book Offer
                </button>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Social Inspiration"
            title="Instagram Travel Gallery"
            description="A quick visual wall of cities, resorts, nature scenes, and food moments."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className={`group overflow-hidden rounded-3xl shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  index % 5 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Travel inspiration ${index + 1}`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-110 md:h-72"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Explore Faster"
            title="Quick Navigation"
            description="Jump directly into the major discovery and planning modules already available across the platform."
          />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {quickNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold transition duration-300 group-hover:bg-cyan-50">
                  {item.icon}
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-100">{item.label}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <BookingPanel
        isOpen={Boolean(bookingPackage)}
        packageItem={bookingPackage}
        onClose={() => setBookingPackage(null)}
        onProceedPayment={(payload) => {
          setPaymentPayload(payload);
          setBookingPackage(null);
        }}
      />
      <PaymentModal
        isOpen={Boolean(paymentPayload)}
        bookingData={paymentPayload}
        onClose={() => setPaymentPayload(null)}
        onPaymentSuccess={(booking) => saveBooking(booking)}
        onGoToConfirmation={(bookingId) => {
          setPaymentPayload(null);
          navigate(`/confirmation/${bookingId}`);
        }}
      />
    </div>
  );
}
