import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar
        variant='dark'
        style={{ backgroundColor: '#4C3800', fontWeight: 'bold' }}
        expand='lg'
        collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Drinkapp</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='mx-auto'
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href='#action1'>Home</Nav.Link>
              <Nav.Link href='#action2'>Link</Nav.Link>
              <NavDropdown title='Link' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
