export default function MapModal({ isOpen, onClose, lat, lng, title }) {
  if (!isOpen) return null

  const query = lat && lng ? `${lat},${lng}` : ''
  const src = `https://maps.google.com/maps?q=${query}&z=15&output=embed`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">{title || 'Location'}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="w-full">
          <iframe
            title={title || 'Map'}
            src={src}
            className="w-full h-80 border-0"
            allowFullScreen
            loading="lazy"
          />
          <div className="p-4 text-right">
            <a
              href={`https://maps.google.com/maps?q=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
