const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const { createApp } = require('./src/app')
const { connectDB } = require('./src/config/db')

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason)
  process.exit(1)
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  process.exit(1)
})

async function start() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is required')
    console.error('Create backend/.env and set MONGODB_URI to your MongoDB Atlas connection string (including a database name).')
    console.error('Example: mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<db>?retryWrites=true&w=majority')
    process.exitCode = 1
    return
  }

  const port = Number(process.env.PORT || 5000)

  try {
    await connectDB(process.env.MONGODB_URI)
    console.log('MongoDB Connected')
  } catch (err) {
    console.error(`MongoDB connection failed: ${err?.message || err}`)
    process.exitCode = 1
    return
  }

  const app = createApp()
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

start().catch((err) => {
  console.error(`Startup failed: ${err?.message || err}`)
  process.exit(1)
})
