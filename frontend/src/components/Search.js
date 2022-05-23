import React, { useState } from 'react'
import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Search = () => {
  const { keyword } = useParams()
  const [searched, setSearched] = useState([])

  useEffect(() => {
    const searchEvent = async () => {
      const { data } = await axios.get(`/events/search/${keyword}`)
      setSearched(data)
    }
    searchEvent()
  }, [keyword])
  console.log(searched)
  return (
    <div>
      <Row>
        <h1>Search Results</h1>
        <Col>
          <Card sm={12} md={6}>
            <Card.Header
              style={{
                backgroundColor: '#bb6b62',
                color: 'white',
              }}>
              found locations
            </Card.Header>
            {searched.map(foundEvent => (
              <Card.Body className='d-flex'>
                <Col sm={2}>
                  {' '}
                  <Link to={`/events/${foundEvent._id}`}>
                    {' '}
                    <Card.Text>{foundEvent.venue}</Card.Text>
                  </Link>
                </Col>
                <Col sm={8}>
                  <Card.Text as='h6'>
                    Description:
                    {[foundEvent.description].toString().slice(0, 20) +
                      '...'}{' '}
                  </Card.Text>
                  <Card.Text as='h6'>Organizer:{foundEvent.user} </Card.Text>
                  <Card.Text as='h6'>Geusts:{foundEvent.guests} </Card.Text>
                  <Card.Text as='h6'>Time:{foundEvent.time} </Card.Text>
                </Col>
              </Card.Body>
            ))}
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header
              style={{
                backgroundColor: '#bb6b62',
                color: 'white',
              }}>
              Number Events Found
            </Card.Header>
            <Card.Text as='h5'>{searched.length}</Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Search
