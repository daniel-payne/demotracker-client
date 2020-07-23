import * as d3 from 'd3'
import rewind from '@mapbox/geojson-rewind'

const createHexagon = (longitude, latitude, size) => {
  const coordinates = []

  const numberOfSides = 6

  coordinates.push([longitude + size * Math.cos(0), latitude + size * Math.sin(0)])

  for (let i = 1; i <= numberOfSides; i += 1) {
    coordinates.push([
      longitude + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
      latitude + size * Math.sin((i * 2 * Math.PI) / numberOfSides),
    ])
  }

  return [coordinates]
}

const drawMarkers = (svg, path, markers, smallMarkers) => {
  if (!markers || markers.length === 0) {
    return
  }

  const size = smallMarkers === true ? 0.05 : 0.5

  const data = markers
    .filter((marker) => marker.longitude !== null && marker.latitude !== null)
    .map((marker) => {
      const geoJson = {
        type: 'Polygon',
        coordinates: createHexagon(marker.longitude, marker.latitude, size),
      }

      geoJson.properties = {
        eventCount: marker.eventCount,
        id: marker.id,
        type: 'marker',
      }

      return rewind(geoJson, true)
    })

  const MIN = 0
  const MAX = 1

  const [min, max] = data.reduce(
    (result, item) => {
      const { eventCount } = item.properties || {}

      if (!result[MAX]) {
        result[MAX] = eventCount
      }
      if (!result[MIN]) {
        result[MIN] = eventCount
      }

      if (result[MAX] < eventCount) {
        result[MAX] = eventCount
      }
      if (result[MIN] > eventCount) {
        result[MIN] = eventCount
      }

      return result
    },
    [undefined, undefined]
  )

  const logScale = d3.scaleLog().domain([min, max])

  const colorScale = d3.scaleSequential((d) => d3.interpolateYlOrRd(logScale(d)))

  const selection = svg
    .select('#map-display-markers')
    .selectAll('path')
    .data(data, (d) => d.id)

  selection
    .enter()
    .append('path')
    .attr('class', 'marker')
    .attr('fill', (d) => colorScale(d.properties.eventCount))
    .attr('opacity', 0.8)
    .attr('pointer-events', 'none')
    .attr('d', path)

  selection.exit().remove()
}

export default drawMarkers
