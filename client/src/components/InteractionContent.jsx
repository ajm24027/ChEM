import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function InteractionCard(props) {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">{props.children}</Typography>
      </Stack>
    </div>
  )
}
