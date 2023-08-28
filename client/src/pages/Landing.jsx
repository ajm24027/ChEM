import { NavLink } from 'react-router-dom'
import {
  Drake,
  Elvis,
  Fran,
  MarieCurie,
  Tony,
  Voldemort,
  Bourdain,
  Hatter,
  Kobe,
  Winston,
  homepageHeader
} from '../images'

import { Avatar, Container, Grid } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Image from 'mui-image'

const Landing = ({ ghosts }) => {
  const ghostMap = (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {ghosts.map((ghost) => {
        let portrait
        switch (ghost.name) {
          case 'Drake':
            portrait = Drake
            break
          case 'Elvis':
            portrait = Elvis
            break
          case 'Fran Drescher':
            portrait = Fran
            break
          case 'Marie Curie':
            portrait = MarieCurie
            break
          case 'Tony Soprano':
            portrait = Tony
            break
          case 'Lord Voldemort':
            portrait = Voldemort
            break
          case 'Anthony Bourdain':
            portrait = Bourdain
            break
          case 'Mad Hatter':
            portrait = Hatter
            break
          case 'Kobe Bryant':
            portrait = Kobe
            break
          case 'Winston Churchill':
            portrait = Winston
            break
          default:
            portrait = null
        }
        return (
          <Grid item xs={12} sm={6} md={3} key={ghost.name}>
            <Avatar
              variant="square"
              sx={{ width: 300, height: 300, borderRadius: 4 }}
            >
              <Image src={portrait} />
            </Avatar>
            <Typography variant="h6" sx={{ mt: 1 }}>
              {ghost.name}
            </Typography>
          </Grid>
        )
      })}
    </Grid>
  )

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
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: 1
            }}
          >
            <Typography variant="h4">
              If you could have a chat with any person one, who would it be
            </Typography>
            <Typography variant="paragraph">
              Sign up for sign in and chat like never before with AI
            </Typography>
            <Button color="primary" variant="outlined" sx={{ width: '200px' }}>
              <NavLink to="/register">SignUp</NavLink>
            </Button>
            <Image src={homepageHeader} sx={{ mt: 1, mb: 3 }}></Image>
          </Box>

          <Typography variant="h5">Personalities</Typography>
          <Typography variant="paragraph">
            Speak to any of your favorite personalities and get realistic
            responses
          </Typography>

          {ghostMap}
        </Stack>
      </Container>
    </>
  )
}

export default Landing
