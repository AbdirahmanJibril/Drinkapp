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
          <Nav className='mx-auto' style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/events'>Events</Nav.Link>
            <Nav.Link href='/newevent'>Create Event</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchBox />
      </Container>
    </Navbar>
  )
}

export default Header