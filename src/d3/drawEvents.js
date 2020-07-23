// import * as d3 from 'd3'
// import rewind from '@mapbox/geojson-rewind'

const drawEvents = (svg, projection, selected, smallMarkers) => {
  if (!selected || !selected.events || selected.events.length === 0) {
    return
  }

  const size = smallMarkers === true ? 10 : 50

  const data = selected.events.filter(
    (event) => event.longitude !== null && event.latitude !== null
  )

  const selection = svg
    .select('#map-display-events')
    .selectAll('circle')
    .data(data, (d) => d.id)

  selection
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return projection([d.longitude, d.latitude])[0]
    })
    .attr('cy', function (d) {
      return projection([d.longitude, d.latitude])[1]
    })
    .attr('r', size)
    .attr('stroke-width', 1)
    .attr('fill-opacity', 0.4)
    .attr('stroke-opacity', 0.8)
    .attr('fill', (d) => (d.numberKilled > 0 ? 'Crimson' : 'CornflowerBlue'))
    .attr('stroke', (d) => (d.numberKilled > 0 ? 'Crimson' : 'CornflowerBlue'))
    .attr('pointer-events', 'none')

  selection.exit().remove()
}

export default drawEvents
