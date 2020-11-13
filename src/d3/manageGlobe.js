// import * as d3 from 'd3'
import d3GeoZoom from 'd3-geo-zoom'

const updateTransformations = (event, svg, path) => {
  svg.selectAll('path').attr('d', path)
  svg.selectAll('circle').attr('transform', event.transform)
}

const manageGlobe = (svg, projection, path) => {
  const zoom = d3GeoZoom()

  const move = (event) => updateTransformations(event, svg, path)

  const manageSVG = zoom.projection(projection).northUp(true).onMove(move)

  manageSVG(svg.node())
}

export default manageGlobe
