import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function Nav({ user, handleLogOut }) {
  let userOptions

  if (user) {
    userOptions = (
      <>
        <Button color="inherit">
          <RouterLink to="/">Home</RouterLink>
        </Button>

        <Button color="inherit">
          <RouterLink to="/lobby">Lobby</RouterLink>
        </Button>

        <Button color="inherit">
          <RouterLink href="/" onClick={handleLogOut}>
            Log Out
          </RouterLink>
        </Button>
      </>
    )
  }

  const publicOptions = (
    <>
      <Button color="inherit">
        <RouterLink to="/">Home</RouterLink>
      </Button>

      <Button color="inherit">
        <RouterLink to="/signin">Login</RouterLink>
      </Button>

      <Button color="inherit">
        <RouterLink to="/register">SignUp</RouterLink>
      </Button>
    </>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chattus Ex Machina
          </Typography>
          {user ? userOptions : publicOptions}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
