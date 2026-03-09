import { useMemo } from "react";

const SEARCH_ICON = "search";
const HOTEL_ICON = "hotel";
const BEACH_ICON = "beach";
const FOOD_ICON = "food";

export default function useSearchSuggestions(query = "") {
  return useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const lower = trimmed.toLowerCase();
    const titleCase = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

    const items = [
      { id: `${lower}-city`, label: titleCase, icon: SEARCH_ICON, to: "/places" },
      { id: `${lower}-hotels`, label: `${titleCase} Hotels`, icon: HOTEL_ICON, to: "/hotels" },
      { id: `${lower}-beaches`, label: `${titleCase} Beaches`, icon: BEACH_ICON, to: "/places" },
      { id: `${lower}-restaurants`, label: `${titleCase} Restaurants`, icon: FOOD_ICON, to: "/restaurants" },
    ];

    return items.filter((item, index, array) => array.findIndex((entry) => entry.label === item.label) === index);
  }, [query]);
}
