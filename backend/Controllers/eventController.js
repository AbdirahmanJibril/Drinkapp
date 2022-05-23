import asyncHandler from 'express-async-handler'
import { eventModel } from '../models/event.js'

//get all events
const getEvents = asyncHandler(async (req, res) => {
  const events = await eventModel.find({})
  res.json(events)
})

// get single event
const getEvent = asyncHandler(async (req, res) => {
  const anEvent = await eventModel.findById(req.params.id)

  if (anEvent) {
    res.json(anEvent)
  } else {
    res.status(404)
    throw new Error('Event Not Found')
  }
})

// create event POST
const creatEvent = asyncHandler(async (req, res) => {
  const newEvent = new eventModel({
    title: req.body.title,
    time: req.body.time,
    user: req.body.user,
    venue: req.body.venue,
    postcode: req.body.postcode,
    eventType: req.body.eventType,
    guests: req.body.guests,
    description: req.body.description,
  })
  newEvent.save()
  res.redirect('/events')
})

const searchLocation = asyncHandler(async (req, res) => {
  const { keyword } = req.params

  const searchVenue = await eventModel.find({
    ...{ venue: new RegExp(keyword, 'i') },
  })

  res.json(searchVenue)
})

export { getEvents, getEvent, creatEvent, searchLocation }
