import React, { useEffect, useMemo, useRef, useState } from "react";

export default function LocationSearch({
  searchLocation,
  setSearchLocation,
  suggestions,
  onSelect,
  placeholder = "Search city, hotel, or location",
}) {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const mergedSuggestions = useMemo(() => {
    const query = searchLocation.trim();
    const cityItems = (suggestions?.cities || []).map((city) => ({
      key: `city-${city}`,
      value: city,
      label: city,
      type: "Popular City",
    }));
    const hotelItems = (suggestions?.hotels || []).map((hotel) => ({
      key: `hotel-${hotel.id}`,
      value: hotel.name,
      label: `${hotel.name} - ${hotel.city}`,
      type: "Hotel Match",
    }));
    const discoveryItems = query
      ? ["hotels", "beaches", "restaurants", "nightlife"].map((suffix) => ({
          key: `discovery-${suffix}`,
          value: `${query} ${suffix}`.trim(),
          label: `${query} ${suffix}`.trim(),
          type: "Suggested Search",
        }))
      : [];
    return [...cityItems, ...discoveryItems, ...hotelItems];
  }, [searchLocation, suggestions]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    }
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (!isOpen || mergedSuggestions.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % mergedSuggestions.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? mergedSuggestions.length - 1 : prev - 1));
    }
    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      const selected = mergedSuggestions[activeIndex];
      setSearchLocation(selected.value);
      onSelect?.(selected.value);
      setIsOpen(false);
    }
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="rounded-full border border-cyan-200 bg-white p-2 shadow-lg shadow-cyan-100/50">
        <input
          type="text"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="h-14 w-full rounded-full px-6 text-base font-medium text-slate-800 outline-none placeholder:text-slate-400"
        />
      </div>

      <div
        className={`absolute left-0 right-0 z-30 mt-2 origin-top rounded-2xl border border-slate-200 bg-white p-2 shadow-xl transition duration-300 ${
          isOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {mergedSuggestions.length === 0 ? (
          <p className="px-4 py-6 text-sm text-slate-500">No suggestions found.</p>
        ) : (
          <ul className="max-h-72 space-y-1 overflow-y-auto">
            {mergedSuggestions.map((item, index) => (
              <li key={item.key}>
                <button
                  type="button"
                  onMouseDown={() => {
                    setSearchLocation(item.value);
                    onSelect?.(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded-xl px-4 py-3 text-left transition duration-300 ${
                    activeIndex === index
                      ? "bg-cyan-50 text-cyan-800"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.type}</p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
