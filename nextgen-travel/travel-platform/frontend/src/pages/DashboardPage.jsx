import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { bookingsApi, destinationsApi, userApi } from '../lib/api'

export default function DashboardPage() {
  const { token, user, logout, refreshProfile } = useAuth()
  const [destinations, setDestinations] = useState([])
  const [bookings, setBookings] = useState([])
  const [error, setError] = useState('')

  const isAdmin = user?.role === 'admin'

  useEffect(() => {
    destinationsApi
      .list()
      .then((d) => setDestinations(d.destinations || []))
      .catch((e) => setError(e.message || 'Failed to load destinations'))
  }, [])

  useEffect(() => {
    bookingsApi
      .list(token)
      .then((d) => setBookings(d.bookings || []))
      .catch((e) => setError(e.message || 'Failed to load bookings'))
  }, [token])

  const favoriteCount = useMemo(() => (user?.favorites?.length || 0), [user])

  const createBooking = async (destination) => {
    setError('')
    try {
      await bookingsApi.create(token, {
        destination: destination.title,
        date: new Date().toISOString(),
        people: 2,
        totalPrice: 0,
      })
      const next = await bookingsApi.list(token)
      setBookings(next.bookings || [])
    } catch (e) {
      setError(e.message || 'Booking failed')
    }
  }

  const toggleFavorite = async (destination) => {
    setError('')
    try {
      await userApi.toggleFavorite(token, {
        destinationId: destination._id,
        title: destination.title,
        category: destination.category,
        location: destination.location,
        image: destination.image,
      })
      await refreshProfile()
    } catch (e) {
      setError(e.message || 'Favorite failed')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-slate-600">Signed in as {user?.email}</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700"
          >
            Logout
          </button>
        </div>

        {error ? <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">{error}</p> : null}

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Role</p>
            <p className="mt-2 text-lg font-extrabold text-slate-900">{isAdmin ? 'admin' : 'user'}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Favorites</p>
            <p className="mt-2 text-lg font-extrabold text-slate-900">{favoriteCount}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Bookings</p>
            <p className="mt-2 text-lg font-extrabold text-slate-900">{bookings.length}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-extrabold text-slate-900">Destinations (API)</p>
            <div className="mt-4 space-y-3">
              {destinations.map((d) => (
                <div key={d._id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-extrabold text-slate-900">{d.title}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{d.category} · {d.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(d)}
                        className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold"
                      >
                        Favorite
                      </button>
                      <button
                        type="button"
                        onClick={() => createBooking(d)}
                        className="rounded-2xl bg-indigo-600 px-3 py-2 text-xs font-extrabold text-white"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-extrabold text-slate-900">Bookings (JWT)</p>
            <div className="mt-4 space-y-3">
              {bookings.map((b) => (
                <div key={b._id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="font-extrabold text-slate-900">{b.destination}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">People: {b.people} · Status: {b.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
