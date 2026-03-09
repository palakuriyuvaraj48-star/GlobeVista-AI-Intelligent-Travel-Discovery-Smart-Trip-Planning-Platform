const mongoose = require('mongoose')

async function connectDB(mongoUri) {
  try {
    if (!mongoUri) {
      throw new Error('MONGODB_URI is required')
    }

    mongoose.set('strictQuery', true)
    await mongoose.connect(mongoUri)
    return mongoose.connection
  } catch (err) {
    throw err
  }
}

module.exports = { connectDB }
