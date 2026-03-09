import mongoose from 'mongoose'

const HotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    pricePerNight: { type: Number, min: 0 },
    rating: { type: Number, min: 0, max: 5 },
    image: { type: String, trim: true },
  },
  { timestamps: true }
)

export const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', HotelSchema)
