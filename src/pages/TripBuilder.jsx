import { useMemo, useState } from "react";

const startingActivities = {
  day1: [
    { id: "day1-hotel", title: "Hotel check-in", type: "Stay" },
    { id: "day1-beach", title: "Beach visit", type: "Leisure" },
  ],
  day2: [
    { id: "day2-temple", title: "Temple visit", type: "Culture" },
    { id: "day2-dinner", title: "Restaurant dinner", type: "Dining" },
  ],
  day3: [{ id: "day3-adventure", title: "Adventure activities", type: "Experience" }],
};

export default function TripBuilder() {
  const [days, setDays] = useState(startingActivities);
  const [newActivity, setNewActivity] = useState("");
  const [activeDay, setActiveDay] = useState("day1");
  const [draggedItem, setDraggedItem] = useState(null);

  const dayKeys = useMemo(() => Object.keys(days), [days]);

  const addActivity = () => {
    const title = newActivity.trim();
    if (!title) return;

    setDays((current) => ({
      ...current,
      [activeDay]: [
        ...current[activeDay],
        {
          id: `${activeDay}-${Date.now()}`,
          title,
          type: "Custom",
        },
      ],
    }));
    setNewActivity("");
  };

  const removeActivity = (dayKey, activityId) => {
    setDays((current) => ({
      ...current,
      [dayKey]: current[dayKey].filter((item) => item.id !== activityId),
    }));
  };

  const moveActivity = (targetDay) => {
    if (!draggedItem) return;

    setDays((current) => {
      const sourceDay = dayKeys.find((dayKey) => current[dayKey].some((item) => item.id === draggedItem.id));
      if (!sourceDay) return current;

      return {
        ...current,
        [sourceDay]: current[sourceDay].filter((item) => item.id !== draggedItem.id),
        [targetDay]: [...current[targetDay], draggedItem],
      };
    });

    setDraggedItem(null);
  };

  return (
    <section className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-indigo-700 to-cyan-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Trip Builder</p>
          <h1 className="mt-3 text-4xl font-bold">Build a day-by-day travel timeline</h1>
          <p className="mt-3 max-w-2xl text-cyan-100">
            Add activities, remove them, and drag them between days to shape your itinerary.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.9fr_0.7fr_auto]">
            <input
              type="text"
              value={newActivity}
              onChange={(event) => setNewActivity(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") addActivity();
              }}
              placeholder="Add a new activity"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
            <select
              value={activeDay}
              onChange={(event) => setActiveDay(event.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            >
              {dayKeys.map((dayKey) => (
                <option key={dayKey} value={dayKey}>
                  {dayKey.replace("day", "Day ")}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={addActivity}
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700"
            >
              Add Activity
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {dayKeys.map((dayKey) => (
            <section
              key={dayKey}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => moveActivity(dayKey)}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                  {dayKey.replace("day", "D")}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{dayKey.replace("day", "Day ")}</h2>
                  <p className="text-sm text-slate-500">Vertical timeline planner</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {days[dayKey].map((activity) => (
                  <div key={activity.id} className="relative pl-6">
                    <div className="absolute left-0 top-2 h-full w-px bg-slate-200" />
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-cyan-500" />
                    <article
                      draggable
                      onDragStart={() => setDraggedItem(activity)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:scale-[1.02] hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-slate-900">{activity.title}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{activity.type}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeActivity(dayKey, activity.id)}
                          className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 transition duration-300 hover:bg-rose-100"
                        >
                          Remove
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
                {days[dayKey].length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                    Drop activities here.
                  </div>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
