export default function TripDetails({ isOpen, onClose, trip }) {
  if (!trip) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-6 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${trip.title} trip details`}
    >
      <div className="absolute inset-0 bg-slate-900/55" onClick={onClose} />

      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl transition-all duration-300 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
        }`}
      >
        <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">{trip.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Rating: {trip.rating || 'N/A'} | Duration: {trip.duration}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-88px)] p-4 sm:p-6">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">{trip.description}</p>

          <div className="space-y-4">
            {trip.itinerary?.map((dayItem) => (
              <div
                key={dayItem.day}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 p-3 sm:p-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-base font-semibold text-indigo-600 dark:text-indigo-400">{dayItem.day}</h3>
                    <ul className="mt-2 space-y-1.5 list-disc list-inside text-sm text-slate-700 dark:text-slate-200">
                      {dayItem.activities?.map((activity) => (
                        <li key={`${dayItem.day}-${activity}`}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                    <img src={dayItem.image} alt={`${dayItem.day} plan`} className="h-28 sm:h-32 w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
