import { useMemo, useState } from "react";

const groups = [
  { key: "mostLoved", label: "Most Loved Places" },
  { key: "memorable", label: "Memorable Experiences" },
  { key: "around", label: "What's Around" },
  { key: "adventure", label: "Adventure" },
];

export default function ThingsToDo({ place }) {
  const [activeGroup, setActiveGroup] = useState("mostLoved");
  const [selectedItem, setSelectedItem] = useState(null);

  const activeItems = useMemo(() => place.thingsToDo?.[activeGroup] || [], [activeGroup, place.thingsToDo]);

  return (
    <section id="things" className="scroll-mt-36 space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-white">Things to See & Do</h2>
        <p className="text-sm text-slate-300">Curated experiences with premium planning support.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {groups.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActiveGroup(item.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
              activeGroup === item.key
                ? "bg-cyan-500/30 text-cyan-200"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {activeItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 transition duration-300 hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
            <div className="space-y-2 p-4">
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-xs font-semibold text-cyan-300">{item.subtitle}</p>
              <p className="text-sm text-slate-300">{item.description}</p>
              <p className="text-xs text-slate-400">Suggested Duration: {item.duration}</p>
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="h-9 w-full rounded-lg bg-indigo-600 text-xs font-semibold text-white transition duration-300 hover:bg-indigo-700"
              >
                EXPLORE
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedItem ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 px-4">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl animate-scaleIn">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-sm text-cyan-300">{selectedItem.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800"
              >
                Close
              </button>
            </div>
            <img src={selectedItem.image} alt={selectedItem.title} className="h-52 w-full rounded-xl object-cover" />
            <p className="mt-3 text-sm text-slate-300">{selectedItem.description}</p>
            <p className="mt-2 text-xs text-slate-400">Suggested Duration: {selectedItem.duration}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
