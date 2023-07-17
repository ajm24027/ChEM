import * as React from 'react'
import { Drake, Elvis, Fran, MarieCurie, Tony, Voldemort } from '../images'
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
    case 'Anthony Bourdain':
      portrait = Tony
      break
    case 'Lord Voldemort':
      portrait = Voldemort
      break
  }

  const setEdit = () => {
    props.setEditSession(!props.editSession)
  }

  const handleSave = async (event) => {
    event.preventDefault()
    const sessionLoc = props.currentSession
    const data = new FormData(event.currentTarget)
    // console.log(sessionLoc, data)
    event.currentTarget.reset()
    const response = await RenameSession(
      { name: data.get('sessionName') },
      sessionLoc
    )
    console.log(response)
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
            sx={{
              border: '1px green solid'
            }}
          >
            {!props.editSession ? (
              <>
                <Typography variant="h6">{props.sessionName}</Typography>
                <IconButton
                  aria-label="edit"
                  size="small"
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
                    sx={{ width: 200, border: 'solid 1px yellow' }}
                  />
                  <IconButton
                    aria-label="save"
                    size="small"
                    sx={{ border: '1px solid red' }}
                    type="submit"
                  >
                    <SaveIcon fontSize="inherit" sx={{ width: '40px' }} />
                  </IconButton>
                </form>
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={() => setEdit()}
                >
                  <UndoIcon fontSize="inherit" sx={{ width: '40px' }} />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  )
}
