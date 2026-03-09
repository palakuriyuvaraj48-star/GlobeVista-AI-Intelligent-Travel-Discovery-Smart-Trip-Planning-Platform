import { useMemo, useState } from 'react'
import { hotelDashboardData } from './data/dashboardData'

export default function CompareHotels() {
  const [selected, setSelected] = useState([])
  const hotels = useMemo(() => hotelDashboardData.slice(0, 6), [])

  const toggle = (hotel) => {
    setSelected((current) =>
      current.find((item) => item.id === hotel.id)
        ? current.filter((item) => item.id !== hotel.id)
        : current.length < 3
          ? [...current, hotel]
          : current
    )
  }

  const best = selected.reduce(
    (bestHotel, hotel) =>
      bestHotel.pricePerNight / bestHotel.rating > hotel.pricePerNight / hotel.rating ? hotel : bestHotel,
    selected[0] || {}
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">Compare Hotels</h1>
      <p className="mb-6 text-slate-600">Select up to 3 hotels to compare price, rating, and amenities side by side.</p>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={hotel.image} alt={hotel.name} loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-slate-900">{hotel.name}</h2>
              <p className="text-sm text-slate-600">{hotel.location}</p>
              <p className="mt-1 text-sm font-medium text-amber-500">{'\u2B50'} {hotel.rating} rating</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">{'\u20B9'}{hotel.pricePerNight.toLocaleString('en-IN')}</p>
            </div>
            <button
              onClick={() => toggle(hotel)}
              className={`mx-4 mb-4 rounded-xl px-3 py-2 text-sm font-medium transition ${
                selected.find((item) => item.id === hotel.id)
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {selected.find((item) => item.id === hotel.id) ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="overflow-auto rounded-2xl border border-slate-200 bg-white shadow-md">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="border-b p-3">Hotel Name</th>
                <th className="border-b p-3">Price</th>
                <th className="border-b p-3">Rating</th>
                <th className="border-b p-3">Pool</th>
                <th className="border-b p-3">WiFi</th>
                <th className="border-b p-3">Spa</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((hotel) => (
                <tr key={hotel.id} className={hotel.id === best.id ? 'bg-emerald-50' : ''}>
                  <td className="border-b p-3 text-slate-800">
                    <div className="font-medium">{hotel.name}</div>
                    <div className="text-sm text-slate-500">{hotel.city}</div>
                  </td>
                  <td className="border-b p-3">{'\u20B9'}{hotel.pricePerNight.toLocaleString('en-IN')}</td>
                  <td className="border-b p-3">{hotel.rating}</td>
                  <td className="border-b p-3">{hotel.amenities.includes('Swimming Pool') ? 'Yes' : 'No'}</td>
                  <td className="border-b p-3">{hotel.amenities.includes('Wi-Fi') ? 'Yes' : 'No'}</td>
                  <td className="border-b p-3">{hotel.amenities.includes('Spa') ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {best?.name ? <div className="p-4 font-semibold text-emerald-700">Best Value: {best.name}</div> : null}
        </div>
      )}
    </div>
  )
}
