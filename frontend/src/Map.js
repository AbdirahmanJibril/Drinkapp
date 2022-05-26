import React, { useRef, useEffect, useCallback, useState } from 'react'

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import Geocoder from 'react-map-gl-geocoder'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWJuZWdhbCIsImEiOiJjbDNkbG05ZnYwOWI0M2tsNXl2bnN4dmk4In0.Um0_v8d_2PNfrllNn9bwGw'

const Map = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(51.5033)
  const [lat, setLat] = useState(-0.1195)
  const [zoom, setZoom] = useState(15)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  const fetchData = useCallback(() => {
    const geocodingClient = new mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    })

    // geocoding with postcode
    return geocodingClient
      .forwardGeocode({
        query: 'SW1X 8LB',
        limit: 1,
      })
      .send()
      .then(response => {
        const match = response.body
        const coordinates = match.features[0].geometry.coordinates
        const placeName = match.features[0].place_name
        const center = match.features[0].center

        return {
          type: 'Feature',
          center: center,
          geometry: {
            type: 'Point',
            coordinates: coordinates,
          },
          properties: {
            description: placeName,
          },
        }
      })
  }, [])

  useEffect(() => {
    if (!map.current) return // Waits for the map to initialise

    const results = fetchData()

    results.then(marker => {
      // create a HTML element for each feature
      var el = document.createElement('div')
      el.className = 'map'

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<p>' + marker.properties.description + '</p>')
        )
        .addTo(map.current)

      map.current.on('load', async () => {
        map.current.flyTo({
          center: marker.center,
        })
      })
    })
  }, [fetchData])

  return (
    <div className='mapwindow'>
      <div as='div' className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>

      <div ref={mapContainer} className='map-container' />
    </div>
  )
}

export default Map
