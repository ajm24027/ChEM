import * as React from 'react'
import { useState, useRef } from 'react'

import Paper from '@mui/material/Paper'
import Stack from '@mui/system/Stack'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const SessionUserInput = (props) => {
  const userInputRef = useRef(null)

  return (
    <Paper
      noValidate
      sx={{
        position: 'sticky',
        p: 2
      }}
      elevation={1}
    >
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <Stack direction="row" spacing={2} sx={{ display: 'flex' }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <TextField
              fullWidth
              label="Send A Message"
              id="userInput"
              name="userInput"
              ref={userInputRef}
            />
          </Box>
          <Button
            sx={{ width: 100, margin: 2, display: 'flex' }}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            <SendIcon />
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}

export default SessionUserInput
