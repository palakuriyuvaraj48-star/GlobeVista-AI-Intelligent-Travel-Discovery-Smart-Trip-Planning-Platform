import React, { useMemo, useState } from "react";
import InteractiveMapSection from "../components/InteractiveMapSection";
import FilterSidebar from "../components/dashboard/FilterSidebar";
import RestaurantCard from "../components/dashboard/RestaurantCard";
import useDashboardFilter from "../hooks/useDashboardFilter";
import { restaurantDashboardData } from "../data/dashboardData";

const getRestaurantPriceBounds = (items) => {
  const prices = items.map((item) => item.priceForTwo);
  return [Math.min(...prices), Math.max(...prices)];
};

export default function Restaurants() {
  const restaurantsData = useMemo(
    () => (Array.isArray(restaurantDashboardData) ? restaurantDashboardData : []),
    []
  );
  const restaurantPriceBounds = useMemo(
    () => getRestaurantPriceBounds(restaurantsData),
    [restaurantsData]
  );

  const [searchLocation, setSearchLocation] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [restaurantFilters, setRestaurantFilters] = useState({
    cuisines: [],
    minRating: 3.5,
    priceForTwoRange: restaurantPriceBounds,
    vegType: "All",
  });

  const { filteredItems: filteredRestaurants } = useDashboardFilter({
    items: restaurantsData,
    mode: "restaurants",
    searchLocation,
    sortBy,
    restaurantFilters,
  });

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Restaurants</h1>
          <p className="mt-2 text-emerald-100">Explore top-rated food spots and local favorites.</p>
          <div className="mt-6">
            <input
              type="text"
              value={searchLocation}
              onChange={(event) => setSearchLocation(event.target.value)}
              placeholder="Search restaurant or city"
              className="h-12 w-full max-w-2xl rounded-full border border-emerald-300 bg-white px-5 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition duration-300 focus:ring-2 focus:ring-emerald-200"
          >
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
          </select>

          <div className="rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "grid" ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Grid View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition duration-300 ${
                viewMode === "map" ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <FilterSidebar
              mode="restaurants"
              restaurantFilters={restaurantFilters}
              setRestaurantFilters={setRestaurantFilters}
              restaurantPriceBounds={restaurantPriceBounds}
            />
          </div>

          <div className="lg:col-span-9">
            {filteredRestaurants.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
                No restaurants match your filters.
              </div>
            ) : viewMode === "map" ? (
              <div className="space-y-6">
                <InteractiveMapSection
                  title="Restaurant Map Explorer"
                  description="Filter restaurants by cuisine and switch between map pins and cards without leaving the page."
                  items={filteredRestaurants}
                  previewLabel="Restaurant preview"
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
