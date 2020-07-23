const fadeOut = (svg, markers, states) => {
  if (markers && markers.length > 0) {
    if (states && states.length > 0) {
      svg.select('#map-display-countries').selectAll('path').attr('opacity', 0.1)
    } else {
      svg.select('#map-display-countries').selectAll('path').attr('opacity', 0.5)
    }
    svg.select('#map-display-states').selectAll('path').attr('opacity', 0.2)
    svg.select('#map-display-cities').selectAll('path').attr('opacity', 0.2)
  }
}

export default fadeOut
