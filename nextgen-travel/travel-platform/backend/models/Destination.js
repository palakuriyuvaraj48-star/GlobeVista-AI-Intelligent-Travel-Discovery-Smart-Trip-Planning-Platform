import mongoose from 'mongoose'

const DestinationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    category: { type: String, required: true, trim: true, index: true },
    location: { type: String, required: true, trim: true, index: true },
    budgetRange: { type: String, default: '' },
    season: { type: String, default: '' },
    bestTimeOfDay: { type: String, default: '' },
    image: { type: String, default: '' },
  },
  { timestamps: true }
)

export const Destination = mongoose.models.Destination || mongoose.model('Destination', DestinationSchema)
