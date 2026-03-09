import { useMemo, useState } from "react";

function getDefaultCategory(item) {
  return item.propertyType || item.cuisineType || item.type || item.category || "All";
}

export default function InteractiveMapSection({
  title = "Map Explorer",
  description = "Browse locations on the map",
  items = [],
  previewLabel = "Preview",
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => getDefaultCategory(item)).filter(Boolean)))],
    [items]
  );

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        selectedCategory === "All" ? true : getDefaultCategory(item) === selectedCategory
      ),
    [items, selectedCategory]
  );

  const selectedItem = filteredItems.find((item) => item.id === selectedId) || filteredItems[0] || null;
  const query = selectedItem
    ? encodeURIComponent([selectedItem.name || selectedItem.title, selectedItem.location || selectedItem.city].filter(Boolean).join(", "))
    : "";

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setSelectedId(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          {selectedItem ? (
            <iframe
              title={`${selectedItem.name || selectedItem.title} map`}
              src={`https://maps.google.com/maps?q=${query}&z=13&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="grid h-[420px] place-items-center bg-slate-50 text-slate-500">
              No locations available for this filter.
            </div>
          )}
        </div>

        <div className="space-y-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              className={`w-full rounded-2xl border p-4 text-left transition duration-300 ${
                selectedItem?.id === item.id
                  ? "border-indigo-200 bg-indigo-50"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-900">{item.name || item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.location || item.city}</p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  ⭐ {item.rating || "4.5"}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {item.description || item.date || item.distanceFromCenter || previewLabel}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
