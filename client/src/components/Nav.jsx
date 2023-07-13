import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

export default function Nav({ user, handleLogOut }) {
  let userOptions

  if (user) {
    userOptions = (
      <>
        <Button color="inherit">
          <NavLink to="/">Home</NavLink>
        </Button>

        <Button color="inherit">
          <NavLink to="/lobby">Lobby</NavLink>
        </Button>

        <Button color="inherit">
          <NavLink href="/" onClick={handleLogOut}>
            Log Out
          </NavLink>
        </Button>
      </>
    )
  }

  const publicOptions = (
    <>
      <Button color="inherit">
        <NavLink to="/">Home</NavLink>
      </Button>

      <Button color="inherit">
        <NavLink to="/signin">Login</NavLink>
      </Button>

      <Button color="inherit">
        <NavLink to="/register">SignUp</NavLink>
      </Button>
    </>
  )

  return (
    <Box sx={{ flexGrow: 1, position: 'relative', zIndex: '1000' }}>
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
