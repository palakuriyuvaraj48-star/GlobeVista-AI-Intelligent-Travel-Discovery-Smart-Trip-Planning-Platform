export default function MapEmbed({ lat, lng, place, zoom = 13 }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
  const external = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  return (
    <div className="w-full rounded-lg overflow-hidden border border-slate-200">
      <iframe
        title={place || 'map'}
        src={src}
        width="100%"
        height="300"
        className="block"
        loading="lazy"
      />
      <div className="p-3 bg-white/60 text-sm">
        <a href={external} target="_blank" rel="noreferrer" className="text-indigo-600 font-medium">
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
