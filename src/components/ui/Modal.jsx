const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Modal({ open, title, children, onClose, className }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className={cx('w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl', className)}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {title ? <h3 className="text-xl font-semibold text-slate-900">{title}</h3> : null}
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Close
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
