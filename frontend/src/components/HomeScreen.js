import React from 'react'
import Events from '../evnetsSource'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function HomeScreen() {
  return (
    <div>
      <h2>Live Events</h2>
      <Row>
        {Events.map(e => (
          <Col sm={12} md={3} key={e.id}>
            <Card>
              <Card.Title
                style={{ backgroundColor: '#4C3800', color: 'white' }}>
                {e.title} {e.time}{' '}
              </Card.Title>
              <Card.Body>{e.EventComment.message}</Card.Body>

              <Link to={`/events/${e.id}`}>Details</Link>

              <Card.Footer className='text-muted'>2 days ago</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
