import * as React from 'react'
import { Drake, Elvis, Fran, MarieCurie, Tony, Voldemort } from '../images'

import Paper from '@mui/material/Paper'
import Stack from '@mui/system/Stack'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

export default function GhostProfile(props) {
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
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack>
        <Card variant="outlined" sx={{ maxWidth: 365, mb: 2 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={portrait}
            title={props.ghost.name}
          />
        </Card>
        <Typography variant="h5">{props.ghost.name}</Typography>
        <Box sx={{ opacity: 0.7, mt: 1 }}>
          <Typography variant="paragraph">Current Session:</Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            useFlexGap
            flexWrap="wrap"
          >
            <Typography variant="h6">{props.sessionName}</Typography>
            <IconButton aria-label="delete" size="small">
              <EditIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  )
}
