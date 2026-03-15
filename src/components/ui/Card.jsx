const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Card({ children, className }) {
  return (
    <div className={cx('rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-2xl', className)}>
      {children}
    </div>
  )
}
