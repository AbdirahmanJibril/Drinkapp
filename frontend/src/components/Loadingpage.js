import React from 'react'
import { Link } from 'react-router-dom'

const loadingpage = () => {
  return (
    <Link to='/events'>
      <div
        style={{
          backgroundImage: 'url(/images/image4.png)',
          height: '768px',
          width: '1300',
        }}></div>
    </Link>
  )
}

export default loadingpage
