import { useEffect, useState, useRef } from 'react'
import { GhostCardMin } from '../components'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'

const Session = ({ user }) => {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xl" sx={{ marginTop: 8 }}>
        <h1>test</h1>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}></Grid>
      </Container>
    </>
  )
}

export default Session
