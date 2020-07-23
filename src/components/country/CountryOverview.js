import React from 'react'
import PropTypes from 'prop-types'

import useLocation from 'hooks/useLocation'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import 'css/CountryOverview.css'

const useStyles = makeStyles((theme) => ({
  indicator: {
    fontSize: 'x-small',
    paddingLeft: theme.spacing(2),
  },
}))

const CountryOverview = (props) => {
  const { country, colorScale } = props
  const { name, eventCount } = country

  const setLocation = useLocation()[1]
  const classes = useStyles()

  const color = colorScale(country.eventCount)
  const style = { color }

  const handleClick = () => {
    setLocation({ nextPath: `/country/${country.id}` })
  }

  return (
    <div className="CountryOverview">
      <Box m={1}>
        <Button variant="outlined" color="primary" disableElevation onClick={handleClick}>
          <span>{name}</span>
          {eventCount && (
            <span className={classes.indicator} style={style}>
              {eventCount ? eventCount.toLocaleString() : ''}
            </span>
          )}
        </Button>
      </Box>
    </div>
  )
}

CountryOverview.propTypes = {
  country: PropTypes.object.isRequired,
  colorScale: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
}

export default CountryOverview
