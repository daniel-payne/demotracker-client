import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'

import useLocation from 'hooks/useLocation'

import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const PLACES = gql`
  query places($match: String!) {
    places(match: $match) {
      id
      name
      countryName
      countryId
      displayOrder
      type
    }
  }
`

const PlaceModal = (props) => {
  const { open, onClose } = props

  const [match, setMatch] = useState(null)

  const classes = useStyles()
  const setLocation = useLocation()[1]

  const [getPlaces, { data }] = useLazyQuery(PLACES)

  const handleChange = (event) => {
    const match = event.target.value

    setMatch(match)

    if (match && match.length >= 3) {
      getPlaces({
        variables: { match },
      })
    }
  }

  const handleChoice = (place) => {
    onClose()

    let nextPath

    if (place.type === 'COUNTRY') {
      nextPath = `/country/${place.id}`
    } else if (place.type === 'STATE') {
      nextPath = `/country/${place.countryId}/state/${place.id}`
    } else if (place.type === 'CITY') {
      nextPath = `/country/${place.countryId}/city/${place.id}`
    }

    setLocation({ nextPath })
  }

  const { places } = data || {}

  return (
    <div>
      <Dialog fullScreen fullWidth maxWidth="md" open={open} onClose={onClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Find Place
            </Typography>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <TextField
            value={match}
            onChange={handleChange}
            variant="outlined"
            noValidate
            autoComplete="off"
            fullWidth
            autoFocus
            placeholder="Type a Country, State, or City"
          />
        </Box>
        {places && (
          <List>
            {places.map((place) => (
              <React.Fragment>
                <ListItem button onClick={() => handleChoice(place)}>
                  <ListItemText primary={place.name} secondary={place.countryName} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
      </Dialog>
    </div>
  )
}

export default PlaceModal
