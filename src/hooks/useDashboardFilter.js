import { useMemo } from "react";

const sortItems = (items, sortBy, mode) => {
  const list = [...items];
  if (sortBy === "priceLowToHigh") {
    return list.sort((a, b) => (a.pricePerNight ?? a.priceForTwo) - (b.pricePerNight ?? b.priceForTwo));
  }
  if (sortBy === "priceHighToLow") {
    return list.sort((a, b) => (b.pricePerNight ?? b.priceForTwo) - (a.pricePerNight ?? a.priceForTwo));
  }
  if (sortBy === "rating") {
    return list.sort((a, b) => b.rating - a.rating);
  }
  if (sortBy === "popularity") {
    return list.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
  }
  return mode === "hotels" ? list.sort((a, b) => b.rating - a.rating) : list;
};

export default function useDashboardFilter({
  items = [],
  mode = "hotels",
  searchLocation = "",
  sortBy = "popularity",
  nights = 1,
  hotelFilters = {},
  restaurantFilters = {},
}) {
  const filteredItems = useMemo(() => {
    const normalizedSearch = searchLocation.trim().toLowerCase();

    const searched = items.filter((item) => {
      if (!normalizedSearch) {
        return true;
      }
      const stack = [
        item.name,
        item.city,
        item.location,
        item.propertyType,
        ...(item.highlights || []),
      ]
        .join(" ")
        .toLowerCase();
      return stack.includes(normalizedSearch);
    });

    if (mode === "hotels") {
      const minPrice = hotelFilters.priceRange?.[0] ?? 0;
      const maxPrice = hotelFilters.priceRange?.[1] ?? Number.MAX_SAFE_INTEGER;
      const selectedRatings = hotelFilters.userRatings || [];
      const selectedTypes = hotelFilters.propertyTypes || [];
      const selectedAmenities = hotelFilters.amenities || [];
      const selectedBrands = hotelFilters.luxuryBrands || [];

      const ratingMatch = (hotel) => {
        if (selectedRatings.length === 0) {
          return true;
        }
        return selectedRatings.some((value) => {
          if (value === "good") return hotel.rating >= 3;
          if (value === "veryGood") return hotel.rating >= 3.5;
          if (value === "excellent") return hotel.rating >= 4.2;
          return true;
        });
      };

      const filtered = searched
        .filter((hotel) => ratingMatch(hotel))
        .filter((hotel) => hotel.pricePerNight >= minPrice && hotel.pricePerNight <= maxPrice)
        .filter((hotel) =>
          selectedTypes.length === 0
            ? true
            : selectedTypes.some((type) => hotel.propertyType.toLowerCase() === type.toLowerCase())
        )
        .filter((hotel) =>
          selectedAmenities.length === 0
            ? true
            : selectedAmenities.every((amenity) =>
                (hotel.amenities || []).map((item) => item.toLowerCase()).includes(amenity.toLowerCase())
              )
        )
        .filter((hotel) =>
          selectedBrands.length === 0
            ? true
            : selectedBrands.some((brand) => (hotel.luxuryBrand || "").toLowerCase() === brand.toLowerCase())
        )
        .filter((hotel) => nights >= 1 && Number.isFinite(hotel.pricePerNight));

      return sortItems(filtered, sortBy, mode);
    }

    const minPriceForTwo = restaurantFilters.priceForTwoRange?.[0] ?? 0;
    const maxPriceForTwo = restaurantFilters.priceForTwoRange?.[1] ?? Number.MAX_SAFE_INTEGER;
    const selectedCuisines = restaurantFilters.cuisines || [];
    const minRating = restaurantFilters.minRating ?? 0;
    const vegType = restaurantFilters.vegType ?? "All";

    const filteredRestaurants = searched
      .filter((item) =>
        selectedCuisines.length === 0
          ? true
          : selectedCuisines.some(
              (cuisine) => (item.cuisineType || "").toLowerCase() === cuisine.toLowerCase()
            )
      )
      .filter((item) => item.rating >= minRating)
      .filter((item) => item.priceForTwo >= minPriceForTwo && item.priceForTwo <= maxPriceForTwo)
      .filter((item) => {
        if (vegType === "All") return true;
        return item.vegType?.toLowerCase() === vegType.toLowerCase();
      });

    return sortItems(filteredRestaurants, sortBy, mode);
  }, [hotelFilters, items, mode, nights, restaurantFilters, searchLocation, sortBy]);

  return { filteredItems };
}
