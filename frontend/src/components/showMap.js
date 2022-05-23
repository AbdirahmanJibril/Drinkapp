import React from 'react'

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const showMap = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaWJuZWdhbCIsImEiOiJjbDNkbG05ZnYwOWI0M2tsNXl2bnN4dmk4In0.Um0_v8d_2PNfrllNn9bwGw',
  })

  return (
    <Map
      style='mapbox://styles/mapbox/streets-v9'
      containerStyle={{
        height: '50vh',
        width: '90vw',
      }}>
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  )
}

export default showMap
