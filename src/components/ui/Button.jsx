const variants = {
  primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105',
  secondary: 'bg-white text-slate-700 border border-slate-200 hover:shadow-sm',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <Component
      className={cx(
        'inline-flex items-center justify-center rounded-xl font-semibold transition duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
