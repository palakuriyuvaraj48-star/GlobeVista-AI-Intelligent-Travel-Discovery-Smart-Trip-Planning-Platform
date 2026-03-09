import { useEffect, useMemo, useState } from "react";

const formatPrice = (value) => `\u20B9${Math.round(value).toLocaleString("en-IN")}`;

export default function BookingPanel({ isOpen, packageItem, onClose, onProceedPayment }) {
  const [startDate, setStartDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Card");

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const priceDetails = useMemo(() => {
    const travelerWeight = adults + children * 0.5;
    const basePrice = (packageItem?.basePrice || 0) * travelerWeight;
    const taxes = basePrice * 0.12;
    const serviceFee = rooms * 399;
    const discount = coupon.trim().toUpperCase() === "SAVE10" ? basePrice * 0.1 : 0;
    const total = Math.max(0, basePrice + taxes + serviceFee - discount);
    return { travelerWeight, basePrice, taxes, serviceFee, discount, total };
  }, [adults, children, coupon, packageItem?.basePrice, rooms]);

  if (!isOpen || !packageItem) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/60 px-4 py-6">
      <div className="w-full max-w-5xl rounded-2xl bg-white p-5 shadow-2xl animate-scaleIn">
        <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Step 1 of 4
            </p>
            <h2 className="text-xl font-bold text-slate-900">Booking Details</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">{packageItem.title}</h3>
              <p className="text-sm text-slate-500">{packageItem.duration}</p>
              <p className="mt-1 text-sm text-slate-600">
                Destinations: {packageItem.destinations.join(", ")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1 text-sm font-medium text-slate-700">
                Start Date
                <input
                  type="date"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                />
              </label>
              <div className="grid grid-cols-3 gap-2">
                <label className="space-y-1 text-sm font-medium text-slate-700">
                  Adults
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={(event) => setAdults(Math.max(1, Number(event.target.value) || 1))}
                    className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                  />
                </label>
                <label className="space-y-1 text-sm font-medium text-slate-700">
                  Children
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={(event) => setChildren(Math.max(0, Number(event.target.value) || 0))}
                    className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                  />
                </label>
                <label className="space-y-1 text-sm font-medium text-slate-700">
                  Rooms
                  <input
                    type="number"
                    min={1}
                    value={rooms}
                    onChange={(event) => setRooms(Math.max(1, Number(event.target.value) || 1))}
                    className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
                  />
                </label>
              </div>
            </div>

            <label className="block space-y-1 text-sm font-medium text-slate-700">
              Apply Coupon
              <input
                type="text"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder="Try SAVE10"
                className="h-11 w-full rounded-xl border border-slate-300 px-3 outline-none focus:border-indigo-500"
              />
            </label>

            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">Payment Method</p>
              <div className="flex flex-wrap gap-2">
                {["Card", "UPI", "Net Banking"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setPaymentMethod(method)}
                    className={`rounded-lg border px-3 py-2 text-sm font-semibold transition duration-300 ${
                      paymentMethod === method
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Booking Summary
              </p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Base Price</span>
                  <span>{formatPrice(priceDetails.basePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>{formatPrice(priceDetails.taxes)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>{formatPrice(priceDetails.serviceFee)}</span>
                </div>
                {priceDetails.discount > 0 ? (
                  <div className="flex justify-between text-emerald-700">
                    <span>Coupon Discount</span>
                    <span>-{formatPrice(priceDetails.discount)}</span>
                  </div>
                ) : null}
              </div>
              <div className="mt-3 border-t border-slate-200 pt-3">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Total</span>
                  <span>{formatPrice(priceDetails.total)}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onProceedPayment({
                    packageId: packageItem.id,
                    packageTitle: packageItem.title,
                    startDate,
                    adults,
                    children,
                    rooms,
                    coupon,
                    paymentMethod,
                    ...priceDetails,
                  })
                }
                className="mt-4 h-11 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
