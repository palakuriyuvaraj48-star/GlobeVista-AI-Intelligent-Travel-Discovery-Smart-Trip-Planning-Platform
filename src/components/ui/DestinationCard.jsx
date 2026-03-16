import { Link } from 'react-router-dom'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'

export default function DestinationCard({ id, name, location, rating, description, image, linkTo }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-2 py-1 text-sm font-semibold shadow-sm flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
          <FaMapMarkerAlt className="shrink-0" />
          <span>{location}</span>
        </div>
        <p className="mt-3 text-sm text-slate-600 line-clamp-2 flex-grow">{description}</p>
        <div className="mt-5">
          <Link
            to={linkTo || `/destination/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
