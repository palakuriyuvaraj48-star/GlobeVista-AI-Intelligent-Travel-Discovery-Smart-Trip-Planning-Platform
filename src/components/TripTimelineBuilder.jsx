import { useMemo, useState } from "react";

const initialPool = [
  { id: "place-1", title: "Hotel check-in", type: "Stay" },
  { id: "place-2", title: "Beach visit", type: "Leisure" },
  { id: "place-3", title: "Restaurant reservation", type: "Dining" },
  { id: "place-4", title: "Sightseeing tour", type: "Activity" },
  { id: "place-5", title: "Sunset cruise", type: "Experience" },
];

export default function TripTimelineBuilder() {
  const [days, setDays] = useState({
    day1: [],
    day2: [],
    day3: [],
  });
  const [pool, setPool] = useState(initialPool);
  const [draggedItem, setDraggedItem] = useState(null);

  const allDayKeys = useMemo(() => Object.keys(days), [days]);

  const moveToDay = (item, dayKey) => {
    setPool((current) => current.filter((entry) => entry.id !== item.id));
    setDays((current) => ({
      ...current,
      [dayKey]: [...current[dayKey], item],
    }));
  };

  const moveWithinDay = (dayKey, index, direction) => {
    setDays((current) => {
      const list = [...current[dayKey]];
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= list.length) return current;
      [list[index], list[nextIndex]] = [list[nextIndex], list[index]];
      return { ...current, [dayKey]: list };
    });
  };

  const removeFromDay = (dayKey, item) => {
    setDays((current) => ({
      ...current,
      [dayKey]: current[dayKey].filter((entry) => entry.id !== item.id),
    }));
    setPool((current) => [...current, item]);
  };

  const savePlan = () => {
    localStorage.setItem("tripTimelinePlan", JSON.stringify(days));
  };

  const handleDropToDay = (dayKey) => {
    if (!draggedItem) return;

    const sourceDay = allDayKeys.find((key) => days[key].some((item) => item.id === draggedItem.id));
    if (sourceDay) {
      setDays((current) => ({
        ...current,
        [sourceDay]: current[sourceDay].filter((item) => item.id !== draggedItem.id),
        [dayKey]: [...current[dayKey], draggedItem],
      }));
    } else {
      moveToDay(draggedItem, dayKey);
    }

    setDraggedItem(null);
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Travel Timeline Builder</h2>
          <p className="mt-1 text-sm text-slate-600">Create a drag-style plan by assigning experiences to each day and reordering the schedule.</p>
        </div>
        <button
          type="button"
          onClick={savePlan}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
        >
          Save Trip Plan
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">Available Places</h3>
          <div className="mt-4 space-y-3">
            {pool.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => setDraggedItem(item)}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.type}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {allDayKeys.map((dayKey) => (
                    <button
                      key={dayKey}
                      type="button"
                      onClick={() => moveToDay(item, dayKey)}
                      className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100"
                    >
                      Add to {dayKey.replace("day", "Day ")}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {allDayKeys.map((dayKey) => (
            <div
              key={dayKey}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => handleDropToDay(dayKey)}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <h3 className="text-lg font-semibold text-slate-900">{dayKey.replace("day", "Day ")}</h3>
              <div className="mt-4 space-y-3">
                {days[dayKey].length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                    No items yet.
                  </div>
                ) : null}
                {days[dayKey].map((item, index) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() => setDraggedItem(item)}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.type}</p>
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => moveWithinDay(dayKey, index, -1)}
                        className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        onClick={() => moveWithinDay(dayKey, index, 1)}
                        className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        Down
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromDay(dayKey, item)}
                        className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
