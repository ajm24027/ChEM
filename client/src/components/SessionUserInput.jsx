import * as React from 'react'

import Paper from '@mui/material/Paper'
import Stack from '@mui/system/Stack'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const SessionUserInput = (props) => {
  const loadMessage = `${props.ghost.name} is responding to your message...`

  return !props.responseLoad ? (
    <Paper
      noValidate
      sx={{
        position: 'sticky',
        p: 2,
        m: 2,
        backgroundColor: '#0A1929'
      }}
      elevation={1}
    >
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <TextField
              fullWidth
              required
              label="Send A Message"
              id="userInput"
              name="userInput"
            />
          </Box>
          <Button
            sx={{ width: 100, margin: 2 }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            <SendIcon />
          </Button>
        </Stack>
      </form>
    </Paper>
  ) : (
    <Paper
      noValidate
      sx={{
        position: 'sticky',
        p: 2,
        m: 2
      }}
      elevation={1}
    >
      <form>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {' '}
            <TextField
              fullWidth
              required
              disabled
              label={loadMessage}
              id="userInput"
            />
          </Box>
          <Button
            sx={{ width: 100, margin: 2 }}
            variant="contained"
            disabled
            disableRipple
          >
            <SendIcon />
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default SessionUserInput
