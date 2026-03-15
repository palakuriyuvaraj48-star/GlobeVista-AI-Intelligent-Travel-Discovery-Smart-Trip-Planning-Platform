const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function Avatar({ initials = 'GV', image, className }) {
  return (
    <div className={cx('flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-sm font-semibold text-slate-700', className)}>
      {image ? <img src={image} alt={initials} className="h-full w-full object-cover" /> : initials}
    </div>
  )
}
