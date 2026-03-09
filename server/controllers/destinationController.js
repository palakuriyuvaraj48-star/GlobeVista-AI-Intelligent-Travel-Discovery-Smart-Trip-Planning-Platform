import { Destination } from '../models/Destination.js'

export async function listDestinations(req, res) {
  const destinations = await Destination.find({})
    .sort({ createdAt: -1 })
    .limit(500)

  return res.json({ destinations })
}

export async function createDestination(req, res) {
  const { title, category, location, budgetRange, season, bestTimeOfDay, image } = req.body || {}

  if (!title || !category || !location) {
    return res.status(400).json({ message: 'title, category, location are required' })
  }

  const destination = await Destination.create({
    title: String(title).trim(),
    category: String(category).trim(),
    location: String(location).trim(),
    budgetRange: String(budgetRange || ''),
    season: String(season || ''),
    bestTimeOfDay: String(bestTimeOfDay || ''),
    image: String(image || ''),
  })

  return res.status(201).json({ destination })
}
