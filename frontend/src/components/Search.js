import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Row, Col, Card, CardGroup } from 'react-bootstrap'

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

  return (
    <div>
      <Row></Row>
      {searched.map(foundEvent => (
        <Col sm={12} md={3} key={foundEvent._id}>
          <CardGroup>
            <Card>
              <Card.Header
                style={{ backgroundColor: '#4C3800', color: 'white' }}>
                {foundEvent.venue}
              </Card.Header>
              <Card.Body>
                <Card.Text>{foundEvent.description}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      ))}
    </div>
  )
}

export default Search
