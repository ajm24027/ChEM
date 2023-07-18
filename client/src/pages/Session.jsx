import { useEffect, useState, useRef } from 'react'
import { SessionRitual } from '../services/SessionServices'
import { ConjureUtterance } from '../services/InteractionServices'
import { SessionUserInput, Feed, GhostProfile } from '../components'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { Grid, Paper, Stack } from '@mui/material'

const Session = (props) => {
  const [ghost, setGhost] = useState([])
  const [interactions, setInteractions] = useState([])
  const [sessionName, setSessionName] = useState([])
  const [dataFetched, setDataFetched] = useState(false)
  const [responseLoad, setResponseLoad] = useState(false)
  const [editSession, setEditSession] = useState(false)

  useEffect(() => {
    const beginSessionRitual = async () => {
      const data = await SessionRitual(props.currentSession)
      setGhost(data.ghost)
      setInteractions(data.interactions)
      setDataFetched(true)
      setSessionName(data.name)
    }
    beginSessionRitual()
  }, [])

  const drawerWidth = 400

  const handleSubmit = async (event) => {
    event.preventDefault()

    const sessionLoc = props.currentSession
    const data = new FormData(event.currentTarget)
    console.log(data)
    setResponseLoad(!responseLoad)
    event.currentTarget.reset()
    const response = await ConjureUtterance(
      { input: data.get('userInput') },
      sessionLoc
    )
    if (response) {
      setInteractions((prevInteractions) => [...prevInteractions, response])
      setResponseLoad(responseLoad)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: 1,
        backgroundColor: '#0A1929'
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid #1c54b2',
            backgroundColor: '#0A1929'
          }
        }}
      >
        <Stack
          direction={'column'}
          sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ p: 2 }}>
            <GhostProfile
              ghost={ghost}
              sessionName={sessionName}
              setSessionName={setSessionName}
              editSession={editSession}
              setEditSession={setEditSession}
              currentSession={props.currentSession}
              setDataFetched={props.setDataFetched}
              dataFetched={props.dataFetched}
            />
          </Box>
          <Paper
            variant="outlined"
            sx={{
              m: 2,
              p: 2,
              backgroundColor: '#0A1929',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6">Need to come back later?</Typography>
            <Typography
              variant="paragraph"
              sx={{ opacity: '0.7', mt: 2, textAlign: 'center' }}
            >
              Feel free to come back anytime. Your sessions are automatically
              saved for you to pick up right where you left off.
            </Typography>
            <Button
              sx={{ width: 100, margin: 2 }}
              variant="outlined"
              color="primary"
            >
              <Link to="/lobby">Lobby</Link>
            </Button>
          </Paper>
        </Stack>
      </Drawer>
      {/* Non-Drawer Box */}
      <Box
        sx={{
          zIndex: '0',
          width: 1
        }}
      >
        {/* chat space */}
        <Grid container rowGap={2}>
          <Grid
            item
            xs={12}
            sx={{
              height: '79vh',
              overflowY: 'none',
              p: 2
            }}
          >
            {interactions.length === 0 ? (
              <Box sx={{ m: 6 }}>
                <Typography variant="h4">
                  Tips for having a great session:
                </Typography>{' '}
                <br /> <br />
                <Typography variant="paragraph" sx={{ opacity: 0.7 }}>
                  - Ghosts may struggle to understand complex context. It's
                  better to ask comprehensive questions in large chunks.
                </Typography>
                <br /> <br />
                <Typography variant="paragraph" sx={{ opacity: 0.7 }}>
                  - Asking about world events after June 2021, may lead to
                  incomplete responses.
                </Typography>
                <br /> <br />
                <Typography variant="paragraph" sx={{ opacity: 0.7 }}>
                  - Ask questions like: "How would you explain React Hooks?",
                  "What is the meaning of life?", or "What kind of gift should I
                  get for a family member's birthday?"
                </Typography>
              </Box>
            ) : (
              <Feed interactions={interactions} ghost={ghost} />
            )}
          </Grid>
          {/* input field */}
          <Grid item xs={12}>
            <SessionUserInput
              responseLoad={responseLoad}
              ghost={ghost}
              handleSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Session
