import { User } from '../models/User.js'

export async function getProfile(req, res) {
  const user = await User.findById(req.user.id).select('-password')
  if (!user) return res.status(404).json({ message: 'User not found' })
  return res.json({ user })
}

export async function updatePreferences(req, res) {
  const preferences = req.body?.preferences
  if (!preferences || typeof preferences !== 'object') {
    return res.status(400).json({ message: 'preferences object is required' })
  }

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: { preferences } },
    { new: true, runValidators: true, select: '-password' }
  )

  if (!user) return res.status(404).json({ message: 'User not found' })
  return res.json({ user })
}

export async function toggleFavorite(req, res) {
  const favorite = req.body?.favorite
  if (!favorite || typeof favorite !== 'object') {
    return res.status(400).json({ message: 'favorite object is required' })
  }

  const title = String(favorite.title || favorite.name || '').trim()
  if (!title) return res.status(400).json({ message: 'favorite.title is required' })

  const user = await User.findById(req.user.id)
  if (!user) return res.status(404).json({ message: 'User not found' })

  const idx = user.favorites.findIndex((f) => f.title === title && String(f.location || '') === String(favorite.location || ''))

  if (idx >= 0) user.favorites.splice(idx, 1)
  else {
    user.favorites.unshift({
      destinationId: favorite.destinationId || null,
      title,
      category: String(favorite.category || ''),
      location: String(favorite.location || ''),
      image: String(favorite.image || ''),
    })
  }

  await user.save()

  const safe = await User.findById(req.user.id).select('-password')
  return res.json({ user: safe })
}
