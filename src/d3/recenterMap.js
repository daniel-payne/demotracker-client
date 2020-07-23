import * as d3 from 'd3'

const recenterMap = (selection, scaling, width, height, projection, SCALING_RATIO) => {
  if (!selection) {
    return
  }

  const geoJson = JSON.parse(selection.outline)

  const point = d3.geoCentroid(geoJson)
  const bounds = d3.geoBounds(geoJson)
  const horizontalScale = (scaling * width) / (bounds[1][0] - bounds[0][0])
  const verticalScale = (scaling * height) / (bounds[1][1] - bounds[0][1])
  const newScaling = horizontalScale < verticalScale ? horizontalScale : verticalScale

  projection.scale(newScaling * SCALING_RATIO).center(point)
}

export default recenterMap
