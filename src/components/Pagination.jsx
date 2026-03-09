export default function Pagination({
  page,
  pageNumbers,
  totalPages,
  hasPrevPage,
  hasNextPage,
  onPageChange,
}) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={!hasPrevPage}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onPageChange(number)}
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            page === number ? 'bg-cyan-600 text-white' : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
          }`}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNextPage}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
