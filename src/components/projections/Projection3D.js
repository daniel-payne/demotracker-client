import React, { useState, useRef, useEffect } from 'react'

import renderGlobe from 'd3/renderGlobe'

const Projection3D = (props) => {
  const {
    countries,
    markers,
    selectedCountry,
    selectedState,
    selectedCity,
    onSelection,
    smallMarkers,
    enableRotation,
  } = props

  const targetSVG = useRef(null)

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight - 64)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight)

    updateWidthAndHeight()

    const states = selectedCountry ? selectedCountry.states : undefined
    const cities = selectedCountry ? selectedCountry.cities : undefined

    renderGlobe({
      targetSVG: targetSVG.current,
      height,
      width,
      onSelection,
      countries,
      markers,
      states,
      cities,
      selectedCountry,
      selectedState,
      selectedCity,
      smallMarkers,
      enableRotation,
    })
  })

  return (
    <svg className="Projection3D" ref={targetSVG} width={width} height={height}>
      <g id="map-display-globe" />
      <g id="map-display-graticule" />
      <g id="map-display-countries" />
      <g id="map-display-states" />
      <g id="map-display-cities" />

      <g id="map-display-markers" />
    </svg>
  )
}

export default Projection3D
