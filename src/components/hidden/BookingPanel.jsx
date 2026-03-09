import { useEffect, useMemo, useState } from "react";

const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function BookingPanel({ isOpen, bookingItem, onClose, onProceed }) {
  const [startDate, setStartDate] = useState("");
  const [nights, setNights] = useState(bookingItem?.nights || 1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  useEffect(() => {
    if (!isOpen) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    setNights(bookingItem?.nights || 1);
  }, [bookingItem]);

  const costs = useMemo(() => {
    const baseSeed = bookingItem?.basePrice || 0;
    const travelerFactor = adults + children * 0.4;
    const base = baseSeed * Math.max(1, travelerFactor / 2);
    const taxes = base * 0.18;
    const serviceFee = rooms * 499;
    const total = base + taxes + serviceFee;
    return { base, taxes, serviceFee, total };
  }, [adults, bookingItem?.basePrice, children, rooms]);

  if (!isOpen || !bookingItem) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/70 px-4">
      <div className="w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl animate-scaleIn">
        <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Step 1 to Details</p>
            <h2 className="text-xl font-bold text-white">{bookingItem.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            <label className="block text-sm font-medium text-slate-200">
              Date
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="mt-1 h-11 w-full rounded-xl border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
              />
            </label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <label className="text-sm font-medium text-slate-200">
                Nights
                <input
                  type="number"
                  min={1}
                  value={nights}
                  onChange={(event) => setNights(Math.max(1, Number(event.target.value) || 1))}
                  className="mt-1 h-11 w-full rounded-xl border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Adults
                <input
                  type="number"
                  min={1}
                  value={adults}
                  onChange={(event) => setAdults(Math.max(1, Number(event.target.value) || 1))}
                  className="mt-1 h-11 w-full rounded-xl border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Children
                <input
                  type="number"
                  min={0}
                  value={children}
                  onChange={(event) => setChildren(Math.max(0, Number(event.target.value) || 0))}
                  className="mt-1 h-11 w-full rounded-xl border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Rooms
                <input
                  type="number"
                  min={1}
                  value={rooms}
                  onChange={(event) => setRooms(Math.max(1, Number(event.target.value) || 1))}
                  className="mt-1 h-11 w-full rounded-xl border border-slate-600 bg-slate-950 px-3 text-white outline-none focus:border-cyan-500"
                />
              </label>
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Price Breakdown</p>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Base</span>
                <span>{formatPrice(costs.base)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>{formatPrice(costs.taxes)}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>{formatPrice(costs.serviceFee)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-700 pt-2 font-bold text-white">
                <span>Total</span>
                <span>{formatPrice(costs.total)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                onProceed({
                  bookingItem,
                  startDate,
                  nights,
                  adults,
                  children,
                  rooms,
                  ...costs,
                })
              }
              className="mt-4 h-10 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
