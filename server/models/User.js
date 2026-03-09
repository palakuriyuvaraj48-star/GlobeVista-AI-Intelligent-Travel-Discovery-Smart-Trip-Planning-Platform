import mongoose from 'mongoose'

const PreferenceSchema = new mongoose.Schema(
  {
    budgetLevel: { type: String, default: '' },
    travelStyle: { type: String, default: '' },
    preferredSeason: { type: String, default: '' },
    preferredTimeOfDay: { type: String, default: '' },
  },
  { _id: false }
)

const FavoriteSchema = new mongoose.Schema(
  {
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', default: null },
    title: { type: String, required: true },
    category: { type: String, default: '' },
    location: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  { _id: false }
)

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    preferences: { type: PreferenceSchema, default: () => ({}) },
    favorites: { type: [FavoriteSchema], default: () => [] },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model('User', UserSchema)
