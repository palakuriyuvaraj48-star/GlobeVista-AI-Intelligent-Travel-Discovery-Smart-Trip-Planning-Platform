import { Router } from 'express'
import { createBooking, deleteBooking, listBookings } from '../controllers/bookingController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/', requireAuth, createBooking)
router.get('/', requireAuth, listBookings)
router.delete('/:id', requireAuth, deleteBooking)

export default router
