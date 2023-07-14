import { useEffect, useState, useRef } from 'react'
import { SessionRitual } from '../services/SessionServices'
import { ConjureUtterance } from '../services/InteractionServices'
import { GhostCardMin, SessionUserInput, CenterDivider } from '../components'
import { Link } from 'react-router-dom'

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
    // const testData = { input: data.get('userInput') }
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
          zIndex: '0'
        }}
      >
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
            <Typography sx={{ p: 2 }}>You said:</Typography>
            <Paper variant="outlined" sx={{ borderColor: '#ab47bc' }}>
              <Typography paragraph sx={{ opacity: 0.7, p: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquet pellentesque suscipit.
              </Typography>
            </Paper>
            <Typography sx={{ p: 2 }}>Anthony Bourdain said:</Typography>
            <Paper elevation={1}>
              <Typography paragraph sx={{ opacity: 0.7, p: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                aliquet pellentesque suscipit. Aliquam vulputate massa vitae
                pellentesque vehicula. Donec felis metus, commodo a rutrum id,
                convallis quis ante. Suspendisse maximus neque viverra,
                efficitur ante eget, ullamcorper ex. Sed dictum purus non magna
                volutpat, sit amet rhoncus nisl elementum. Cras eget condimentum
                eros. Sed rhoncus ornare sagittis. Proin in ipsum tempor,
                vehicula nisl fringilla, ullamcorper neque. Fusce sit amet
                mollis ipsum. In hac habitasse platea dictumst.{' '}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <SessionUserInput handleSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Session
