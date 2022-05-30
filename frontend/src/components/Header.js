import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import SearchBox from './SearchBox'
const Header = () => {
  return (
    <Navbar variant='light' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>Drinkapp</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='mx-auto'
            style={{
              fontSize: 'large',
              fontWeight: '600',
            }}
            navbarScroll>
            <Nav.Item>
              {' '}
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {' '}
              <Nav.Link href='/events'>Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {' '}
              <Nav.Link href='/newevent'>Create Event</Nav.Link>
            </Nav.Item>

            {/* <Nav.Link href='/events'>Events</Nav.Link>
            <Nav.Link href='/newevent'>Create Event</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <SearchBox />
      </Container>
    </Navbar>
  )
}

export default Header
