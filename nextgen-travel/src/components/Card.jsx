export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-white/50 overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
