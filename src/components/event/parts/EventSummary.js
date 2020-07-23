import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventSummary = (props) => {
  const { event } = props
  const { summary } = event

  return (
    <Box pb={1}>
      <Typography variant="body2">{summary}</Typography>
    </Box>
  )
}

export default EventSummary
