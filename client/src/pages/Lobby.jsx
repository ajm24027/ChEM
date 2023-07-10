import { useEffect, useState } from 'react'
import { ConjureGhosts } from '../services/GhostSevices'
import { RenderSessions } from '../services/SessionServices'
import { useNavigate } from 'react-router-dom'
import { GhostCard } from '../components'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { Container } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const Lobby = ({ user }) => {
  let navigate = useNavigate()

  const [ghosts, setGhosts] = useState([])
  const [userSessions, setUserSessions] = useState([])

  const updateUserSession = (newSession) => {
    setUserSessions([...userSessions], newSession)
  }

  useEffect(() => {
    const handleGhosts = async () => {
      const data = await ConjureGhosts()
      setGhosts(data)
    }
    const handleSessions = async () => {
      const data = await RenderSessions(user.id)
      console.log(data)
      setUserSessions(data)
    }
    handleGhosts()
    handleSessions()
  }, [userSessions.id])

  return user ? (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xl" sx={{ marginTop: 8 }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {ghosts.map((ghost) => (
            <Grid item xs={2} sm={4} md={4} key={ghost.name}>
              <GhostCard
                user={user}
                ghost={ghost}
                updateUserSession={updateUserSession}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginTop: 4, marginBottom: 4 }}>Your Sessions</Divider>
        <Stack direction="row" spacing={2}>
          {userSessions.map((session) => (
            <Chip
              avatar={<Avatar>M</Avatar>}
              label={session.name}
              variant="outlined"
              color="secondary"
              key={session.name}
            />
          ))}
        </Stack>
      </Container>
    </>
  ) : (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h3>The Ghosts don't speak with unauthenticated users!</h3>
        <Button variant="contained" onClick={() => navigate('/signin')}>
          Login
        </Button>
      </Box>
    </>
  )
}

export default Lobby
