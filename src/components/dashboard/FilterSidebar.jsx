import React, { useMemo, useState } from "react";

const hotelRatingOptions = [
  { key: "good", label: "Good 3+" },
  { key: "veryGood", label: "Very Good 3.5+" },
  { key: "excellent", label: "Excellent 4.2+" },
];

const hotelPropertyTypes = ["Hotel", "Resort", "Villa", "Homestay", "Apartment", "Cottage"];
const hotelAmenities = ["Wi-Fi", "Spa", "Swimming Pool", "Free Cancellation", "Breakfast Included"];
const hotelBrands = ["Taj", "Oberoi", "Hilton", "Marriott", "Hyatt", "ITC"];
const restaurantCuisines = ["South Indian", "North Indian", "Chinese", "Fast Food", "Continental"];

function CollapsibleSection({ title, isOpen, onToggle, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-slate-900">{title}</span>
        <span
          className={`text-slate-500 transition duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ^
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] px-4 pb-4 opacity-100" : "max-h-0 px-4 pb-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default function FilterSidebar({
  mode,
  hotelFilters,
  setHotelFilters,
  restaurantFilters,
  setRestaurantFilters,
  hotelPriceBounds = [0, 100000],
  restaurantPriceBounds = [0, 5000],
}) {
  const [sections, setSections] = useState({
    rating: true,
    price: true,
    propertyType: true,
    amenities: true,
    brands: false,
    cuisines: true,
    vegType: true,
  });

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const hotelPriceRange = useMemo(
    () => hotelFilters?.priceRange || hotelPriceBounds,
    [hotelFilters?.priceRange, hotelPriceBounds]
  );

  const restaurantPriceRange = useMemo(
    () => restaurantFilters?.priceForTwoRange || restaurantPriceBounds,
    [restaurantFilters?.priceForTwoRange, restaurantPriceBounds]
  );

  const toggleHotelListFilter = (key, value) => {
    setHotelFilters((prev) => {
      const exists = prev[key].includes(value);
      return {
        ...prev,
        [key]: exists ? prev[key].filter((item) => item !== value) : [...prev[key], value],
      };
    });
  };

  const toggleRestaurantCuisine = (value) => {
    setRestaurantFilters((prev) => {
      const exists = prev.cuisines.includes(value);
      return {
        ...prev,
        cuisines: exists ? prev.cuisines.filter((item) => item !== value) : [...prev.cuisines, value],
      };
    });
  };

  return (
    <aside className="sticky top-24 h-fit w-full space-y-3 animate-slideIn">
      {mode === "hotels" ? (
        <>
          <CollapsibleSection
            title="User Rating"
            isOpen={sections.rating}
            onToggle={() => toggleSection("rating")}
          >
            <div className="space-y-2">
              {hotelRatingOptions.map((option) => (
                <label key={option.key} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={hotelFilters.userRatings.includes(option.key)}
                    onChange={() => toggleHotelListFilter("userRatings", option.key)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Price Range"
            isOpen={sections.price}
            onToggle={() => toggleSection("price")}
          >
            <div className="space-y-3">
              <p className="text-xs font-medium text-slate-500">
                INR {hotelPriceRange[0]} - INR {hotelPriceRange[1]}
              </p>
              <input
                type="range"
                min={hotelPriceBounds[0]}
                max={hotelPriceBounds[1]}
                value={hotelPriceRange[0]}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setHotelFilters((prev) => ({
                    ...prev,
                    priceRange: [Math.min(value, prev.priceRange[1]), prev.priceRange[1]],
                  }));
                }}
                className="w-full accent-cyan-600"
              />
              <input
                type="range"
                min={hotelPriceBounds[0]}
                max={hotelPriceBounds[1]}
                value={hotelPriceRange[1]}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setHotelFilters((prev) => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], Math.max(value, prev.priceRange[0])],
                  }));
                }}
                className="w-full accent-cyan-600"
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Property Type"
            isOpen={sections.propertyType}
            onToggle={() => toggleSection("propertyType")}
          >
            <div className="space-y-2">
              {hotelPropertyTypes.map((type) => (
                <label key={type} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={hotelFilters.propertyTypes.includes(type)}
                    onChange={() => toggleHotelListFilter("propertyTypes", type)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Amenities"
            isOpen={sections.amenities}
            onToggle={() => toggleSection("amenities")}
          >
            <div className="space-y-2">
              {hotelAmenities.map((amenity) => (
                <label key={amenity} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={hotelFilters.amenities.includes(amenity)}
                    onChange={() => toggleHotelListFilter("amenities", amenity)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Luxury Brands"
            isOpen={sections.brands}
            onToggle={() => toggleSection("brands")}
          >
            <div className="space-y-2">
              {hotelBrands.map((brand) => (
                <label key={brand} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={hotelFilters.luxuryBrands.includes(brand)}
                    onChange={() => toggleHotelListFilter("luxuryBrands", brand)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>
        </>
      ) : (
        <>
          <CollapsibleSection
            title="Cuisine Type"
            isOpen={sections.cuisines}
            onToggle={() => toggleSection("cuisines")}
          >
            <div className="space-y-2">
              {restaurantCuisines.map((cuisine) => (
                <label key={cuisine} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={restaurantFilters.cuisines.includes(cuisine)}
                    onChange={() => toggleRestaurantCuisine(cuisine)}
                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span>{cuisine}</span>
                </label>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Rating"
            isOpen={sections.rating}
            onToggle={() => toggleSection("rating")}
          >
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-500">
                Minimum rating: {restaurantFilters.minRating.toFixed(1)}
              </p>
              <input
                type="range"
                min={3}
                max={5}
                step={0.1}
                value={restaurantFilters.minRating}
                onChange={(event) =>
                  setRestaurantFilters((prev) => ({
                    ...prev,
                    minRating: Number(event.target.value),
                  }))
                }
                className="w-full accent-teal-600"
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Price for Two"
            isOpen={sections.price}
            onToggle={() => toggleSection("price")}
          >
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-500">
                INR {restaurantPriceRange[0]} - INR {restaurantPriceRange[1]}
              </p>
              <input
                type="range"
                min={restaurantPriceBounds[0]}
                max={restaurantPriceBounds[1]}
                value={restaurantPriceRange[1]}
                onChange={(event) =>
                  setRestaurantFilters((prev) => ({
                    ...prev,
                    priceForTwoRange: [prev.priceForTwoRange[0], Number(event.target.value)],
                  }))
                }
                className="w-full accent-teal-600"
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Veg / Non-Veg"
            isOpen={sections.vegType}
            onToggle={() => toggleSection("vegType")}
          >
            <div className="grid grid-cols-3 gap-2">
              {["All", "Veg", "Non-Veg"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setRestaurantFilters((prev) => ({ ...prev, vegType: type }))}
                  className={`rounded-lg border px-3 py-2 text-xs font-semibold transition duration-300 ${
                    restaurantFilters.vegType === type
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </CollapsibleSection>
        </>
      )}
    </aside>
  );
}
