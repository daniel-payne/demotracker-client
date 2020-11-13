import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useApolloClient } from '@apollo/react-hooks'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import useLocation from 'hooks/useLocation'

import PlaceModal from 'pages/PlaceModal'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  goto: {
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(1),
    cursor: 'pointer',
    opacity: 0.75,
  },
  focused: {
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}))

const Spacer = () => <div style={{ flexGrow: 1 }}></div>

const PageNavigation = (props) => {
  const { show, overlay, country, state, city } = props

  const setLocation = useLocation()[1]
  const classes = useStyles()

  const [isOpen, setOpen] = useState(false)

  const isWorldFocused = country === undefined
  const isCountryFocused = country !== undefined && state === undefined && city === undefined
  const isStateFocused = state !== undefined
  const isCityFocused = city !== undefined

  const isDataFocused = show === 'DATA' || show === '' || show === undefined
  const isGlobeFocused = show === 'GLOBE'
  const isMapFocused = show === 'MAP'

  const isNoneFocused = overlay === 'NONE' || overlay === '' || overlay === undefined
  const isTerrorismFocused = overlay === 'TERRORISM'

  const handleClickWorld = () => {
    setLocation({ nextPath: `/world` })
  }

  const handleClickCountry = () => {
    setLocation({ nextPath: `/country/${country.id}` })
  }

  const handleClickShow = (next) => {
    setLocation({ nextShow: next })
  }
  const handleClickShowGlobe = () => handleClickShow('GLOBE')
  const handleClickShowMap = () => handleClickShow('MAP')
  const handleClickShowData = () => handleClickShow('DATA')

  const handleClickOverlay = (next) => {
    setLocation({ nextOverlay: next })
  }
  const handleClickOverlayNone = () => handleClickOverlay('NONE')
  const handleClickOverlayTerrorism = () => handleClickOverlay('TERRORISM')

  const handleClickFind = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const LOGIN = gql`
    mutation LOGIN {
      login(username: "daniel.payne@keldan.co.uk", password: "hellorain") {
        id
        role
        session
      }
    }
  `

  const LOGOUT = gql`
    mutation LOGOUT {
      logout {
        id
        role
        session
      }
    }
  `

  // const USER = gql`
  //   query USER {
  //     viewer {
  //       id
  //       role
  //     }
  //   }
  // `

  const client = useApolloClient()

  const handleClickConnect = async () => {
    await client.mutate({ mutation: LOGIN }).then((result) => console.log(result))
    await client.resetStore()
  }

  const handleClickDisconnect = async () => {
    await client.mutate({ mutation: LOGOUT }).then((result) => console.log(result))
    await client.resetStore()
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          className={isWorldFocused ? classes.focused : classes.goto}
          variant="h6"
          onClick={handleClickWorld}
        >
          World
        </Typography>
        <Button onClick={handleClickConnect}>Connect</Button>{' '}
        <Button onClick={handleClickDisconnect}>Disconnect</Button>
        {country && (
          <Typography
            className={isCountryFocused ? classes.focused : classes.goto}
            variant="h6"
            onClick={handleClickCountry}
          >
            &nbsp; {country.name}
          </Typography>
        )}
        {state && (
          <Typography className={isStateFocused ? classes.focused : classes.goto} variant="h6">
            &nbsp; {state.name}
          </Typography>
        )}
        &nbsp;
        {city && (
          <Typography className={isCityFocused ? classes.focused : classes.goto} variant="h6">
            {city.name}
          </Typography>
        )}
        <Spacer />
        <Box pr={2}>
          <Typography color="textSecondary">Show</Typography>
        </Box>
        <ButtonGroup variant="outlined" disableElevation>
          <Button disabled={isDataFocused === true} onClick={handleClickShowData}>
            Data
          </Button>
          <Button disabled={isMapFocused === true} onClick={handleClickShowMap}>
            Map
          </Button>
          <Button disabled={isGlobeFocused === true} onClick={handleClickShowGlobe}>
            Globe
          </Button>
        </ButtonGroup>
        <Box pr={2} pl={4}>
          <Typography color="textSecondary">Overlay</Typography>
        </Box>
        <ButtonGroup variant="outlined" disableElevation>
          <Button disabled={isNoneFocused === true} onClick={handleClickOverlayNone}>
            None
          </Button>
          <Button disabled={isTerrorismFocused === true} onClick={handleClickOverlayTerrorism}>
            Terrorism
          </Button>
        </ButtonGroup>
        <Button variant="contained" color="primary" disableElevation onClick={handleClickFind}>
          Find Place
        </Button>
      </Toolbar>
      <PlaceModal open={isOpen} onClose={handleClose} />
    </AppBar>
  )
}

export default PageNavigation
