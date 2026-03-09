const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')

const { apiRateLimiter } = require('./middleware/rateLimiter')
const { errorHandler } = require('./middleware/errorHandler')
const healthRoutes = require('./routes/health')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

function createApp() {
  const app = express()

  app.disable('x-powered-by')

  app.use(helmet())
  app.use(express.json({ limit: '1mb' }))
  app.use(mongoSanitize())
  app.use(xss())

  const origin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
  app.use(
    cors({
      origin,
      credentials: true,
    })
  )

  app.use('/api', apiRateLimiter)
  app.use('/api', healthRoutes)

  app.use('/api/auth', authRoutes)
  app.use('/api/user', userRoutes)

  app.use((req, res) => res.status(404).json({ message: 'Not found' }))
  app.use(errorHandler)

  return app
}

module.exports = { createApp }
