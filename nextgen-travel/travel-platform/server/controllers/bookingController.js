import { Booking } from '../models/Booking.js'

export async function createBooking(req, res) {
  const { destination, date, people, totalPrice } = req.body || {}

  if (!destination || !date || !people) {
    return res.status(400).json({ message: 'destination, date, people are required' })
  }

  const booking = await Booking.create({
    userId: req.user.id,
    destination: String(destination).trim(),
    date: new Date(date),
    people: Number(people) || 1,
    totalPrice: Number(totalPrice) || 0,
    status: 'confirmed',
  })

  return res.status(201).json({ booking })
}

export async function listBookings(req, res) {
  const filter = req.user.role === 'admin' ? {} : { userId: req.user.id }

  const bookings = await Booking.find(filter)
    .sort({ createdAt: -1 })
    .limit(200)

  return res.json({ bookings })
}

export async function deleteBooking(req, res) {
  const { id } = req.params

  const booking = await Booking.findById(id)
  if (!booking) return res.status(404).json({ message: 'Booking not found' })

  if (req.user.role !== 'admin' && String(booking.userId) !== String(req.user.id)) {
    return res.status(403).json({ message: 'Not allowed' })
  }

  await Booking.deleteOne({ _id: id })
  return res.json({ ok: true })
}
