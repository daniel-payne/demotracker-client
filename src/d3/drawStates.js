import * as d3 from 'd3'

const drawStates = (svg, path, states, selectedState, onSelection) => {
  if (!states) {
    return
  }

  const data = states
    .filter((state) => state.outline)

    .map((state) => {
      const geoJson = JSON.parse(state.outline)

      geoJson.properties = {
        name: state.stateName,
        id: state.id,
        type: 'STATE',
      }

      return geoJson
    })

  const selection = svg
    .select('#map-display-states')
    .selectAll('path')
    .data(data, (d) => d.properties.id)

  selection
    .enter()
    .append('path')
    .attr('class', 'state')
    .attr('fill', 'gainsboro')
    .attr('stroke', 'DarkSeaGreen')
    .attr('stroke-width', '1px')
    .attr('d', path)

  selection.exit().remove()

  svg
    .select('#map-display-states')
    .selectAll('path')
    .on('mouseover', function (event, d) {
      if (!selectedState || selectedState.id !== d.properties.id) {
        d3.select(this).style('fill', 'DarkSeaGreen')
      }
    })
    .on('mouseout', function (event, d) {
      d3.select(this).style('fill', 'gainsboro')
    })
    .on('dblclick', function (event, d) {
      // d3.event.stopPropagation()

      if (onSelection) {
        onSelection({ type: 'STATE', id: d.properties.id, iso2Code: d.properties.iso2Code })
      }
    })

  if (selectedState) {
    svg
      .select('#map-display-states')
      .selectAll('path')
      .attr('opacity', function (d) {
        if (selectedState.id !== d.properties.id) {
          return 0.25
        }
        return 1.0
      })
  }
}

export default drawStates
