const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const VisitedPlaceSchema = new mongoose.Schema(
  {
    placeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    placeName: { type: String, trim: true },
    category: { type: String, trim: true },
    visitedAt: { type: Date, default: Date.now },
  },
  { _id: false }
)

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    password: { type: String, required: true, select: false },
    visitedPlaces: { type: [VisitedPlaceSchema], default: [] },
    visitStats: { type: Map, of: Number, default: {} },
  },
  { timestamps: true }
)

UserSchema.pre('save', async function preSave(next) {
  try {
    if (!this.isModified('password')) return next()

    const rounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10)
    this.password = await bcrypt.hash(String(this.password), rounds)
    return next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
  return bcrypt.compare(String(candidate), String(this.password))
}

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password
    return ret
  },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

module.exports = { User }
