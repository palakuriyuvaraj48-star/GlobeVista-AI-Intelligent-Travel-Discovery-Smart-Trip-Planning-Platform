import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

function signAccessToken(user) {
  return jwt.sign({ role: user.role }, process.env.JWT_SECRET, {
    subject: String(user._id),
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  })
}

function signRefreshToken(user) {
  const secret = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET
  return jwt.sign({ role: user.role, type: 'refresh' }, secret, {
    subject: String(user._id),
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  })
}

export async function register(req, res) {
  const { name, email, password } = req.body || {}

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'name, email, password are required' })
  }

  const existing = await User.findOne({ email: String(email).toLowerCase().trim() })
  if (existing) return res.status(409).json({ message: 'Email already registered' })

  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10)
  const hashed = await bcrypt.hash(String(password), saltRounds)

  const user = await User.create({
    name: String(name).trim(),
    email: String(email).toLowerCase().trim(),
    password: hashed,
    role: 'user',
  })

  const token = signAccessToken(user)
  const refreshToken = signRefreshToken(user)

  return res.status(201).json({
    token,
    refreshToken,
    user: { id: user._id, name: user.name, email: user.email, role: user.role, preferences: user.preferences, favorites: user.favorites },
  })
}

export async function login(req, res) {
  const { email, password } = req.body || {}

  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' })
  }

  const user = await User.findOne({ email: String(email).toLowerCase().trim() })
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })

  const ok = await bcrypt.compare(String(password), user.password)
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' })

  const token = signAccessToken(user)
  const refreshToken = signRefreshToken(user)

  return res.json({
    token,
    refreshToken,
    user: { id: user._id, name: user.name, email: user.email, role: user.role, preferences: user.preferences, favorites: user.favorites },
  })
}
