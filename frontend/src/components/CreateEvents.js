import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import axios from 'axios'

import { Form, Row, Col, Button, InputGroup, Container } from 'react-bootstrap'

const CreatEvent = () => {
  const [title, setTitle] = useState('')
  const [guests, setGuests] = useState([])
  // const [time, setTime] = useState(new Date('26/05/2022').toLocaleString())
  const [eventType, setEventType] = useState('')
  const [venue, setVenue] = useState('')
  const [postcode, setPostcode] = useState('')
  const [user, setUser] = useState('')
  const [description, setDescription] = useState('')
  const [time, onChange] = useState(new Date())

  const [validated, setValidated] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = event => {
    console.log(event.currentTarget)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    axios.post('/events', {
      title,
      time,
      guests,
      user,
      description,
      venue,
      postcode,
      eventType,
    })
    navigate('/events')
  }

  return (
    <Container fluid style={{ backgroundColor: '#EBEBEB', margin: '70px 0' }}>
      <h1 style={{ margin: '20px 0' }}>Event Create Form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='my-3'>
          <Form.Group as={Col} controlId='title'>
            <Form.Control
              required
              type='text'
              placeholder='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please choose a name 2-10 characters
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='venue'>
            <Form.Control
              required
              type='text'
              placeholder='venue'
              value={venue}
              onChange={e => setVenue(e.target.value)}
            />
            <Form.Control.Feedback
              id='name-feedback'
              className='invalid-feedback'>
              Name must be between 2 - 10 characters max.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='time'>
            <DatePicker onChange={onChange} value={time} />

            <Form.Control.Feedback type='invalid'>
              Please choose a date!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='postcode'>
            <Form.Control
              required
              type='text'
              placeholder='event post code'
              value={postcode}
              onChange={e => setPostcode(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please provide postcode
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='username'>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='Username'
                required
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} controlId='guest'>
            <Form.Control
              type='text'
              placeholder='Guests'
              value={guests}
              onChange={e => setGuests(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Guest names
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId='type'>
            <Form.Control
              type='text'
              placeholder='evet type'
              required
              value={eventType}
              onChange={e => setEventType(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please provide event type.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            sm='12'
            className='my-3'
            style={{ fontweight: '300' }}
            controlId='description'>
            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              style={{ height: '150px' }}
              type='text'
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please provide event description
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type='submit'>Submit form</Button>
      </Form>
    </Container>

    // <Row className='justify-content-md-center'>
    //   <Col sm={12} md={6}>
    //     {Message && <message variant='danger'>{Message}</message>}

    //     <h1>Create Event</h1>

    //     <Form class='form' onSubmit={submitHandler}>
    //       <Form.Group id='title'>
    //         <Form.Label>Title</Form.Label>
    //         <Form.Control
    //           type='text'
    //           placeholder='Enter Event Title'
    //           value={title}
    //           onChange={e => setTitle(e.target.value)}></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='time'>
    //         <Form.Label>Title</Form.Label>

    //         <Form.Control
    //           type='Date'
    //           value={time}
    //           onChange={e => setTime(e.target.value)}></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='venue'>
    //         <Form.Label>Venue</Form.Label>
    //         <Form.Control
    //           type='text'
    //           placeholder='Enter Event Venue'
    //           value={venue}
    //           onChange={e => setVenue(e.target.value)}></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='postcode'>
    //         <Form.Label>Post Code</Form.Label>
    //         <Form.Control
    //           type='text'
    //           placeholder='Enter Event Postcode'
    //           value={postcode}
    //           onChange={e =>
    //             setPostcode(e.target.value).lowerCase()
    //           }></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='user'>
    //         <Form.Label>User</Form.Label>
    //         <Form.Control
    //           type='text'
    //           placeholder='Enter User Name'
    //           value={user}
    //           onChange={e => setUser(e.target.value)}></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='guests'>
    //         <Form.Label>Guest List</Form.Label>
    //         <Form.Control
    //           type='text'
    //           placeholder='Enter Guests Names'
    //           value={guests}
    //           onChange={e => setGuests(e.target.value)}></Form.Control>
    //       </Form.Group>

    //       <Form.Group id='type'>
    //         <Form.Label>Choose Type Event</Form.Label>
    //         <Form.Control
    //           type='text'
    //           value={eventType}
    //           onChange={e => setEventType(e.target.value)}></Form.Control>
    //       </Form.Group>
    //       <Form.Group id='description'>
    //         <Form.Label>Description</Form.Label>
    //         <Form.Control
    //           as='textarea'
    //           rows={3}
    //           value={description}
    //           onChange={e => setDescription(e.target.value)}></Form.Control>
    //       </Form.Group>
    //       <div className='d-grid gap-2'>
    //         <Button type='submit' class='btn btn-warning'>
    //           Submit
    //         </Button>
    //       </div>
    //     </Form>
    //     <Row className='py-3'>
    //       <Col>
    //         <Link to='/events'>Cancel</Link>
    //       </Col>
    //     </Row>
    //   </Col>
    // </Row>
  )
}

export default CreatEvent
