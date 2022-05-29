import mongoose from 'mongoose'

const date = new Date('29/05/2022').toLocaleString('en-GB')
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: { type: Date, required: true, default: date },

  createdAt: { type: Date, default: Date.now() },

  venue: { type: String, required: true },
  postcode: { type: String, required: true },
  user: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,

    required: true,
  },

  guests: [],

  description: {
    type: String,
    required: true,
  },
})

const eventModel = mongoose.model('eventModel', eventSchema)

export { eventModel }
