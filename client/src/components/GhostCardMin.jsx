import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function GhostCardMin(props) {
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
      </CardContent>
    </Card>
  )
}
