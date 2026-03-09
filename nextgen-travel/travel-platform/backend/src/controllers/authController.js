const { User } = require('../models/User')
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken')

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body || {}

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'name, email, password are required' })
    }

    const normalizedEmail = String(email).toLowerCase().trim()
    const existing = await User.findOne({ email: normalizedEmail })
    if (existing) return res.status(409).json({ message: 'Email already registered' })

    const user = await User.create({
      name: String(name).trim(),
      email: normalizedEmail,
      password: String(password),
    })

    const token = generateAccessToken({ userId: user._id, role: 'user' })
    const refreshToken = generateRefreshToken({ userId: user._id, role: 'user' })

    return res.status(201).json({
      token,
      refreshToken,
      user: { id: user._id, name: user.name, email: user.email },
    })
  } catch (err) {
    return next(err)
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body || {}
    if (!email || !password) return res.status(400).json({ message: 'email and password are required' })

    const normalizedEmail = String(email).toLowerCase().trim()
    const user = await User.findOne({ email: normalizedEmail }).select('+password')
    if (!user) return res.status(401).json({ message: 'Invalid credentials' })

    const ok = await user.comparePassword(password)
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' })

    const token = generateAccessToken({ userId: user._id, role: 'user' })
    const refreshToken = generateRefreshToken({ userId: user._id, role: 'user' })

    return res.json({
      token,
      refreshToken,
      user: { id: user._id, name: user.name, email: user.email },
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = { register, login }
