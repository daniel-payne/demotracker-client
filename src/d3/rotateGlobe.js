import * as d3 from 'd3'

const rotateGlobe = (svg, projection, path) => {
  const config = {
    speed: 0.005,
    verticalTilt: -15,
    horizontalTilt: 0,
  }

  d3.timer(function (elapsed) {
    projection.rotate([
      -1 * (config.speed * elapsed - 500),
      config.verticalTilt,
      config.horizontalTilt,
    ])
    svg.selectAll('path').attr('d', path)
  })
}

export default rotateGlobe
