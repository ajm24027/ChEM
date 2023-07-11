import { useEffect, useState, useRef } from 'react'
import { ConjureGhosts } from '../services/GhostSevices'
import { RenderSessions, deleteSession } from '../services/SessionServices'
import { useNavigate } from 'react-router-dom'
import { GhostCard, SessionChip, CenterDivider } from '../components'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack'

const Lobby = ({ user }) => {
  let navigate = useNavigate()

  const [ghosts, setGhosts] = useState([])
  const [userSessions, setUserSessions] = useState([])
  const [toggleDelete, setToggleDelete] = useState(false)

  const addToUserSession = (newSession) => {
    setUserSessions((prevSessions) => [...prevSessions, newSession])
  }

  const removeSession = async (deletedSession) => {
    await deleteSession(deletedSession)
    setUserSessions((prevSessions) =>
      prevSessions.filter((userSession) => userSession !== deletedSession)
    )
    setToggleDelete(!toggleDelete)
  }

  useEffect(() => {
    const handleGhosts = async () => {
      const data = await ConjureGhosts()
      setGhosts(data)
    }

    const handleSessions = async () => {
      const data = await RenderSessions(user.id)
      setUserSessions(data)
    }
    handleGhosts()
    handleSessions()
  }, [toggleDelete])

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
            <Grid item xs={12} sm={6} md={2} key={ghost.name}>
              <GhostCard
                user={user}
                ghost={ghost}
                addUserSession={addToUserSession}
              />
            </Grid>
          ))}
        </Grid>
        <CenterDivider>Your Sessions</CenterDivider>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {userSessions.map((session) => (
            <SessionChip
              key={session._id}
              session={session}
              removeSession={removeSession}
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
