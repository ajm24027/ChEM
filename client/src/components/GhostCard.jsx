import * as React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConjureSession } from '../services/SessionServices'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function GhostCard(props) {
  let navigate = useNavigate()

  const handleNewSession = async () => {
    try {
      const response = await ConjureSession({
        ghost: props.ghost,
        user: props.user
      })
      props.updateUserSession(response)
    } catch (error) {
      throw error
    }
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='"/static/images/cards/contemplative-reptile.jpg"'
        title={props.ghost.name}
      />
      <CardContent>
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
