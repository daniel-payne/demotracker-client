import * as d3 from 'd3'

const drawCities = (svg, path, cities, selectedCity, onSelection) => {
  if (!cities) {
    return
  }

  const data = cities
    .filter((city) => city.outline)

    .map((city) => {
      const geoJson = JSON.parse(city.outline)

      geoJson.properties = {
        name: city.name,
        id: city.id,
        type: 'CITY',
      }

      return geoJson
    })

  const selection = svg
    .select('#map-display-cities')
    .selectAll('path')
    .data(data, (d) => d.properties.id)

  selection
    .enter()
    .append('path')
    .attr('class', 'city')
    .attr('fill', 'Peru')
    .attr('stroke-width', '0px')
    .attr('opacity', 0.75)
    .attr('d', path)

  selection.exit().remove()

  svg
    .select('#map-display-cities')
    .selectAll('path')
    .on('mouseover', function (d) {
      if (!selectedCity || selectedCity.id !== d.properties.id) {
        d3.select(this).style('fill', 'SaddleBrown')
      }
    })
    .on('mouseout', function (d) {
      d3.select(this).style('fill', 'Peru')
    })
    // .attr('pointer-events', 'none')
    .on('dblclick', function (d) {
      d3.event.stopPropagation()
      if (onSelection) {
        onSelection({ type: 'CITY', id: d.properties.id })
      }
    })

  if (selectedCity) {
    svg
      .select('#map-display-cities')
      .selectAll('path')
      .attr('opacity', function (d) {
        if (selectedCity.id !== d.properties.id) {
          return 0.15
        }
        return 0.25
      })
  }
}

export default drawCities
