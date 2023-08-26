import * as React from 'react'
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
  Winston
} from '../images'
import { RenameSession } from '../services/SessionServices'

import Paper from '@mui/material/Paper'
import Stack from '@mui/system/Stack'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import TextField from '@mui/material/TextField'
import UndoIcon from '@mui/icons-material/Undo'
import SaveIcon from '@mui/icons-material/Save'

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
  }

  const setEdit = () => {
    props.setEditSession(!props.editSession)
  }

  const handleSave = async (event) => {
    event.preventDefault()
    const sessionLoc = props.currentSession
    const data = new FormData(event.currentTarget)
    event.currentTarget.reset()
    const response = await RenameSession(
      { name: data.get('sessionName') },
      sessionLoc
    )
    if (response) {
      props.setSessionName(response.name)
      props.setDataFetched(!props.dataFetched)
      props.setEditSession(!props.editSession)
    }
  }

  const cancelEdit = () => {
    props.setEdit(props.editSession)
  }

  return (
    <Paper elevation={1} sx={{ p: 2, backgroundColor: '#0A1929' }}>
      <Stack flexItem>
        <Card variant="outlined" sx={{ maxWidth: 365, mb: 2 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={portrait}
            title={props.ghost.name}
          />
        </Card>
        <Typography variant="h5">{props.ghost.name}</Typography>
        <Box
          sx={{
            opacity: 0.7,
            mt: 1
          }}
        >
          <Stack
            direction="row"
            spacing={{
              xs: 1,
              sm: 2
            }}
          >
            {!props.editSession ? (
              <>
                <Typography variant="paragraph"></Typography>
                <Typography
                  variant="h5"
                  sx={{ flexGrow: 1, alignSelf: 'center' }}
                >
                  {props.sessionName}
                </Typography>
                <IconButton
                  aria-label="edit"
                  size="large"
                  color="primary"
                  onClick={() => setEdit()}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
              </>
            ) : (
              <>
                <form autoComplete="off" onSubmit={handleSave}>
                  <TextField
                    id="sessionName"
                    name="sessionName"
                    label="Rename your Session"
                    variant="standard"
                    required
                    sx={{ width: 220 }}
                  />
                  <IconButton aria-label="save" size="large" type="submit">
                    <SaveIcon fontSize="inherit" color="success" />
                  </IconButton>
                  <IconButton
                    aria-label="close"
                    size="large"
                    onClick={() => setEdit()}
                  >
                    <UndoIcon fontSize="inherit" color="error" />
                  </IconButton>
                </form>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  )
}
