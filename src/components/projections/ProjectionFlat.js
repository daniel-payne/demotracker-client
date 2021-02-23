import React, { useState, useRef, useEffect } from 'react'

import renderMap from 'd3/renderMap'

const ProjectionFlat = (props) => {
  const {
    countries,
    markers,
    selectedCountry,
    selectedState,
    selectedCity,
    onSelection,
    onInform,
    smallMarkers,
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

    renderMap({
      targetSVG: targetSVG.current,
      height,
      width,
      onSelection,
      onInform,
      countries,
      markers,
      states,
      cities,
      selectedCountry,
      selectedState,
      selectedCity,
      smallMarkers,
    })
  })

  return (
    <svg className="ProjectionFlat" ref={targetSVG} width={width} height={height}>
      <g id="map-display-globe" />
      <g id="map-display-graticule" />
      <g id="map-display-countries" />
      <g id="map-display-states" />
      <g id="map-display-cities" />

      <g id="map-display-markers" />
      <g id="map-display-events" />

      <text id="map-display-info" x="20" y="35" fill="SaddleBrown" font-size="large"></text>
    </svg>
  )
}

export default ProjectionFlat
