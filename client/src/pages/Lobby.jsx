import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { GhostCard, SessionChip, CenterDivider } from '../components'

import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack'

const Lobby = (props) => {
  console.log(props)
  let navigate = useNavigate()

  const addToUserSession = (newSession) => {
    props.setUserSessions((prevSessions) => [...prevSessions, newSession])
  }

  // const removeSession = async (deletedSession) => {
  //   await deleteSession(deletedSession)
  //   setUserSessions((prevSessions) =>
  //     prevSessions.filter((userSession) => userSession !== deletedSession)
  //   )
  //   setToggleDelete(!toggleDelete)
  // }

  // useEffect(() => {
  //   const handleGhosts = async () => {
  //     const data = await ConjureGhosts()
  //     setGhosts(data)
  //   }

  //   const handleSessions = async () => {
  //     const data = await RenderSessions(user.id)
  //     setUserSessions(data)
  //   }
  //   handleGhosts()
  //   handleSessions()
  // }, [toggleDelete])

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xl" sx={{ marginTop: 8 }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {props.ghosts.map((ghost) => (
            <Grid item xs={12} sm={6} md={2} key={ghost.name}>
              <GhostCard
                user={props.user}
                ghost={ghost}
                addUserSession={addToUserSession}
              />
            </Grid>
          ))}
        </Grid>
        <CenterDivider>Your Sessions</CenterDivider>
        <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
          {props.sessions.map((session) => (
            <SessionChip
              key={session._id}
              session={session}
              // removeSession={removeSession}
            />
          ))}
        </Stack>
      </Container>
    </>
  )
}

export default Lobby
