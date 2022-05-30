import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Loader'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Message from './Message'

const Search = () => {
  const { keyword } = useParams()
  const [searched, setSearched] = useState([])
  const [status, setStatus] = useState()

  useEffect(() => {
    const searchEvent = async () => {
      const response = await axios.get(`/events/search/${keyword}`)
      setStatus(response.statusText)
      setSearched(response.data)
    }

    searchEvent()
  }, [keyword])

  return (
    <div>
      {status !== 'OK' ? (
        <Loader />
      ) : searched.length === 0 ? (
        <Message variant='danger'>
          <h5>No Events Found</h5>
        </Message>
      ) : (
        <Row>
          <h1>Search Results</h1>
          <Col sm={12} md={10}>
            <Card>
              <Card.Header
                style={{
                  backgroundColor: '#bb6b62',
                  color: 'white',
                }}>
                Found locations
              </Card.Header>
              {searched.map(foundEvent => (
                <Card key={foundEvent._id}>
                  <Card.Body>
                    <Card.Header as='h4'>
                      <Link to={`/events/${foundEvent._id}`}>
                        {' '}
                        <Card.Text>{foundEvent.venue}</Card.Text>
                      </Link>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text as='h6'>
                        Description:
                        {[foundEvent.description].toString().slice(0, 20) +
                          '...'}{' '}
                      </Card.Text>
                      <Card.Text as='h6'>
                        Organizer:{foundEvent.user}{' '}
                      </Card.Text>
                      <Card.Text as='h6'>Geusts:{foundEvent.guests} </Card.Text>
                      <Card.Text as='h6'>Time:{foundEvent.time} </Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              ))}
            </Card>
          </Col>
          <Col sm={12} md={2}>
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
      )}
    </div>
  )
}

export default Search
