export default function CategorySwitcher({
  categories,
  activeCategory,
  onCategoryChange,
  savedItemsOnly,
  onToggleSavedItems,
  bookmarkedCount,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-cyan-600 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}

        <button
          type="button"
          onClick={onToggleSavedItems}
          className={`ml-auto rounded-xl px-4 py-2 text-sm font-semibold transition ${
            savedItemsOnly
              ? 'bg-amber-100 text-amber-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Saved Items ({bookmarkedCount})
        </button>
      </div>
    </div>
  )
}
