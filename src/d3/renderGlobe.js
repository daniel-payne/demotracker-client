import * as d3 from 'd3'

import drawGlobe from 'd3/drawGlobe'
import drawGraticule from 'd3/drawGraticule'

import drawCountries from 'd3/drawCountries'
import drawStates from 'd3/drawStates'
import drawCities from 'd3/drawCities'

import drawMarkers from 'd3/drawMarkers'
import drawEvents from 'd3/drawEvents'

import fadeOut from 'd3/fadeOut'
import removePaths from 'd3/removePaths'
import recenterGlobe from 'd3/recenterGlobe'
import manageGlobe from 'd3/manageGlobe'
import rotateGlobe from 'd3/rotateGlobe'

const MARGIN = 20

const SCALING_FACTOR = 2.8

const renderGlobe = ({
  targetSVG,
  height,
  width,
  onSelection,
  countries,
  states,
  cities,
  markers,
  selectedCountry,
  selectedState,
  selectedCity,
  smallMarkers,
  enableRotation,
}) => {
  const selected = selectedCity || selectedState || selectedCountry

  const svg = d3.select(targetSVG)

  const scaling = Math.min(width, height) / 2 - MARGIN

  const projection = d3
    .geoOrthographic()
    .translate([width / 2, height / 2])
    .scale(scaling)
    .clipAngle(90)

  const path = d3.geoPath().projection(projection)

  let timer

  recenterGlobe(selected, width, height, projection, SCALING_FACTOR)

  removePaths(svg)

  drawGlobe(svg, path)
  drawGraticule(svg, path)

  drawCountries(svg, path, countries, selectedCountry, onSelection)

  drawStates(svg, path, states, selectedState, onSelection)
  drawCities(svg, path, cities, selectedCity, onSelection)

  drawMarkers(svg, path, markers, smallMarkers)

  drawEvents(svg, projection, selected, smallMarkers)

  fadeOut(svg, markers, states)

  manageGlobe(svg, projection, path)

  if (enableRotation === true) {
    timer = rotateGlobe(svg, projection, path)
  }

  return timer
}

export default renderGlobe
