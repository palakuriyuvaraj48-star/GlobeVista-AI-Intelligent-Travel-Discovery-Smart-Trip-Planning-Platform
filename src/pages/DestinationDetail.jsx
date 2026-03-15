import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingPanel from "../components/theme/BookingPanel";
import PaymentModal from "../components/theme/PaymentModal";
import { getDestinationMeta } from "../data/themePackages";
import TripTimeline from "../components/TripTimeline";

export default function DestinationDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const destination = useMemo(() => getDestinationMeta(name), [name]);
  const [bookingPackage, setBookingPackage] = useState(null);
  const [paymentPayload, setPaymentPayload] = useState(null);

  const saveBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("themeBookings") || "[]");
    localStorage.setItem("themeBookings", JSON.stringify([booking, ...existing]));
  };

  const createServicePackage = (title, price) => ({
    id: `${destination.name}-${title}`.replace(/\s+/g, "-").toLowerCase(),
    title,
    duration: "2D/1N",
    durationDays: 2,
    destinations: [destination.name],
    rating: 4.5,
    popularity: 80,
    basePrice: price,
    inclusions: ["Priority support", "Flexible reschedule"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
  });

  const journeySteps = [
    {
      title: "Arrival and Transfer",
      description: "Airport pickup with local check-in support.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 16l18-5-18-5 4 5-4 5z" />
        </svg>
      ),
    },
    {
      title: "Hotel Check-in",
      description: "Settle into your stay and refresh before exploring.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-4h6v4" />
        </svg>
      ),
    },
    {
      title: "Signature Experiences",
      description: "Local landmarks, guided walks, and curated activities.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "Sunset Viewpoints",
      description: "Golden hour spots chosen for atmosphere and views.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v4M4 11h16M5 19h14" />
          <path d="M7 15a5 5 0 0110 0" />
        </svg>
      ),
    },
    {
      title: "Dinner Recommendations",
      description: "Handpicked restaurants and local food circuits.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 3v7a4 4 0 004 4v7M10 3v7a4 4 0 01-4 4" />
          <path d="M14 3h3a3 3 0 013 3v15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 pb-10">
      <div className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600"
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-4 pb-8 text-white">
          <div>
            <h1 className="text-4xl font-bold">{destination.name}</h1>
            <p className="mt-2 text-white/90">{destination.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-900">Top Hotels</h2>
            <div className="mt-3 space-y-3">
              {destination.hotels.map((hotel) => (
                <div key={hotel.id} className="rounded-xl bg-slate-50 p-3">
                  <p className="font-semibold text-slate-800">{hotel.name}</p>
                  <p className="text-sm text-slate-600">
                    {"\u20B9"}
                    {hotel.price.toLocaleString("en-IN")} / night
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingPackage(createServicePackage(`${hotel.name} Hotel Stay`, hotel.price))}
                    className="mt-2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition duration-300 hover:shadow-md"
                  >
                    Book Hotel
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold text-slate-900">Top Restaurants</h2>
            <div className="mt-3 space-y-3">
              {destination.restaurants.map((restaurant) => (
                <div key={restaurant.id} className="rounded-xl bg-slate-50 p-3">
                  <p className="font-semibold text-slate-800">{restaurant.name}</p>
                  <p className="text-sm text-slate-600">
                    {"\u20B9"}
                    {restaurant.price.toLocaleString("en-IN")} avg for 2
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setBookingPackage(
                        createServicePackage(`${restaurant.name} Dining Reservation`, restaurant.price)
                      )
                    }
                    className="mt-2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition duration-300 hover:shadow-md"
                  >
                    Reserve Restaurant
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6">
          <TripTimeline
            title={`Your ${destination.name} Journey`}
            subtitle="A suggested flow to keep your days balanced and immersive."
            steps={journeySteps}
          />
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Suggested Packages</h2>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to Home
            </button>
          </div>
          {destination.suggestedPackages.length === 0 ? (
            <p className="text-sm text-slate-500">New curated packages are being prepared for this destination.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {destination.suggestedPackages.map((pkg) => (
                <article key={pkg.id} className="rounded-xl border border-slate-200 p-3">
                  <img src={pkg.image} alt={pkg.title} className="h-36 w-full rounded-lg object-cover" />
                  <h3 className="mt-2 font-semibold text-slate-800">{pkg.title}</h3>
                  <p className="text-sm text-slate-600">{pkg.duration}</p>
                  <p className="text-sm font-semibold text-indigo-700">
                    {"\u20B9"}
                    {pkg.basePrice.toLocaleString("en-IN")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingPackage(pkg)}
                    className="mt-2 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition duration-300 hover:shadow-md"
                  >
                    Book Now
                  </button>
                </article>
              ))}
            </div>
          )}
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
    </section>
  );
}
