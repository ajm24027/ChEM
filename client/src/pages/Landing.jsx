import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { header } from '../images'

import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const Landing = () => {
  return (
    <>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          marginTop: 8,
          marginBottom: 8
        }}
      >
        <Box
          sx={{ flexGrow: 1, border: '#0288d1 1px solid', borderRadius: '4px' }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 2,
              backgroundColor: '#0A1929',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Stack
              spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h4">Chat Curiously.</Typography>
              <Typography variant="paragraph" gutterBottom>
                Explore incredible conversations like never before with AI.
              </Typography>
              <Button
                color="primary"
                variant="outlined"
                sx={{ width: '200px' }}
              >
                <NavLink to="/register">SignUp</NavLink>
              </Button>
            </Stack>
          </Paper>
        </Box>

        <img src={header} alt="" className="header" />

        <Box
          sx={{ flexGrow: 1, border: '#0288d1 1px solid', borderRadius: '4px' }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 2,
              backgroundColor: '#0A1929',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Stack
              spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h4">
                6 Unique Personalities at your fingertips.
              </Typography>
              <Typography variant="paragraph" gutterBottom>
                Ghosts simulate, captivate, engage. Endless possibilities await
                those curious enough to seek profound discussions.
              </Typography>
            </Stack>
          </Paper>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            border: '#0288d1 1px solid',
            borderRadius: '4px',
            mt: 2
          }}
        >
          <Paper
            elevation={1}
            sx={{
              p: 2,
              backgroundColor: '#0A1929',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <Stack
              spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography variant="h4">Short on time?</Typography>
              <Typography variant="paragraph" gutterBottom>
                All of the ghosts eagerly await your return, ready to resume
                spirited discussions on topics like the Hobbit films or the
                nuances of a post-capitalist society.
              </Typography>
            </Stack>
          </Paper>
        </Box>

        {/* <Grid item id="FeatureSection1" sx={{ width: 1, p: 2 }}>
            <Typography variant="h4" gutterBottom>
              Limitless Conversations.
            </Typography>
            <Typography variant="paragraph" gutterBottom>
              Ghosts are more than just simulations—they're captivating, and
              ready to engage in profound discussions. Have burning questions
              about the mysteries of the universe? Seek advice from a visionary
              recording artist. Crave deep philosophical insights? Engage with a
              renowned physicist. The possibilities are endless, limited only by
              your curiosity.
            </Typography>
          </Grid>
          <Grid item id="FeatureSection2" sx={{ width: 1, p: 2 }}>
            <Typography variant="h4" gutterBottom>
              Short On Time?
            </Typography>
            <Typography variant="paragraph" gutterBottom>
              At ChEM Chat, we value your busy lifestyle and respect your time,
              which is why you have the freedom to engage at your convenience,
              with all your conversations saved for later. All of the ghosts
              eagerly await your return, ready to resume spirited discussions on
              topics like the Hobbit films or the nuances of a post-capitalist
              society.
            </Typography>
          </Grid>
          <Grid
            item
            id="headerSection"
            sx={{
              border: '1px yellow solid',
              p: 2
            }}
          >
            <Typography variant="h4" gutterBottom>
              Step into captivating discourse.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Sign up today and let Chattus Ex Machina unlock the power of AI
              conversations for you. Remember, the answers you seek may be just
              one question away.
            </Typography>
            <Button color="primary" variant="contained">
              <NavLink to="/register">SignUp</NavLink>
            </Button>
          </Grid> */}
      </Container>
    </>
  )
}

export default Landing
