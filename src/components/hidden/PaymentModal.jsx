import { useEffect, useState } from "react";

const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function PaymentModal({ isOpen, payload, onClose, onSuccess }) {
  const [method, setMethod] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upi, setUpi] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen || !payload) return null;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      const bookingId = `HP${Date.now().toString().slice(-8)}`;
      onSuccess({
        bookingId,
        placeName: payload.bookingItem?.destinations?.[0],
        title: payload.bookingItem?.title,
        total: payload.total,
        method,
        paidAt: new Date().toISOString(),
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl animate-scaleIn">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Step 2 to Payment</p>
            <h3 className="text-lg font-bold text-white">Secure Payment</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="mb-3 flex gap-2">
          {["Card", "UPI"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMethod(item)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                method === item ? "bg-cyan-500/30 text-cyan-200" : "bg-slate-800 text-slate-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {method === "Card" ? (
          <div className="space-y-2">
            <input
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              placeholder="Card Number"
              className="h-10 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-500"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                value={expiry}
                onChange={(event) => setExpiry(event.target.value)}
                placeholder="MM/YY"
                className="h-10 rounded-lg border border-slate-600 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-500"
              />
              <input
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
                placeholder="CVV"
                className="h-10 rounded-lg border border-slate-600 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        ) : (
          <input
            value={upi}
            onChange={(event) => setUpi(event.target.value)}
            placeholder="UPI ID"
            className="h-10 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-500"
          />
        )}

        <div className="mt-3 rounded-lg bg-slate-950 p-3 text-sm text-slate-300">
          <div className="flex justify-between font-semibold text-white">
            <span>Total</span>
            <span>{formatPrice(payload.total)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePay}
          disabled={loading}
          className="mt-4 h-10 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-sm font-semibold text-white transition duration-300 hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
