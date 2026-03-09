import { useState } from "react";

export default function PriceAlertModal({ hotel, isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const mockDrop = hotel ? Math.round(hotel.pricePerNight * 0.1) : 1200;

  if (!isOpen || !hotel) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/55 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Track Hotel Price</h2>
            <p className="mt-1 text-sm text-slate-600">{hotel.name}</p>
          </div>
          <button type="button" onClick={onClose} className="text-sm font-semibold text-slate-500">
            Close
          </button>
        </div>

        {!submitted ? (
          <div className="mt-6 space-y-4">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email for alerts"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
            />
            <button
              type="button"
              onClick={() => setSubmitted(Boolean(email.trim()))}
              className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Start Tracking
            </button>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-emerald-800">
            <p className="font-semibold">Price dropped by ₹{mockDrop.toLocaleString("en-IN")}!</p>
            <p className="mt-2 text-sm">Mock alert enabled for {email}. We will notify you when a better rate appears.</p>
          </div>
        )}
      </div>
    </div>
  );
}
