import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()
  let Venue = searchParams.get('filter')
  const submitHandler = e => {
    e.preventDefault()

    if (searchParams) {
      navigate(`/events/search/${Venue}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form className='d-flex' onSubmit={submitHandler}>
      <Form.Control
        value={searchParams.get('filter') || ''}
        onChange={event => {
          let filter = event.target.value
          if (filter) {
            setSearchParams({ filter })
          } else {
            setSearchParams({})
          }
        }}
        placeholder='Search Events...'
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button type='submit' variant='dark' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
