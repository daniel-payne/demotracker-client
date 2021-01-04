import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationOffIcon from '@material-ui/icons/LocationOff'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import GpsOffIcon from '@material-ui/icons/GpsOff'
import ExploreOffIcon from '@material-ui/icons/ExploreOff'
import ExploreIcon from '@material-ui/icons/Explore'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import InfoIcon from '@material-ui/icons/Info'
import DateRangeIcon from '@material-ui/icons/DateRange'

import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AssignmentIcon from '@material-ui/icons/Assignment'
import MapIcon from '@material-ui/icons/Map'
import PublicIcon from '@material-ui/icons/Public'
import SearchIcon from '@material-ui/icons/Search'

const WorldPage = () => {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleOpen = (event, newValue) => {
    setOpen(true)
  }
  const handleClose = (event, newValue) => {
    setOpen(false)
  }

  return (
    <div style={{ height: '100%' }}>
      <Fab
        color="primary"
        aria-label="add"
        style={{ zIndex: 999, position: 'absolute', top: 96, right: 32 }}
      >
        <VisibilityOffIcon />
      </Fab>
      <div style={{ height: 64 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {/* <Link color="textSecondary">World</Link>
              <span color="textSecondary">&nbsp;/&nbsp;</span>
              <Link color="textSecondary">United Kingdom</Link>
              <span color="textSecondary">&nbsp;/&nbsp;</span> */}
              <span color="textPrimary">London</span>
            </Typography>

            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <Button color="inherit" variant="outlined" aria-label="login">
              Login
            </Button>
          </Toolbar>
          <SwipeableDrawer anchor="left" open={open} onClose={handleClose}>
            <List>
              <ListSubheader disableSticky={true}>Overlay Data</ListSubheader>

              <ListItem button>
                <ListItemIcon>
                  <LocationOffIcon />
                </ListItemIcon>
                <ListItemText primary="None" />
              </ListItem>
              <ListItem button selected>
                <ListItemIcon>
                  <LocationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Wikipedia Terrorism Reports"
                  secondary="(1970-2021) 3,231 Incidents"
                />
                <ListItemSecondaryAction>
                  <IconButton>
                    <DateRangeIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="secondary" checked />}
                  label="(1970 - 2018) 3,231 Incidents"
                  labelPlacement="end"
                />
              </ListItem>
              <ListItem>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="secondary" />}
                  label="(2000 - 2018) 1,732 Incidents"
                  labelPlacement="end"
                />
              </ListItem>
              <ListItem>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="secondary" />}
                  label="(2015 - 2018) 543 Incidents"
                  labelPlacement="end"
                />
              </ListItem>
              <ListItem>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="secondary" />}
                  label="(2018) 109 Incidents"
                  labelPlacement="end"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Global Terrorism Database"
                  secondary="(1970-2018) 175,000 Incidents"
                />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnIcon color="inherited" />
                </ListItemIcon>
                <ListItemText primary="Voyage Manager Events" secondary="(Last 3 Days) 32 Events" />
              </ListItem>
            </List>
            <Divider />

            <List>
              <ListSubheader disableSticky={true}>Overlay People</ListSubheader>

              <ListItem button selected>
                <ListItemIcon>
                  <GpsOffIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="None" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GpsFixedIcon />
                </ListItemIcon>
                <ListItemText primary="Current Positions" secondary="23 Collogues" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GpsFixedIcon />
                </ListItemIcon>
                <ListItemText primary="Current &amp; Future Positions" secondary="23 Collogues" />
              </ListItem>
            </List>
            <Divider />

            <List>
              <ListSubheader disableSticky={true}>Display</ListSubheader>

              <ListItem button>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="All Regions" />
              </ListItem>

              <ListItem button selected>
                <ListItemIcon>
                  <ExploreOffIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Regions Containing Data" />
              </ListItem>
            </List>
            <Divider />

            <List style={{ maxWidth: 364 }}>
              <ListItem>
                {/* <ListItemIcon>
                  <MailIcon />
                </ListItemIcon> */}
                <ListItemText
                  primary="Due to license restrictions we can not freely share the Global Terrorism Database or Voyage Manager Events"
                  secondary="If you are a registered user of Voyage Manager please contact our partner for an access instructions"
                />
              </ListItem>
            </List>
          </SwipeableDrawer>
        </AppBar>
      </div>
      <div style={{ height: 'calc(100% - 128px)' }}>
        <Container
          maxWidth={false}
          disableGutters
          style={{
            height: '100%',
            width: '100%',

            overflow: 'auto',
            position: 'relative',
            border: '10px solid Gainsboro',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'Silver',
            }}
          >
            &nbsp;
          </div>
        </Container>
      </div>
      <div style={{ height: 64 }}>
        <BottomNavigation
          style={{
            position: 'relative',
            bottom: 0,
          }}
          value={value}
          onChange={handleChange}
          showLabels
        >
          <BottomNavigationAction label="Data" icon={<AssignmentIcon />} />
          <BottomNavigationAction label="Map" icon={<MapIcon />} />
          <BottomNavigationAction label="Globe" icon={<PublicIcon />} />
        </BottomNavigation>
      </div>
    </div>
  )
}

export default WorldPage
