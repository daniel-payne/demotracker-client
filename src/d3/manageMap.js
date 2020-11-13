import * as d3 from 'd3'

function updateTransformations(event, svg) {
  svg
    .selectAll('path')
    .attr('vector-effect', 'non-scaling-stroke')
    .attr('transform', event.transform)

  svg
    .selectAll('circle')
    .attr('vector-effect', 'non-scaling-stroke')
    .attr('transform', event.transform)
}

const manageMap = (svg) => {
  const zoom = (event) => updateTransformations(event, svg)

  const manageSVG = d3.zoom().scaleExtent([0.001, 250]).on('zoom', zoom)

  svg.call(manageSVG)
}

export default manageMap
