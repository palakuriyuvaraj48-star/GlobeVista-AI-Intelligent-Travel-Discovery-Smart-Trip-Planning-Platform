function renderStars(value) {
  const filled = Math.round(value || 0)
  return `${'\u2605'.repeat(filled)}${'\u2606'.repeat(5 - filled)}`
}

export default function TravelCard({
  item,
  title,
  image,
  description,
  price,
  rating,
  location,
  category,
  reviewCount,
  trendingScore,
  aiScore,
  suggestions = [],
  isBookmarked = false,
  onBookmarkToggle,
  onClick,
  children,
}) {
  const cardTitle = item?.title || title
  const cardDescription = item?.description || description
  const cardPrice = item?.price ?? price
  const cardRating = item?.rating ?? rating ?? 0
  const cardLocation = item?.location || location
  const cardCategory = item?.category || category
  const cardReviewCount = item?.reviewCount ?? reviewCount ?? item?.reviews?.length ?? 0
  const cardTrendingScore = item?.trendingScore ?? trendingScore
  const cardAiScore = item?.aiScore ?? aiScore

  return (
    <article
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          if (onBookmarkToggle) onBookmarkToggle()
        }}
        className={`absolute right-3 top-3 z-10 rounded-full px-2 py-1 text-xs font-semibold transition ${
          isBookmarked ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
        }`}
      >
        {isBookmarked ? 'Saved' : 'Save'}
      </button>

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{cardCategory}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{cardTitle}</h3>
          <p className="text-sm text-slate-500">{cardLocation}</p>
        </div>
      </div>

      <p className="mt-3 line-clamp-3 text-sm text-slate-600">{cardDescription}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-amber-500">{renderStars(cardRating)}</span>
        <span className="text-sm font-semibold text-slate-700">{cardRating.toFixed(1)}</span>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
        <p>Reviews: {cardReviewCount}</p>
        {typeof cardPrice === 'number' ? <p>Price: {'\u20B9'}{cardPrice.toLocaleString()}</p> : <p>Price: N/A</p>}
        {typeof cardTrendingScore === 'number' ? <p>Trending: {cardTrendingScore.toFixed(1)}</p> : null}
        {typeof cardAiScore === 'number' ? <p>AI: {cardAiScore.toFixed(3)}</p> : null}
      </div>

      {suggestions.length > 0 ? (
        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Related Suggestions</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} className="truncate">
                {suggestion.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {children}

      {image ? (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/80" />
        </div>
      ) : null}
    </article>
  )
}
