import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventWeapons = (props) => {
  const { event } = props
  const { weaponType, weaponDetails } = event

  return (
    <React.Fragment>
      <Box>
        <Typography variant="caption" display="inline">
          <span>Weapons : </span>
        </Typography>
        <Typography variant="body2" display="inline" color="primary">
          <span>{weaponType}</span>
        </Typography>
        <Typography variant="caption" display="inline">
          <span> {weaponDetails}</span>
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default EventWeapons
