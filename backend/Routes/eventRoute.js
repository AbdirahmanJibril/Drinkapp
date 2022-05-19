import express from 'express'
const router = express.Router()
import {
  getEvents,
  getEvent,
  creatEvent,
  searchLocation,
} from '../Controllers/eventController.js'

// get all events
router.get('/', getEvents)

// get single event
router.get('/:id', getEvent)

// search location
router.get('/search/:keyword', searchLocation)

// create event route
router.post('/', creatEvent)

export default router
