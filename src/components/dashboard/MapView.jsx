import React, { useMemo } from "react";

export default function MapView({ hotels, selectedId, onSelect }) {
  const bounds = useMemo(() => {
    if (!hotels.length) return null;
    const lats = hotels.map((hotel) => hotel.lat);
    const lngs = hotels.map((hotel) => hotel.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    return { minLat, maxLat, minLng, maxLng };
  }, [hotels]);

  const markerPositions = useMemo(() => {
    if (!bounds) return [];
    return hotels.map((hotel) => {
      const xRatio = (hotel.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng || 1);
      const yRatio = (hotel.lat - bounds.minLat) / (bounds.maxLat - bounds.minLat || 1);
      return {
        id: hotel.id,
        name: hotel.name,
        price: hotel.pricePerNight,
        left: `${Math.min(92, Math.max(8, xRatio * 84 + 8))}%`,
        top: `${Math.min(92, Math.max(8, (1 - yRatio) * 84 + 8))}%`,
      };
    });
  }, [bounds, hotels]);

  return (
    <div className="relative h-[480px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.7),transparent_40%)]" />
      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow">
        Map View
      </div>
      {markerPositions.map((marker) => (
        <button
          key={marker.id}
          type="button"
          onClick={() => onSelect(marker.id)}
          style={{ left: marker.left, top: marker.top }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-1 text-xs font-bold shadow transition duration-300 ${
            selectedId === marker.id
              ? "scale-110 border-cyan-700 bg-cyan-600 text-white"
              : "border-cyan-200 bg-white text-cyan-700 hover:scale-110"
          }`}
          title={marker.name}
        >
          {`\u20B9${marker.price.toLocaleString("en-IN")}`}
        </button>
      ))}
    </div>
  );
}
