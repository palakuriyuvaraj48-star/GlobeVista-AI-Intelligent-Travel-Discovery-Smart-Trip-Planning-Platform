import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'

export default function FeatureCard({ name, location, rating, image, linkTo }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg flex flex-col h-full border border-slate-100">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {rating && (
          <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold shadow-sm flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{name}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <FaMapMarkerAlt className="shrink-0 text-slate-400" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="mt-4 mt-auto">
          <Link
            to={linkTo || '#'}
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:border-slate-300 shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
