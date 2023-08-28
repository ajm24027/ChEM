import { useState } from 'react'
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

import { Avatar, Container, Grid, Divider, Link } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Image from 'mui-image'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Landing = () => {
  const [ghostAvatars, setGhostAvatars] = useState([
    { name: 'Drake', portrait: Drake },
    { name: 'Elvis', portrait: Elvis },
    { name: 'Fran Drescher', portrait: Fran },
    { name: 'Marie Curie', portrait: MarieCurie },
    { name: 'Tony Soprano', portrait: Tony },
    { name: 'Voldemort', portrait: Voldemort },
    { name: 'Anthony Bourdain', portrait: Bourdain },
    { name: 'The Mad Hatter', portrait: Hatter },
    { name: 'Kobe Bryant', portrait: Kobe },
    { name: 'Winston Churchill', portrait: Winston }
  ])

  const ghostMap = (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ alignSelf: 'center' }}
    >
      {ghostAvatars.map((ghost) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={ghost.name}>
            <Avatar
              variant="square"
              sx={{ width: '100%', height: 300, borderRadius: 4 }}
            >
              <Image src={ghost.portrait} />
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
              gap: 3
            }}
          >
            <Typography variant="h4" sx={{ maxWidth: 700 }}>
              If you could have a chat with any person one, who would it be
            </Typography>
            <Typography variant="paragraph" sx={{ maxWidth: 700 }}>
              ChemChat provides a menagerie of diverse personalities called
              "Ghosts" for you to chat with. Start by signing up or signing in,
              and start a new session right away!
            </Typography>
            <Button color="primary" variant="outlined" sx={{ width: '200px' }}>
              <NavLink to="/register">SignUp</NavLink>
            </Button>
            <Image src={homepageHeader} sx={{ mt: 3, mb: 3 }}></Image>
          </Box>

          <Typography variant="h5">Ghosts</Typography>
          <Typography variant="paragraph">
            Speak to any of your favorite AI personalities and get responses
            inspired by the Ghost's personality.
          </Typography>
          {ghostMap}
          <Divider />
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            Created by Anthony Medina - see more at{' '}
            <a href="https://www.anthonyjmedina.com/">anthonyjmedina.com</a>
          </Typography>
          <Box sx={{ alignSelf: 'center' }}>
            <Link href="https://www.linkedin.com/in/anthonyjmedina/">
              <LinkedInIcon sx={{ ml: 1, mr: 1 }} />
            </Link>
            <Link href="https://github.com/ajm24027">
              <GitHubIcon sx={{ ml: 1, mr: 1 }} />
            </Link>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Landing
