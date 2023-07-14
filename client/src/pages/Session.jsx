import { useEffect, useState, useRef } from 'react'
import { SessionRitual } from '../services/SessionServices'
import { ConjureUtterance } from '../services/InteractionServices'
import { GhostCardMin, SessionUserInput, CenterDivider } from '../components'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { Grid } from '@mui/material'

const Session = (props) => {
  const [user, setUser] = useState([])
  const [ghost, setGhost] = useState([])
  const [interactions, setInteractions] = useState([])
  const [dataFetched, setDataFetched] = useState(false)

  console.log(interactions)
  const createdAtExample = '2023-07-14T14:42:20.029+00:00'

  useEffect(() => {
    const beginSessionRitual = async () => {
      const data = await SessionRitual(props.currentSession)
      console.log(data)
      setUser(data.owner)
      setGhost(data.ghost)
      setInteractions(data.interactions)
      setDataFetched(true)
    }
    if (props.currentSession !== null && !dataFetched) {
      beginSessionRitual()
    }
  }, [dataFetched])

  const drawerWidth = 400

  const handleSubmit = async (event) => {
    event.preventDefault()
    const sessionLoc = props.currentSession
    const data = new FormData(event.currentTarget)
    event.currentTarget.reset()
    await ConjureUtterance({ input: data.get('userInput') }, sessionLoc)
  }

  return (
    <Box sx={{ display: 'flex', maxWidth: 1 }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <GhostCardMin ghost={ghost} />
        </Box>
        <Button
          sx={{ width: 100, margin: 2 }}
          variant="outlined"
          color="secondary"
        >
          <Link to="/lobby">Lobby</Link>
        </Button>
        <Paper sx={{ p: 2, m: 2 }} elevation={1}>
          <Typography variant="h6">Tips for having a great session:</Typography>
          <Typography paragraph sx={{ p: 2, opacity: 0.7 }}>
            - Avoid mentioning the ghost's name when providing your input.
            <br />
            <br /> - Ghosts may struggle to understand complex context. It's
            better to ask comprehensive questions in large chunks.
            <br />
            <br /> - Asking about world events after June 2021, may lead to
            incomplete responses.
          </Typography>
        </Paper>
      </Drawer>
      {/* Non-Drawer Box */}
      <Box
        sx={{
          zIndex: '0',
          overflow: 'clip'
        }}
      >
        {/* chat space */}
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              height: '80vh',
              overflowY: 'auto',
              p: 2
            }}
          >
            {interactions.map((interaction) => (
              <div key={interaction._id}>
                <Typography sx={{ textAlign: 'right', p: 1.5 }}>
                  {`${user.username},`}
                  <small>
                    {' '}
                    {moment(`${interaction.createdAt}`).calendar()}
                  </small>{' '}
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: '#ab47bc',
                    p: 1.5,
                    width: 'max-content',
                    display: 'flex',
                    alignSelf: 'flex-end'
                  }}
                >
                  <p>{interaction.input}</p>
                </Paper>
                <p>
                  {`${ghost.name},`}{' '}
                  <small>{moment(`${interaction.createdAt}`).calendar()}</small>
                </p>
                <Paper
                  variant="outlined"
                  sx={{ p: 1.5, maxWidth: 'max-content' }}
                >
                  <p>{interaction.response}</p>
                </Paper>
              </div>
            ))}
          </Grid>
          {/* input field */}
          <Grid item xs={12}>
            <SessionUserInput handleSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Session
