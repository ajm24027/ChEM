import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { ConjureSession } from '../services/SessionServices'
import { Drake, Elvis, Fran, MarieCurie, Tony, Voldemort } from '../images'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function GhostCard(props) {
  let navigate = useNavigate()

  let portrait

  switch (props.ghost.name) {
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
    case 'Anthony Bourdain':
      portrait = Tony
      break
    case 'Lord Voldemort':
      portrait = Voldemort
      break
  }

  const handleNewSession = async () => {
    try {
      const response = await ConjureSession({
        ghost: props.ghost,
        user: props.user
      })
      props.addUserSession(response)
      props.setCurrentSession(response._id)
      navigate('/session')
    } catch (error) {
      throw error
    }
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={portrait}
        title={props.ghost.name}
      />
      <CardContent sx={{ height: 70 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.ghost.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${props.ghost.affects[0]}, ${props.ghost.affects[1]}, ${props.ghost.affects[2]}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleNewSession()}>
          New Session
        </Button>
      </CardActions>
    </Card>
  )
}
