import React from 'react'
import { useParams } from 'react-router-dom'
import Events from '../evnetsSource'
import { Card, Col, Row } from 'react-bootstrap'

const DetailScreen = () => {
  let { id } = useParams()

  const foundEvent = Events.find(e => e.id === parseInt(id))

  return (
    <div>
      <Row className='py-5'>
        <Col sm={12} md={8}>
          <Card>
            <Card.Title as='h3'>{foundEvent.title}</Card.Title>
            <Card.Body>
              <Card.Text
                style={{
                  fontSize: 'large',

                  textAlign: 'left',
                }}>
                {foundEvent.EventComment.message}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body style={{ textAlign: 'left' }}>
              <Card.Text>Organizer : {foundEvent.creator}</Card.Text>
              <Card.Text>Guests : {foundEvent.guests.join(' , ')}</Card.Text>
              <Card.Text>Location : {foundEvent.EventLocation.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DetailScreen
