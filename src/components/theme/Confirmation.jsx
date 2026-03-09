import React from "react";

const formatPrice = (value) => `\u20B9${Math.round(value || 0).toLocaleString("en-IN")}`;

export default function Confirmation({ booking }) {
  if (!booking) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
        Booking not found.
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Booking Confirmation</h1>
      <p className="mt-1 text-sm text-slate-600">Your booking has been successfully completed.</p>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Booking ID</p>
          <p>{booking.bookingId}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Package</p>
          <p>{booking.packageTitle}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Travel Date</p>
          <p>{booking.startDate || "To be announced"}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Total Paid</p>
          <p>{formatPrice(booking.total)}</p>
        </div>
      </div>
    </section>
  );
}
