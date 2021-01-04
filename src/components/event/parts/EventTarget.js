import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventTarget = (props) => {
  const { event } = props
  const { targetType, targetDetails } = event

  return (
    <Box pb={1}>
      <Typography variant="caption" display="inline">
        <span>Target: </span>
      </Typography>
      <Typography variant="body2" display="inline" color="primary">
        <span>{targetType}</span>
      </Typography>
      <Typography variant="caption" display="inline">
        <span> {targetDetails}</span>
      </Typography>
    </Box>
  )
}

export default EventTarget
