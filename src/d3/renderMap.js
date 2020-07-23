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
import recenterMap from 'd3/recenterMap'
import manageMap from 'd3/manageMap'

const SCALING_RATIO = 1 / 2.6 / Math.PI

const renderMap = ({
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
}) => {
  const selected = selectedCity || selectedState || selectedCountry

  const svg = d3.select(targetSVG)

  const scaling = width * SCALING_RATIO

  const projection = d3
    .geoMercator()
    .scale(scaling)
    .translate([width / 2, height / 2])

  const path = d3.geoPath().projection(projection)

  recenterMap(selected, scaling, width, height, projection, SCALING_RATIO)

  removePaths(svg)

  drawGlobe(svg, path)
  drawGraticule(svg, path)

  drawCountries(svg, path, countries, selectedCountry, onSelection)
  drawStates(svg, path, states, selectedState, onSelection)
  drawCities(svg, path, cities, selectedCity, onSelection)

  drawMarkers(svg, path, markers, smallMarkers)

  drawEvents(svg, projection, selected, smallMarkers)

  fadeOut(svg, markers, states)

  manageMap(svg)
}

export default renderMap
