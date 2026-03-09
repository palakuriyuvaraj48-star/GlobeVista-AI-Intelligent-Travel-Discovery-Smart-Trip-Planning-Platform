function requireRole(roles = []) {
  const roleSet = new Set(Array.isArray(roles) ? roles : [roles])

  return function roleMiddleware(req, res, next) {
    if (!req.user) return res.status(401).json({ message: 'Not authenticated' })
    if (!roleSet.has(req.user.role)) return res.status(403).json({ message: 'Forbidden' })
    return next()
  }
}

module.exports = { requireRole }
