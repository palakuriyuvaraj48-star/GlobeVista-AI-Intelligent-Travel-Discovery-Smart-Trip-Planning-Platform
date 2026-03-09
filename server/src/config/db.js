import mongoose from 'mongoose'

export async function connectDB(mongoUri) {
  if (!mongoUri || typeof mongoUri !== 'string') {
    throw new Error('MONGODB_URI is required')
  }

  mongoose.set('strictQuery', true)

  try {
    await mongoose.connect(mongoUri)
    return mongoose.connection
  } catch (err) {
    console.error(`MongoDB connection failed: ${err?.message || err}`)
    process.exit(1)
  }
}
