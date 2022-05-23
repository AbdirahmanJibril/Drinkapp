import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const loadingpage = () => {
  return (
    <Link to='/events'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/image4.png'
            alt='First slide'
          />
        </Carousel.Item>
      </Carousel>
    </Link>
    // <Link to='/events'>
    //   <Container
    //     fluid
    //     style={{
    //       backgroundImage: 'url(/images/image4.png)',
    //       height: '768px',
    //       width: '1300',
    //     }}></Container>
    // </Link>
  )
}

export default loadingpage
