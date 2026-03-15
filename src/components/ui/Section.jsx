const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Section({ title, subtitle, action, children, className }) {
  return (
    <section className={cx('space-y-8', className)}>
      {(title || subtitle || action) && (
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {title ? <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2> : null}
            {subtitle ? <p className="mt-2 text-gray-600 leading-relaxed">{subtitle}</p> : null}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
