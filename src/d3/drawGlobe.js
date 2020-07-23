const drawGlobe = (svg, path) => {
  svg
    .select('#map-display-globe')
    .append('path')
    .datum({ type: 'Sphere' })
    .attr('class', 'globe')
    .attr('d', path)
}

export default drawGlobe
