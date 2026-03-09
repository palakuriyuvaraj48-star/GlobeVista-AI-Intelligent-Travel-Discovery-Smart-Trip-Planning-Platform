const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    location: { type: String, trim: true },
    image: { type: String, trim: true },
  },
  { timestamps: true }
)

const Destination = mongoose.models.Destination || mongoose.model('Destination', DestinationSchema)

module.exports = { Destination }
