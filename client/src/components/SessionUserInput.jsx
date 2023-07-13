import * as React from 'react'
import FullWidthTextField from './FullWidthTextField'

import Paper from '@mui/material/Paper'
import Stack from '@mui/system/Stack'
import SendIcon from '@mui/icons-material/Send'
import { Grid } from '@mui/material'
import { positions } from '@mui/system'
import Button from '@mui/material/Button'

const SessionUserInput = () => {
  return (
    <Paper
      sx={{
        position: 'sticky',
        p: 2
      }}
      elevation={1}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'flex', border: '1px solid red' }}
      >
        <FullWidthTextField />
        <Button
          sx={{ width: 100, margin: 2, display: 'flex' }}
          variant="outlined"
          color="secondary"
        >
          <SendIcon />
        </Button>
      </Stack>
    </Paper>
  )
}
