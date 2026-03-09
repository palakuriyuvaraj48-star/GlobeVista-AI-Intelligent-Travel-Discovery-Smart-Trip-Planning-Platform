import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingPanel from "../components/theme/BookingPanel";
import PaymentModal from "../components/theme/PaymentModal";
import { findThemeByName } from "../data/themePackages";

const sortPackages = (items, option) => {
  const list = [...items];
  if (option === "price_asc") return list.sort((a, b) => a.basePrice - b.basePrice);
  if (option === "duration_asc") return list.sort((a, b) => a.durationDays - b.durationDays);
  return list.sort((a, b) => b.popularity - a.popularity);
};

export default function ThemeDetails() {
  const { themeName } = useParams();
  const navigate = useNavigate();
  const theme = useMemo(() => findThemeByName(themeName), [themeName]);

  const [budget, setBudget] = useState([5000, 80000]);
  const [durationLimit, setDurationLimit] = useState(7);
  const [destinationFilter, setDestinationFilter] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [travelers, setTravelers] = useState(2);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [paymentPayload, setPaymentPayload] = useState(null);

  const allDestinations = useMemo(() => {
    if (!theme) return [];
    return Array.from(new Set(theme.packages.flatMap((pkg) => pkg.destinations)));
  }, [theme]);

  const filteredPackages = useMemo(() => {
    if (!theme) return [];
    const filtered = theme.packages
      .filter((pkg) => pkg.basePrice >= budget[0] && pkg.basePrice <= budget[1])
      .filter((pkg) => pkg.durationDays <= durationLimit)
      .filter((pkg) =>
        destinationFilter
          ? pkg.destinations.some((destination) => destination === destinationFilter)
          : true
      );
    return sortPackages(filtered, sortBy);
  }, [budget, destinationFilter, durationLimit, sortBy, theme]);

  const saveBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("themeBookings") || "[]");
    localStorage.setItem("themeBookings", JSON.stringify([booking, ...existing]));
  };

  if (!theme) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Theme not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 pb-10">
      <div className="relative h-72 overflow-hidden">
        <img src={theme.heroImage} alt={theme.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-4 pb-8 text-white">
          <div>
            <h1 className="text-4xl font-bold">{theme.name}</h1>
            <p className="mt-2 text-white/90">{theme.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">Budget Range</p>
            <p className="text-sm font-semibold text-slate-700">
              {"\u20B9"}
              {budget[0].toLocaleString("en-IN")} - {"\u20B9"}
              {budget[1].toLocaleString("en-IN")}
            </p>
            <input
              type="range"
              min={5000}
              max={80000}
              value={budget[1]}
              onChange={(event) => setBudget([budget[0], Number(event.target.value)])}
              className="mt-2 w-full accent-indigo-600"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">Max Duration</p>
            <p className="text-sm font-semibold text-slate-700">{durationLimit} days</p>
            <input
              type="range"
              min={3}
              max={10}
              value={durationLimit}
              onChange={(event) => setDurationLimit(Number(event.target.value))}
              className="mt-2 w-full accent-indigo-600"
            />
          </div>
          <label className="text-sm font-semibold text-slate-700">
            Destination
            <select
              value={destinationFilter}
              onChange={(event) => setDestinationFilter(event.target.value)}
              className="mt-2 h-10 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
            >
              <option value="">All Destinations</option>
              {allDestinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Sort
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="mt-2 h-10 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
            >
              <option value="price_asc">Price Low to High</option>
              <option value="popularity">Popularity</option>
              <option value="duration_asc">Duration</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Curated Packages</h2>
          <label className="text-sm font-semibold text-slate-700">
            Travelers
            <input
              type="number"
              min={1}
              value={travelers}
              onChange={(event) => setTravelers(Math.max(1, Number(event.target.value) || 1))}
              className="ml-2 h-10 w-20 rounded-lg border border-slate-300 px-2 outline-none focus:border-indigo-500"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-xl"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-44 w-full rounded-xl object-cover"
              />
              <h3 className="mt-3 text-lg font-bold text-slate-900">{pkg.title}</h3>
              <p className="text-sm text-slate-600">{pkg.destinations.join(", ")}</p>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="rounded-full bg-amber-100 px-2 py-1 font-semibold text-amber-700">
                  {pkg.rating}
                </span>
                <span className="font-semibold text-slate-700">{pkg.duration}</span>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {pkg.inclusions.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm font-semibold text-slate-800">
                {"\u20B9"}
                {pkg.basePrice.toLocaleString("en-IN")} / person
              </p>
              <p className="text-sm font-bold text-indigo-700">
                Total: {"\u20B9"}
                {(pkg.basePrice * travelers).toLocaleString("en-IN")}
              </p>
              <button
                type="button"
                onClick={() => setBookingPackage(pkg)}
                className="mt-3 h-10 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
              >
                Book Now
              </button>
            </article>
          ))}
        </div>
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
    </section>
  );
}
