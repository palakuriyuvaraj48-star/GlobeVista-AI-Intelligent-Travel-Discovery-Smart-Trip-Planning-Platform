import { useCallback, useMemo } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = { width: '100%', height: '400px' }
const defaultCenter = { lat: 26.9124, lng: 75.7873 }

export default function MapModal({ isOpen, onClose, lat, lng, title }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })

  const center = useMemo(() => (lat && lng ? { lat: Number(lat), lng: Number(lng) } : defaultCenter), [lat, lng])

  const onLoad = useCallback(() => {}, [])
  const onUnmount = useCallback(() => {}, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-semibold text-slate-800">{title || 'Location'}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-2">
          {loadError && (
            <div className="h-64 flex items-center justify-center text-slate-500 bg-slate-100 rounded-xl">
              Map could not load. Add VITE_GOOGLE_MAPS_API_KEY in .env for full functionality.
            </div>
          )}
          {isLoaded && !loadError && (
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} onLoad={onLoad} onUnmount={onUnmount}>
              <Marker position={center} title={title} />
            </GoogleMap>
          )}
          {!apiKey && !loadError && (
            <div className="h-64 flex items-center justify-center text-slate-500 bg-slate-100 rounded-xl">
              Set VITE_GOOGLE_MAPS_API_KEY in .env to show map.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
