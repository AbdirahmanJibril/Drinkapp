import React from 'react'
import { Container, Row, Col } from 'react-bootstrap/'

const Footer = () => {
  return (
    <footer>
      <Container style={{ textAlign: 'center' }}>
        <Row>
          <Col>copyright &copy; Drinkapp</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
