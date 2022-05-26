import React from 'react'
import Map from 'react-map-gl'
import { Marker } from 'react-map-gl'
import { useRef, useCallback } from 'react'
import { MapRef } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
MapRef = useRef()
const TOKEN =
  'pk.eyJ1IjoiaWJuZWdhbCIsImEiOiJjbDNkbG05ZnYwOWI0M2tsNXl2bnN4dmk4In0.Um0_v8d_2PNfrllNn9bwGw'

const Map2 = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  })

  return (
    <>
      <Map
        ref={mapRef}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: 800, height: 600 }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={TOKEN}>
        <Marker longitude={-122.4} latitude={37.8} color='red' />
      </Map>
    </>
  )
}

export default Map2
