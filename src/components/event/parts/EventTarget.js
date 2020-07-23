import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventTarget = (props) => {
  const { event } = props
  const { targetType, targetSubType } = event

  return (
    <Box pb={1}>
      <Typography variant="caption" display="inline">
        <span>Target: </span>
      </Typography>
      <Typography variant="body2" display="inline" color="primary">
        <span>{targetType}</span>
      </Typography>
      <Typography variant="caption" display="inline">
        <span> {targetSubType}</span>
      </Typography>
    </Box>
  )
}

export default EventTarget
