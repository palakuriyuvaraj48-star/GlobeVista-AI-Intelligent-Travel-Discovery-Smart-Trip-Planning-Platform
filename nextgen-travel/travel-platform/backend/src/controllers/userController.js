const { User } = require('../models/User')
const { Destination } = require('../models/Destination')

async function trackVisit(req, res, next) {
  try {
    const { placeId, placeName, category } = req.body || {}

    if (!category) return res.status(400).json({ message: 'category is required' })
    if (!placeName && !placeId) return res.status(400).json({ message: 'placeId or placeName is required' })

    const user = await User.findById(req.user.id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    user.visitedPlaces.push({ placeId, placeName, category })

    const current = Number(user.visitStats.get(category) || 0)
    user.visitStats.set(category, current + 1)

    await user.save()

    return res.status(201).json({ ok: true })
  } catch (err) {
    return next(err)
  }
}

async function getRecommendations(req, res, next) {
  try {
    const user = await User.findById(req.user.id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    let topCategory = null
    let topCount = -1

    for (const [cat, count] of user.visitStats.entries()) {
      const n = Number(count || 0)
      if (n > topCount) {
        topCount = n
        topCategory = cat
      }
    }

    if (!topCategory) return res.json({ category: null, recommendations: [] })

    const recommendations = await Destination.find({ category: topCategory }).limit(5)
    return res.json({ category: topCategory, recommendations })
  } catch (err) {
    return next(err)
  }
}

module.exports = { trackVisit, getRecommendations }
