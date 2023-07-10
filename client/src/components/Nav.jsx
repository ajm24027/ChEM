import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

export default function Nav({ user, handleLogOut }) {
  console.log(user)
  let userOptions

  if (user) {
    userOptions = (
      <>
        <Button color="inherit">
          <Link href="/" underline="none">
            Home
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/" underline="none">
            Lobby
          </Link>
        </Button>

        <Button color="inherit">
          <Link href="/" onClick={handleLogOut} underline="none">
            Log Out
          </Link>
        </Button>
      </>
    )
  }

  const publicOptions = (
    <>
      <Button color="inherit">
        <Link href="/" underline="none">
          Home
        </Link>
      </Button>

      <Button color="inherit">
        <Link href="/signin" underline="none">
          Login
        </Link>
      </Button>

      <Button color="inherit">
        <Link href="/register" underline="none">
          SignUp
        </Link>
      </Button>
    </>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user ? userOptions : publicOptions}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
