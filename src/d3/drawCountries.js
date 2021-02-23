import * as d3 from 'd3'

import debounce from 'utils/debounce'

let info

function showInfo() {
  d3.select('#map-display-info').text(info)
}

const delayedShowInfo = debounce(showInfo, 250)

const drawCountries = (svg, path, countries, selectedCountry, onSelection, onInform) => {
  if (!countries) {
    return
  }

  // const debounceHandleInform = debounce(handleInform, 500)

  const data = countries
    .filter((country) => country.outline)
    .map((country) => {
      const geoJson = JSON.parse(country.outline)

      geoJson.properties = {
        name: country.name,
        id: country.id,
        type: 'COUNTRY',
      }

      return geoJson
    })

  const selection = svg
    .select('#map-display-countries')
    .selectAll('path')
    .data(data, (d) => d.properties.id)

  selection
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('fill', 'gainsboro')
    .attr('stroke', 'DarkSeaGreen')
    .attr('stroke-opacity', 0.25)
    .attr('stroke-width', '1px')
    .attr('d', path)

  selection.exit().remove()

  svg
    .select('#map-display-countries')
    .selectAll('path')
    .on('mouseover', function (event, d) {
      if (!selectedCountry || selectedCountry.id !== d.properties.id) {
        d3.select(this).transition().delay(250).style('fill', 'DarkSeaGreen')

        info = d.properties.name
        delayedShowInfo()
      }
    })
    .on('mouseout', function (event, d) {
      d3.select(this).transition().style('fill', 'gainsboro')

      info = null
      showInfo()
    })
    .on('dblclick', function (event, d) {
      // d3.event.stopPropagation()
      if (onSelection) {
        onSelection({ type: 'COUNTRY', id: d.properties.id, iso2Code: d.properties.iso2Code })
      }
    })

  if (selectedCountry) {
    svg
      .select('#map-display-countries')
      .selectAll('path')
      .attr('opacity', function (d) {
        if (selectedCountry.id === d.properties.id) {
          return 0.25
        }
        return 0.25
      })
  }
}

export default drawCountries
