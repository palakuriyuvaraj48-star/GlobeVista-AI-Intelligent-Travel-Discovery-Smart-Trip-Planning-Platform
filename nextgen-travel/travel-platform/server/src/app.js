import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import xss from 'xss-clean'

import authRoutes from '../routes/authRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import bookingRoutes from '../routes/bookingRoutes.js'
import destinationRoutes from '../routes/destinationRoutes.js'

import { apiRateLimiter } from './middleware/rateLimiter.js'
import { errorHandler } from './middleware/errorHandler.js'

export function createApp({ clientOrigin } = {}) {
  const app = express()

  app.disable('x-powered-by')

  app.use(helmet())
  app.use(express.json({ limit: '1mb' }))
  app.use(mongoSanitize())
  app.use(xss())

  app.use(
    cors({
      origin: clientOrigin || true,
      credentials: true,
    })
  )

  app.use('/api', apiRateLimiter)

  app.get('/api/health', (req, res) => {
    res.json({ ok: true })
  })

  app.use('/api/auth', authRoutes)
  app.use('/api/users', userRoutes)
  app.use('/api/bookings', bookingRoutes)
  app.use('/api/destinations', destinationRoutes)

  app.use((req, res) => res.status(404).json({ message: 'Not found' }))

  app.use(errorHandler)

  return app
}
