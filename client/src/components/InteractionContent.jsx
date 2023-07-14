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

{
  /* <Typography sx={{ p: 2 }}>You said:</Typography>
<Paper variant="outlined" sx={{ borderColor: '#ab47bc' }}>
  <Typography paragraph sx={{ opacity: 0.7, p: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    aliquet pellentesque suscipit.
  </Typography>
</Paper>
<Typography sx={{ p: 2 }}>Anthony Bourdain said:</Typography>
<Paper elevation={1}>
  <Typography paragraph sx={{ opacity: 0.7, p: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    aliquet pellentesque suscipit. Aliquam vulputate massa vitae
    pellentesque vehicula. Donec felis metus, commodo a rutrum id,
    convallis quis ante. Suspendisse maximus neque viverra,
    efficitur ante eget, ullamcorper ex. Sed dictum purus non magna
    volutpat, sit amet rhoncus nisl elementum. Cras eget condimentum
    eros. Sed rhoncus ornare sagittis. Proin in ipsum tempor,
    vehicula nisl fringilla, ullamcorper neque. Fusce sit amet
    mollis ipsum. In hac habitasse platea dictumst.{' '}
  </Typography>
</Paper> */
}
