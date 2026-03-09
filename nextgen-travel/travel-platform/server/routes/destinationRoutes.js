import { Router } from 'express'
import { createDestination, listDestinations } from '../controllers/destinationController.js'
import { requireAdmin, requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', listDestinations)
router.post('/', requireAuth, requireAdmin, createDestination)

export default router
