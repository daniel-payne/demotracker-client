import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventNumbers = (props) => {
  const { event } = props
  const { numberKilled, numberWounded } = event

  return (
    <Box pb={1}>
      <Typography variant="caption" display="inline">
        <span>Killed: </span>
        <span>{numberKilled}</span>
      </Typography>
      <span>&nbsp;</span>
      <Typography variant="caption" display="inline">
        <span>Wounded: </span>
        <span>{numberWounded}</span>
      </Typography>
    </Box>
  )
}

export default EventNumbers
