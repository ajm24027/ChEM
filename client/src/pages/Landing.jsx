import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'

const Landing = () => {
  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ marginTop: 8, marginBottom: 8 }}
      >
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            border: '1px solid red'
          }}
        >
          <Grid
            item
            id="headerSection"
            sx={{
              border: '1px yellow solid',
              p: 2
            }}
          >
            <Typography variant="h4" gutterBottom>
              Chat Curiously.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Meet your heroes in this AI powered Chat Experiment.
            </Typography>
            <Button color="primary" variant="contained">
              <NavLink to="/register">SignUp</NavLink>
            </Button>
          </Grid>
          <Grid item id="FeatureSection1" sx={{ width: 1, p: 2 }}>
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
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Landing
