import { useState, useEffect } from 'react'
import TripDetails from './components/TripDetails'
import { buildTripDetails } from './data/tripDetails'
import { isWishlisted, toggleWishlistItem } from './utils/wishlistStorage'

const fallbackImageByCategory = {
  Hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  Restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  Place: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  Event: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  Pub: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  Movie: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  Mall: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
  Transport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  Food: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
  State: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
}

export default function TravelCard({
  id,
  title,
  description,
  image,
  link,
  rating,
  price,
  category,
  location,
  onFavorite,
  badge,
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showTripDetails, setShowTripDetails] = useState(false)
  const fallbackImage =
    fallbackImageByCategory[category] ||
    fallbackImageByCategory[badge] ||
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80'

  useEffect(() => {
    setIsFavorite(isWishlisted(id))
  }, [id])

  const handleFavorite = () => {
    const updated = toggleWishlistItem({
      id,
      title,
      description,
      image: image || fallbackImage,
      rating,
      price,
      category: category || badge || 'Travel',
      location,
    })
    localStorage.setItem('favorites', JSON.stringify(updated.map((item) => item.id)))
    setIsFavorite(updated.some((item) => item.id === id))
    if (onFavorite) onFavorite(updated)
  }

  const tripDetails = buildTripDetails({
    id,
    title,
    rating,
    description,
    image,
    location,
    category,
  })
  const mapsQuery = encodeURIComponent([title, location].filter(Boolean).join(', '))

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            src={image || fallbackImage}
            alt={title}
            loading="lazy"
            onError={(event) => {
              if (event.currentTarget.src !== fallbackImage) {
                event.currentTarget.src = fallbackImage
              }
            }}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />

          {(badge || category) && (
            <div className="absolute top-3 left-3">
              <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                {badge || category}
              </span>
            </div>
          )}

          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 transition shadow-lg"
          >
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{isFavorite ? 'Saved' : 'Save'}</span>
          </button>

          {rating && (
            <div className="absolute bottom-3 left-3 bg-amber-400 text-slate-900 px-2 py-1 rounded-lg text-sm font-semibold shadow-lg">
              {'\u2B50'} {rating}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 line-clamp-2">{title}</h3>

          {location && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{location}</p>
          )}

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">{description}</p>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between gap-3">
              {price ? (
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">From</p>
                  <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    INR {typeof price === 'number' ? price.toLocaleString() : price}
                  </p>
                </div>
              ) : (
                <div />
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition duration-300"
                >
                  View
                </a>
              )}
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setShowTripDetails(true)}
                className="px-3 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition duration-300"
              >
                View Details
              </button>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium hover:bg-indigo-200 dark:hover:bg-slate-600 transition duration-300 text-center"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>

      <TripDetails isOpen={showTripDetails} onClose={() => setShowTripDetails(false)} trip={tripDetails} />
    </>
  )
}
