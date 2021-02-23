import * as d3 from 'd3'

import debounce from 'utils/debounce'

let info

function showInfo() {
  d3.select('#map-display-info').text(info)
}

const delayedShowInfo = debounce(showInfo, 250)

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
    .on('mouseover', function (event, d) {
      if (!selectedCity || selectedCity.id !== d.properties.id) {
        d3.select(this).transition().delay(250).style('fill', 'SaddleBrown')

        info = d.properties.name
        delayedShowInfo()
      }
    })
    .on('mouseout', function (event, d) {
      d3.select(this).transition().style('fill', 'Peru')

      info = null
      showInfo()
    })
    // .attr('pointer-events', 'none')
    .on('dblclick', function (event, d) {
      // d3.event.stopPropagation()
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
        return 1.0
      })
  }
}

export default drawCities
