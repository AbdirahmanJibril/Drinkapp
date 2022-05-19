import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Form, Row, Col, Button } from 'react-bootstrap'

const CreatEvent = () => {
  const [title, setTitle] = useState('')
  const [guests, setGuests] = useState([])
  const [time, setTime] = useState('')
  const [eventType, setEventType] = useState('')
  const [venue, setVenue] = useState('')
  const [user, setUser] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  const submitHandler = e => {
    e.preventDefault()
    axios.post('/events', {
      title,
      time,
      guests,
      user,
      description,
      venue,
      eventType,
    })
    navigate('/events')
  }
  return (
    <Row className='justify-content-md-center'>
      <Col sm={12} md={6}>
        {/* {message && <message variant='danger'>{message}</message>}
              {error && <Message variant='danger'>{error}</Message>} */}

        <h1>Create Event</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group id='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Event Title'
              value={title}
              onChange={e => setTitle(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group id='time'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='datetime-local'
              value={time}
              onChange={e => setTime(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group id='venue'>
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Event Venue'
              value={venue}
              onChange={e => setVenue(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group id='user'>
            <Form.Label>User</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter User Name'
              value={user}
              onChange={e => setUser(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group id='guests'>
            <Form.Label>Guest List</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Guests Names'
              value={guests}
              onChange={e => setGuests(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group id='type'>
            <Form.Label>Choose Type Event</Form.Label>
            <Form.Control
              type='text'
              value={eventType}
              onChange={e => setEventType(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group id='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}></Form.Control>
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button type='submit' variant='dark'>
              Submit
            </Button>
          </div>
        </Form>
        <Row className='py-3'>
          <Col>
            <Link to='/events'>Cancel</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CreatEvent
