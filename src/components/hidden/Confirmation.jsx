const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function Confirmation({ booking }) {
  if (!booking) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center text-slate-300">
        Booking not found.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Step 3 to Confirmation</p>
      <h1 className="mt-1 text-2xl font-bold text-white">Booking Confirmed</h1>
      <p className="mt-2 text-sm text-slate-300">Your hidden place booking is secured.</p>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-slate-950 p-3">
          <p className="text-xs text-slate-400">Booking ID</p>
          <p className="font-semibold text-white">{booking.bookingId}</p>
        </div>
        <div className="rounded-xl bg-slate-950 p-3">
          <p className="text-xs text-slate-400">Destination</p>
          <p className="font-semibold text-white">{booking.placeName}</p>
        </div>
        <div className="rounded-xl bg-slate-950 p-3">
          <p className="text-xs text-slate-400">Booking Type</p>
          <p className="font-semibold text-white">{booking.title}</p>
        </div>
        <div className="rounded-xl bg-slate-950 p-3">
          <p className="text-xs text-slate-400">Paid Amount</p>
          <p className="font-semibold text-white">{formatPrice(booking.total)}</p>
        </div>
      </div>
    </div>
  );
}
