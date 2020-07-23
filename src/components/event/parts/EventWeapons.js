import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventWeapons = (props) => {
  const { event } = props
  const {
    primaryWeaponType,
    primaryWeaponSubType,
    secondaryWeaponType,
    secondaryWeaponSubType,
    tertiaryWeaponType,
    tertiaryWeaponSubType,
  } = event

  return (
    <React.Fragment>
      <Box>
        <Typography variant="caption" display="inline">
          <span>Weapons : </span>
        </Typography>
        <Typography variant="body2" display="inline" color="primary">
          <span>{primaryWeaponType}</span>
        </Typography>
        <Typography variant="caption" display="inline">
          <span> {primaryWeaponSubType}</span>
        </Typography>
      </Box>
      {secondaryWeaponType && (
        <Box pb={1}>
          <Typography variant="caption" display="inline">
            <span>Weapons : </span>
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            <span>{secondaryWeaponType}</span>
          </Typography>
          <Typography variant="caption" display="inline">
            <span> {secondaryWeaponSubType}</span>
          </Typography>
        </Box>
      )}
      {tertiaryWeaponType && (
        <Box pb={1}>
          <Typography variant="caption" display="inline">
            <span>Weapons : </span>
          </Typography>
          <Typography variant="body2" display="inline" color="primary">
            <span>{tertiaryWeaponType}</span>
          </Typography>
          <Typography variant="caption" display="inline">
            <span> {tertiaryWeaponSubType}</span>
          </Typography>
        </Box>
      )}
    </React.Fragment>
  )
}

export default EventWeapons
