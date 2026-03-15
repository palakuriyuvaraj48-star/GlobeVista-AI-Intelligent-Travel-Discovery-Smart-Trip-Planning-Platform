const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Badge({ children, className, tone = 'default' }) {
  const tones = {
    default: 'bg-slate-100 text-slate-700',
    accent: 'bg-purple-50 text-purple-600',
    success: 'bg-emerald-50 text-emerald-600',
  }

  return (
    <span className={cx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  )
}
