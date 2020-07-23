import React from 'react'

import useLocation from 'hooks/useLocation'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  padded: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  indicator: {
    fontSize: 'x-small',
    paddingLeft: theme.spacing(2),
  },
}))

const StateOverview = (props) => {
  const { country, state, colorScale } = props
  const { name, id, eventCount } = state
  const { id: countryId } = country

  const setLocation = useLocation()[1]
  const classes = useStyles()

  const color = colorScale(state.eventCount)
  const style = { color }

  const handleClick = () => {
    setLocation({ nextPath: `/country/${countryId}/state/${id}` })
  }

  return (
    <Button
      className={classes.padded}
      variant="outlined"
      color="primary"
      disableElevation
      onClick={handleClick}
    >
      <span>{name}</span>
      {eventCount && (
        <span className={classes.indicator} style={style}>
          {eventCount ? eventCount.toLocaleString() : ''}
        </span>
      )}
    </Button>
  )
}

export default StateOverview
