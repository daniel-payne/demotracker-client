import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useApolloClient } from '@apollo/react-hooks'

import useLocation from 'hooks/useLocation'

import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'

const LOGIN = gql`
  mutation LOGIN($username: String, $password: String) {
    login(username: $username, password: $password) {
      id
      role
      session
    }
  }
`

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const LoginModal = (props) => {
  const { open, onClose } = props

  const client = useApolloClient()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleClickConnect = async () => {
    await client
      .mutate({ mutation: LOGIN, query: { username, password } })
      .then((result) => console.log(result))
    await client.resetStore()

    onClose()
  }

  const classes = useStyles()

  return (
    <div>
      <Dialog maxWidth="md" open={open} onClose={onClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box p={2}>
          <TextField
            value={username}
            variant="outlined"
            noValidate
            autoComplete="off"
            fullWidth
            autoFocus
            placeholder="UserName"
            onChange={handleUsernameChange}
          />
        </Box>
        <Box p={2}>
          <TextField
            value={password}
            variant="outlined"
            noValidate
            autoComplete="off"
            fullWidth
            autoFocus
            placeholder="Password"
            type="password"
            onChange={handlePasswordChange}
          />
        </Box>
        <Box p={2}>
          <Button variant="contained" color="primary" disableElevation onClick={handleClickConnect}>
            Connect To Terrorism Database
          </Button>
        </Box>
      </Dialog>
    </div>
  )
}

export default LoginModal
