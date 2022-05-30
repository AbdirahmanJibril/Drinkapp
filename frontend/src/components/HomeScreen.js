import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Message from './Message'
import Loader from '../Loader'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function HomeScreen() {
  const params = useParams()
  const [Events, setEvents] = useState([])
  const [status, setStatus] = useState()

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('/events')
      setStatus(response.statusText)
      setEvents(response.data)
    }
    fetchEvents()
  }, [params])
  return (
    <Container fluid>
      {status !== 'OK' ? (
        <Loader />
      ) : Events.length === 0 ? (
        <Message>
          No events created yet!!!, create some events to them here
        </Message>
      ) : (
        <Row>
          <h2 style={{ margin: '40px 0' }}>Live Events</h2>

          {Events.map(e => (
            <Col sm={12} md={3} key={e._id}>
              <Card>
                <Card.Title
                  style={{ backgroundColor: '#BB6B62', color: 'white' }}>
                  {e.title}
                </Card.Title>
                <Card.Body>
                  {[e.description].toString().slice(0, 50) + '...'}
                </Card.Body>

                <Link to={`/events/${e._id}`}>Details</Link>

                <Card.Footer className='text-muted'>{`Organiser:  ${e.user}`}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeScreen
