const LIMIT_OPTIONS = [6, 12, 24]

export default function SortBar({
  sortOption,
  sortOptions,
  onSortChange,
  limit,
  onLimitChange,
  totalResults,
  infiniteScrollEnabled,
  onToggleInfiniteScroll,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sortOption" className="text-sm font-semibold text-slate-700">
            Sort
          </label>
          <select
            id="sortOption"
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-cyan-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="pageSize" className="text-sm font-semibold text-slate-700">
            Page Size
          </label>
          <select
            id="pageSize"
            value={limit}
            onChange={(event) => onLimitChange(event.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-cyan-500"
          >
            {LIMIT_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={onToggleInfiniteScroll}
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            infiniteScrollEnabled
              ? 'bg-cyan-100 text-cyan-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Infinite Scroll: {infiniteScrollEnabled ? 'On' : 'Off'}
        </button>

        <div className="ml-auto text-sm font-semibold text-slate-600">Total Results: {totalResults}</div>
      </div>
    </div>
  )
}
