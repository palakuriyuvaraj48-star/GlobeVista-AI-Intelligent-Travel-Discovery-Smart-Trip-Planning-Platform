const { Router } = require('express')
const { requireAuth } = require('../middleware/authMiddleware')
const { trackVisit, getRecommendations } = require('../controllers/userController')

const router = Router()

router.post('/visit', requireAuth, trackVisit)
router.get('/recommendations', requireAuth, getRecommendations)

module.exports = router
