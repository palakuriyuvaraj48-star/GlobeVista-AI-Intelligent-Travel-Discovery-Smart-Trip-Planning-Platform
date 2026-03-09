const jwt = require('jsonwebtoken')

function generateAccessToken({ userId, role }) {
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is required')

  return jwt.sign({ role }, process.env.JWT_SECRET, {
    subject: String(userId),
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  })
}

function generateRefreshToken({ userId, role }) {
  const secret = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is required')

  return jwt.sign({ role, type: 'refresh' }, secret, {
    subject: String(userId),
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  })
}

module.exports = { generateAccessToken, generateRefreshToken }
