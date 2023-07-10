import { useEffect, useState } from 'react'
import { ConjureGhosts } from '../services/GhostSevices'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Lobby = ({ user }) => {
  let navigate = useNavigate()
  const [ghosts, setGhosts] = useState([])

  useEffect(() => {
    const handleGhosts = async () => {
      const data = await ConjureGhosts()
      setGhosts(data)
    }
    handleGhosts()
  }, [])

  return user ? (
    <div></div>
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
        <h3>The Ghosts don't respond to users who don't sign in!</h3>
        <Button
          variant="contained"
          onClick={() => navigate('/signin')}
          centered
        >
          Login
        </Button>
      </Box>
    </>
  )
}

export default Lobby
