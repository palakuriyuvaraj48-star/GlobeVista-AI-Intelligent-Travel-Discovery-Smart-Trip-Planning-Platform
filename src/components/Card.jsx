
export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
