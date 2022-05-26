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
  )
}

export default loadingpage
