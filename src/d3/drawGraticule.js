import * as d3 from 'd3'

const drawGraticule = (svg, path) => {
  const graticule = d3.geoGraticule()

  svg
    .select('#map-display-graticule')
    .append('path')
    .datum(graticule())
    .attr('class', 'graticule')
    .attr('d', path)
}

export default drawGraticule
