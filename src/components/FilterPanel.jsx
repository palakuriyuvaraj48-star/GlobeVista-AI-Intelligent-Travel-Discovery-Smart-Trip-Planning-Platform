export default function FilterPanel({
  category,
  filterConfig,
  selectedFilters,
  onToggleFilter,
  onClearFilters,
}) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{category} Filters</h2>
        <button
          type="button"
          onClick={onClearFilters}
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Clear
        </button>
      </div>

      <div className="space-y-5">
        {filterConfig.map((group) => (
          <div key={group.key}>
            <h3 className="mb-2 text-sm font-semibold text-slate-800">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => (
                <label
                  key={option}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:border-cyan-400"
                >
                  <input
                    type="checkbox"
                    checked={(selectedFilters[group.key] || []).includes(option)}
                    onChange={() => onToggleFilter(group.key, option)}
                    className="h-4 w-4 accent-cyan-600"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
