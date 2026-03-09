import Card from './Card'

function Badge({ children, tone = 'slate' }) {
  const tones = {
    slate: 'bg-slate-900/70 text-white',
    indigo: 'bg-indigo-600 text-white',
    emerald: 'bg-emerald-600 text-white',
    amber: 'bg-amber-500 text-white',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${tones[tone] || tones.slate}`}>
      {children}
    </span>
  )
}

export default function TravelCard({
  item,
  onToggleFavorite,
  isFavorite,
  onOpenBooking,
  highlight,
  className = '',
}) {
  const name = item?.title || item?.name || 'Untitled'
  const location = item?.location || item?.city || item?.state || ''
  const image = item?.image
  const category = item?.category || item?.type || ''
  const price = Number(item?.price || 0)
  const rating = typeof item?.rating === 'number' ? item.rating : null

  const mapHref = item?.mapUrl || (location ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}` : null)

  return (
    <Card className={`group ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-slate-100 dark:bg-white/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {category ? <Badge tone="indigo">{category}</Badge> : null}
          {item?.luxuryLevel ? <Badge tone="amber">{item.luxuryLevel}</Badge> : null}
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite?.(item)}
          className={`absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition duration-300 ${
            isFavorite
              ? 'border-white/30 bg-rose-500/90 text-white shadow-lg shadow-rose-500/20'
              : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white truncate">
              {highlight ? highlight(name) : name}
            </h3>
            {location ? (
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300 truncate">
                {highlight ? highlight(location) : location}
              </p>
            ) : null}
          </div>
          {rating !== null ? (
            <div className="shrink-0 rounded-2xl bg-amber-400/15 px-3 py-1 text-sm font-bold text-amber-600 dark:text-amber-300">
              ★ {rating.toFixed(1)}
            </div>
          ) : null}
        </div>

        {item?.description ? (
          <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {price > 0 ? (
            <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-300">₹{price.toLocaleString()}</div>
          ) : (
            <div />
          )}

          <div className="flex flex-wrap gap-2">
            {mapHref ? (
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
              >
                Maps
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => onOpenBooking?.(item)}
              className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm transition duration-300 hover:opacity-95 hover:shadow-lg"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
