import { Router } from 'express'
import { getProfile, toggleFavorite, updatePreferences } from '../controllers/userController.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/profile', requireAuth, getProfile)
router.put('/preferences', requireAuth, updatePreferences)
router.post('/favorites', requireAuth, toggleFavorite)

export default router
