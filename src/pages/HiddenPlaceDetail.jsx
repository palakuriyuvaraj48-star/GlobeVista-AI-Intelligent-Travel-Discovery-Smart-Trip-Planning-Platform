import { useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThingsToDo from "../components/hidden/ThingsToDo";
import TravelOptions from "../components/hidden/TravelOptions";
import StaySection from "../components/hidden/StaySection";
import BookingPanel from "../components/hidden/BookingPanel";
import PaymentModal from "../components/hidden/PaymentModal";
import { findHiddenPlaceByName } from "../data/hiddenPlaces";
import TripTimeline from "../components/TripTimeline";

const tabs = [
  { key: "things", label: "Things to Do" },
  { key: "best-time", label: "Best Time To Visit" },
  { key: "book", label: "Book Your Trip" },
  { key: "travel", label: "Travel" },
  { key: "stay", label: "Stay" },
];

const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function HiddenPlaceDetail() {
  const { placeName } = useParams();
  const navigate = useNavigate();
  const place = useMemo(() => findHiddenPlaceByName(placeName), [placeName]);
  const [activeTab, setActiveTab] = useState("things");
  const [activeHero, setActiveHero] = useState(0);
  const [bookingItem, setBookingItem] = useState(null);
  const [paymentPayload, setPaymentPayload] = useState(null);
  const [travelers, setTravelers] = useState(2);
  const [selectedNights, setSelectedNights] = useState(2);
  const [coupon, setCoupon] = useState("");
  const journeySteps = [
    {
      title: "Arrival and Local Transfer",
      description: "Smooth pickup with pre-booked transport options.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 16l18-5-18-5 4 5-4 5z" />
        </svg>
      ),
    },
    {
      title: "Check-in and Rest",
      description: "Settle into stays curated for calm surroundings.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-4h6v4" />
        </svg>
      ),
    },
    {
      title: "Signature Trail",
      description: "Local hikes, scenic points, and nature-led activities.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20l7-11 4 6 2-3 5 8H3z" />
        </svg>
      ),
    },
    {
      title: "Sunset View",
      description: "Golden hour experiences with guided stops.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v4M4 11h16M5 19h14" />
          <path d="M7 15a5 5 0 0110 0" />
        </svg>
      ),
    },
    {
      title: "Dinner and Local Flavors",
      description: "Curated recommendations for local food.",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 3v7a4 4 0 004 4v7M10 3v7a4 4 0 01-4 4" />
          <path d="M14 3h3a3 3 0 013 3v15" />
        </svg>
      ),
    },
  ];

  const sectionRefs = {
    things: useRef(null),
    "best-time": useRef(null),
    book: useRef(null),
    travel: useRef(null),
    stay: useRef(null),
  };

  const packageTotals = useMemo(() => {
    if (!place) return {};
    return place.packages.reduce((acc, pkg) => {
      const base = pkg.basePrice * travelers * (selectedNights / Math.max(1, pkg.nights));
      const tax = base * 0.18;
      const platformFee = 899;
      const discount = coupon.trim().toUpperCase() === "HIDDEN10" ? base * 0.1 : 0;
      acc[pkg.id] = { base, tax, platformFee, discount, total: base + tax + platformFee - discount };
      return acc;
    }, {});
  }, [coupon, place, selectedNights, travelers]);

  const scrollToTab = (key) => {
    setActiveTab(key);
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const saveHiddenBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("hiddenBookings") || "[]");
    localStorage.setItem("hiddenBookings", JSON.stringify([booking, ...existing]));
  };

  if (!place) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center text-slate-300">
          Hidden place not found.
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-10">
      <section className="relative h-[64vh] min-h-[420px] overflow-hidden">
        {place.heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={place.name}
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
              activeHero === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold text-white">{place.name}</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">{place.description}</p>
          <div className="mt-4 flex gap-2">
            {place.heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveHero(index)}
                className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition duration-300 ${
                  activeHero === index ? "border-cyan-400" : "border-slate-600"
                }`}
              >
                <img src={image} alt={`${place.name}-${index}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-0 border-y border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3">
          <div className="relative flex gap-2 rounded-full bg-slate-900 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => scrollToTab(tab.key)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                  activeTab === tab.key ? "bg-cyan-500/30 text-cyan-200" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-300 transition duration-300 ${
                    activeTab === tab.key ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto mt-6 max-w-7xl space-y-10 px-4">
        <div ref={sectionRefs.things}>
          <ThingsToDo place={place} />
        </div>

        <section id="best-time" ref={sectionRefs["best-time"]} className="scroll-mt-36 rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
          <h2 className="text-2xl font-bold text-white">Best Time To Visit</h2>
          <p className="mt-2 text-sm text-slate-300">{place.bestTime}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {place.highlights.map((item) => (
              <span key={item} className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        <TripTimeline
          title={`Your ${place.name} Journey`}
          subtitle="A simple flow to guide your trip from arrival to local experiences."
          steps={journeySteps}
        />

        <section id="book" ref={sectionRefs.book} className="scroll-mt-36 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Book Your Trip</h2>
            <p className="text-sm text-slate-300">Flexible packages with live cost updates.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 p-4 md:grid-cols-3">
            <label className="text-sm font-semibold text-slate-200">
              Nights
              <input
                type="number"
                min={1}
                value={selectedNights}
                onChange={(event) => setSelectedNights(Math.max(1, Number(event.target.value) || 1))}
                className="mt-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
              />
            </label>
            <label className="text-sm font-semibold text-slate-200">
              Travelers
              <input
                type="number"
                min={1}
                value={travelers}
                onChange={(event) => setTravelers(Math.max(1, Number(event.target.value) || 1))}
                className="mt-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
              />
            </label>
            <label className="text-sm font-semibold text-slate-200">
              Coupon
              <input
                type="text"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder="HIDDEN10"
                className="mt-1 h-10 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {place.packages.map((pkg) => {
              const calc = packageTotals[pkg.id];
              return (
                <article key={pkg.id} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                  <img src={pkg.image} alt={pkg.duration} className="h-44 w-full rounded-xl object-cover" />
                  <h3 className="mt-3 text-lg font-bold text-white">{pkg.duration}</h3>
                  <p className="text-sm text-cyan-300">Rating {pkg.rating}</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    {pkg.inclusions.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-slate-300">Base: {formatPrice(calc?.base)}</p>
                  <p className="text-sm text-slate-300">Tax 18%: {formatPrice(calc?.tax)}</p>
                  <p className="text-sm text-slate-300">Platform fee: {formatPrice(calc?.platformFee)}</p>
                  <p className="text-sm font-bold text-cyan-200">Total: {formatPrice(calc?.total)}</p>
                  <button
                    type="button"
                    onClick={() =>
                      setBookingItem({
                        id: `${place.id}-${pkg.id}`,
                        title: `${place.name} ${pkg.duration} Package`,
                        basePrice: calc?.total || pkg.basePrice,
                        duration: pkg.duration,
                        nights: selectedNights,
                        destinations: [place.name],
                      })
                    }
                    className="mt-3 h-10 w-full rounded-lg bg-gradient-to-r from-gv-ocean to-gv-teal text-sm font-semibold text-white transition duration-300 hover:opacity-90"
                  >
                    BOOK PACKAGE
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <div ref={sectionRefs.travel}>
          <TravelOptions place={place} onBook={setBookingItem} />
        </div>
        <div ref={sectionRefs.stay}>
          <StaySection place={place} onBook={setBookingItem} />
        </div>
      </main>

      <BookingPanel
        isOpen={Boolean(bookingItem)}
        bookingItem={bookingItem}
        onClose={() => setBookingItem(null)}
        onProceed={(payload) => {
          setPaymentPayload(payload);
          setBookingItem(null);
        }}
      />
      <PaymentModal
        isOpen={Boolean(paymentPayload)}
        payload={paymentPayload}
        onClose={() => setPaymentPayload(null)}
        onSuccess={(booking) => {
          saveHiddenBooking(booking);
          setPaymentPayload(null);
          navigate(`/confirmation/${booking.bookingId}`);
        }}
      />
    </div>
  );
}
