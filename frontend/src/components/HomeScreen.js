import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function HomeScreen() {
  const params = useParams()
  const [Events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await axios.get('/events')

      setEvents(data)
    }
    fetchEvents()
  }, [params])
  return (
    <Row>
      <h2 style={{ margin: '5px 0' }}>Live Events</h2>

      {Events.map(e => (
        <Col sm={12} md={3} key={e._id}>
          <Card>
            <Card.Title style={{ backgroundColor: '#BB6B62', color: 'white' }}>
              {e.title}
            </Card.Title>
            <Card.Body>
              {[e.description].toString().slice(0, 50) + '...'}
            </Card.Body>

            <Link to={`/events/${e._id}`}>Details</Link>

            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default HomeScreen
