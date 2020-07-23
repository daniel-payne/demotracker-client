import * as d3 from 'd3'

const recenterGlobe = (selection, width, height, projection, SCALING_FACTOR) => {
  if (!selection) {
    return
  }

  const geoJson = JSON.parse(selection.outline)

  const point = d3.geoCentroid(geoJson)
  const bounds = d3.geoBounds(geoJson)
  const distance = d3.geoDistance(bounds[0], bounds[1])
  const newScaling = Math.max(height, width) / distance / Math.sqrt(SCALING_FACTOR)

  projection.rotate([-point[0], -point[1]])

  projection.scale(newScaling)
}

export default recenterGlobe
