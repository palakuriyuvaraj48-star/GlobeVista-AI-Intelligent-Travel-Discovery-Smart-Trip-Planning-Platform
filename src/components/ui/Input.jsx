const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Input({ className, ...props }) {
  return (
    <input
      className={cx(
        'h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none focus:border-purple-500',
        className
      )}
      {...props}
    />
  )
}
