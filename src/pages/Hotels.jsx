import React, { useEffect, useMemo, useState } from "react";
import LocationSearch from "../components/dashboard/LocationSearch";
import FilterSidebar from "../components/dashboard/FilterSidebar";
import HotelCard from "../components/dashboard/HotelCard";
import CompareModal from "../components/dashboard/CompareModal";
import MapView from "../components/dashboard/MapView";
import InteractiveMapSection from "../components/InteractiveMapSection";
import PriceAlertModal from "../components/PriceAlertModal";
import useDashboardFilter from "../hooks/useDashboardFilter";
import { hotelDashboardData, popularHotelCities } from "../data/dashboardData";

const getHotelPriceBounds = (items) => {
  const prices = items.map((item) => item.pricePerNight);
  return [Math.min(...prices), Math.max(...prices)];
};

export default function Hotels() {
  const hotelsData = useMemo(
    () => (Array.isArray(hotelDashboardData) ? hotelDashboardData : []),
    []
  );
  const hotelPriceBounds = useMemo(() => getHotelPriceBounds(hotelsData), [hotelsData]);

  const [searchLocation, setSearchLocation] = useState("");
  const [nights, setNights] = useState(1);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [highlightedHotelId, setHighlightedHotelId] = useState(null);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [priceAlertHotel, setPriceAlertHotel] = useState(null);
  const [compareIds, setCompareIds] = useState([]);
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem("hotelWishlistIds") || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [hotelFilters, setHotelFilters] = useState({
    userRatings: [],
    priceRange: hotelPriceBounds,
    propertyTypes: [],
    amenities: [],
    luxuryBrands: [],
  });

  useEffect(() => {
    localStorage.setItem("hotelWishlistIds", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    setHotelFilters((prev) => ({
      ...prev,
      priceRange:
        prev.priceRange.length === 2 &&
        prev.priceRange[0] >= hotelPriceBounds[0] &&
        prev.priceRange[1] <= hotelPriceBounds[1]
          ? prev.priceRange
          : hotelPriceBounds,
    }));
  }, [hotelPriceBounds]);

  const suggestions = useMemo(() => {
    const normalized = searchLocation.trim().toLowerCase();
    const cities = normalized
      ? popularHotelCities.filter((city) => city.toLowerCase().includes(normalized))
      : popularHotelCities;

    const hotels = hotelsData
      .filter((hotel) => {
        if (!normalized) return true;
        const stack = `${hotel.name} ${hotel.city} ${hotel.location}`.toLowerCase();
        return stack.includes(normalized);
      })
      .slice(0, 8);

    return { cities: cities.slice(0, 6), hotels };
  }, [hotelsData, searchLocation]);

  const { filteredItems: filteredHotels } = useDashboardFilter({
    items: hotelsData,
    mode: "hotels",
    searchLocation,
    sortBy,
    nights,
    hotelFilters,
  });

  const comparedHotels = useMemo(
    () => hotelsData.filter((hotel) => compareIds.includes(hotel.id)),
    [compareIds, hotelsData]
  );

  const toggleWishlist = (hotelId) => {
    setWishlistIds((prev) =>
      prev.includes(hotelId) ? prev.filter((id) => id !== hotelId) : [...prev, hotelId]
    );
  };

  const toggleCompare = (hotelId) => {
    setCompareIds((prev) => {
      if (prev.includes(hotelId)) {
        return prev.filter((id) => id !== hotelId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, hotelId];
    });
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Hotels</h1>
          <p className="mt-2 text-cyan-100">Discover premium stays across top destinations.</p>

          <div className="mt-8 space-y-4">
            <LocationSearch
              searchLocation={searchLocation}
              setSearchLocation={setSearchLocation}
              suggestions={suggestions}
              onSelect={(value) => setSearchLocation(value)}
              placeholder="Search city, hotel, or location"
            />
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-sm font-semibold text-cyan-100">Nights</label>
              <input
                type="number"
                min={1}
                value={nights}
                onChange={(event) => setNights(Math.max(1, Number(event.target.value) || 1))}
                className="h-11 w-28 rounded-xl border border-cyan-300 bg-white px-3 text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-cyan-200"
              />
              <p className="text-sm text-cyan-100">Total updates live on hotel cards.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition duration-300 focus:ring-2 focus:ring-cyan-200"
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="popularity">Popularity</option>
            </select>
            <button
              type="button"
              onClick={() => setShowCompareModal(true)}
              className="rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 transition duration-300 hover:bg-cyan-100"
            >
              Compare ({compareIds.length}/3)
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "grid" ? "bg-cyan-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Grid View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "map" ? "bg-cyan-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <FilterSidebar
              mode="hotels"
              hotelFilters={hotelFilters}
              setHotelFilters={setHotelFilters}
              hotelPriceBounds={hotelPriceBounds}
            />
          </div>

          <div className="lg:col-span-9">
            {viewMode === "map" ? (
              <div className="space-y-4">
                <MapView
                  hotels={filteredHotels}
                  selectedId={highlightedHotelId}
                  onSelect={(hotelId) => setHighlightedHotelId(hotelId)}
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredHotels.map((hotel) => (
                    <HotelCard
                      key={hotel.id}
                      hotel={hotel}
                      nights={nights}
                      wishlisted={wishlistIds.includes(hotel.id)}
                      onToggleWishlist={toggleWishlist}
                      compared={compareIds.includes(hotel.id)}
                      onToggleCompare={toggleCompare}
                      highlighted={highlightedHotelId === hotel.id}
                      onTrackPrice={setPriceAlertHotel}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredHotels.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    nights={nights}
                    wishlisted={wishlistIds.includes(hotel.id)}
                    onToggleWishlist={toggleWishlist}
                    compared={compareIds.includes(hotel.id)}
                    onToggleCompare={toggleCompare}
                    highlighted={false}
                    onTrackPrice={setPriceAlertHotel}
                  />
                ))}
              </div>
            )}

            <div className="mt-8">
              <InteractiveMapSection
                title="Hotel Map Explorer"
                description="Zoom into stays by property type and preview premium hotels around your selected destination."
                items={filteredHotels}
                previewLabel="Hotel preview"
              />
            </div>

            {filteredHotels.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
                No hotels match your filters.
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <CompareModal
        isOpen={showCompareModal}
        hotels={comparedHotels}
        nights={nights}
        onClose={() => setShowCompareModal(false)}
      />
      <PriceAlertModal
        hotel={priceAlertHotel}
        isOpen={Boolean(priceAlertHotel)}
        onClose={() => setPriceAlertHotel(null)}
      />
    </section>
  );
}
