import d3GeoZoom from 'd3-geo-zoom'

const redrawPaths = (svg, path) => () => {
  svg.selectAll('path').attr('d', path)
}

const manageGlobe = (svg, projection, path) => {
  const zoom = d3GeoZoom()
  const manageSVG = zoom.projection(projection).northUp(true).onMove(redrawPaths(svg, path))

  manageSVG(svg.node())
}

export default manageGlobe
