import 'dotenv/config'

import http from 'http'
import { createApp } from './src/app.js'
import { connectDB } from './src/config/db.js'
import { connectRedis } from './src/config/redis.js'

function requireEnv(name) {
  const val = process.env[name]
  if (!val) throw new Error(`${name} is required`)
  return val
}

async function start() {
  const mongoUri = requireEnv('MONGODB_URI')
  requireEnv('JWT_SECRET')

  const port = Number(process.env.PORT || 5000)
  const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5175'

  await connectDB(mongoUri)

  const { client: redisClient, connected: redisConnected } = await connectRedis({
    url: process.env.REDIS_URL,
  })

  const app = createApp({ clientOrigin })
  app.locals.redis = redisClient
  app.locals.redisConnected = redisConnected

  const server = http.createServer(app)

  await new Promise((resolve) => server.listen(port, resolve))
  console.log(`API ready on http://localhost:${port}`)
}

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason)
  process.exit(1)
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  process.exit(1)
})

start().catch((err) => {
  console.error(err?.message || err)
  process.exit(1)
})
