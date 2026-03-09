import React from "react";

const formatPrice = (value) => `\u20B9${value.toLocaleString("en-IN")}`;
const formatFeature = (value) => (value ? "Yes" : "No");

export default function CompareModal({ isOpen, hotels, onClose, nights }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/55 p-4 transition duration-300">
      <div className="w-full max-w-5xl rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Compare Hotels</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Close
          </button>
        </div>
        {hotels.length === 0 ? (
          <p className="text-sm text-slate-500">Select up to 3 hotels to compare.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-700">Hotel Name</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Price</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Rating</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Pool</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">WiFi</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Spa</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel) => (
                  <tr key={hotel.id} className="border-b border-slate-100 align-top">
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">{hotel.name}</div>
                      <div className="text-xs text-slate-500">{hotel.city}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {formatPrice(hotel.pricePerNight * nights)} for {nights} night{nights > 1 ? "s" : ""}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-700">{formatPrice(hotel.pricePerNight)} / night</td>
                    <td className="px-4 py-4 text-slate-700">⭐ {hotel.rating}</td>
                    <td className="px-4 py-4 text-slate-700">
                      {formatFeature((hotel.amenities || []).includes("Swimming Pool"))}
                    </td>
                    <td className="px-4 py-4 text-slate-700">
                      {formatFeature((hotel.amenities || []).includes("Wi-Fi"))}
                    </td>
                    <td className="px-4 py-4 text-slate-700">
                      {formatFeature((hotel.amenities || []).includes("Spa"))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
