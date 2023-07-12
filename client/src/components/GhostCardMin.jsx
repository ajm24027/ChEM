import * as React from 'react'
import { Drake, Elvis, Fran, MarieCurie, Tony, Voldemort } from '../images'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function GhostCardMin(props) {
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

  return (
    <Card variant="outlined" sx={{ maxWidth: 365 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={portrait}
        title={props.ghost.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.ghost.name}
        </Typography>
      </CardContent>
    </Card>
  )
}
