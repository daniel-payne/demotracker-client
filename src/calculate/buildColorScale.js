import * as d3 from 'd3'

const buildColorScale = (min, max) => {
  const logScale = d3.scaleLog().domain([min, max])

  const colorScale = d3.scaleSequential((d) => d3.interpolateYlOrRd(logScale(d)))

  return colorScale
}

export default buildColorScale
