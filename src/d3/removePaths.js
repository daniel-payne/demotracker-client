const removePaths = (svg) => {
  svg.selectAll('path').remove()
  svg.selectAll('circle').remove()
}

export default removePaths
