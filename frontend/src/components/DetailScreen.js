import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Map from '../Map'
import Loader from '../Loader'

const DetailScreen = () => {
  const [drinkEvent, setEvent] = useState({})
  const [status, setStatus] = useState()

  let { id } = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await axios.get(`/events/${id}`)
      setStatus(response.statusText)
      setEvent(response.data)
    }
    fetchEvent()
  }, [id])

  return (
    <div>
      {status !== 'OK' ? (
        <Loader />
      ) : (
        <Row className='py-3'>
          <h2 style={{ margin: '20px 0' }}>Event Details</h2>
          <Col sm={12} md={8}>
            <Card>
              <Card.Header
                style={{ backgroundColor: '#BB6B62', color: 'white' }}>
                Featured
              </Card.Header>
              <Card.Title as='h3'>{drinkEvent.title}</Card.Title>
              <Card.Body>
                <Card.Text
                  style={{
                    fontSize: 'large',

                    textAlign: 'left',
                  }}>
                  {drinkEvent.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card>
              <Card.Header
                style={{ backgroundColor: '#BB6B62', color: 'white' }}>
                Key event info
              </Card.Header>
              <Card.Body style={{ textAlign: 'left' }}>
                <Card.Text>Organizer : {drinkEvent.user}</Card.Text>
                <Card.Text>Guests : {[drinkEvent.guests].join(' ')}</Card.Text>
                <Card.Text>Location : {drinkEvent.venue}</Card.Text>
                <Card.Text>Event Type : {drinkEvent.eventType}</Card.Text>
                <Card.Text>Event Time: {drinkEvent.time}</Card.Text>
                <Card.Text>Event postcode: {drinkEvent.postcode}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Map />
        </Row>
      )}
    </div>
  )
}

export default DetailScreen
