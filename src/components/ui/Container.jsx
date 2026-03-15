const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Container({ children, className }) {
  return <div className={cx('mx-auto max-w-7xl px-6 py-16', className)}>{children}</div>
}
