import * as React from 'react'
import Divider from '@mui/material/Divider'

export default function CenterDivider(props) {
  return (
    <Divider
      sx={{
        marginTop: 4,
        marginBottom: 4,
        opacity: 0.7,
        fontSize: 'subtitle2.fontSize'
      }}
    >
      {props.children}
    </Divider>
  )
}

{
  /* <Grid container spacing={1} direction="row">
<Grid xs={1.5}>
  <Typography paragraph sx={{ marginRight: 2, opacity: 0.7 }}>
    Username said:
  </Typography>
</Grid>
<Grid xs={10.5}>
  <Typography paragraph sx={{ opacity: 0.7 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    aliquet pellentesque suscipit. Aliquam vulputate massa vitae
    pellentesque vehicula. Donec felis metus, commodo a rutrum id,
    convallis quis ante. Suspendisse maximus neque viverra, efficitur
    ante eget, ullamcorper ex. Sed dictum purus non magna volutpat,
    sit amet rhoncus nisl elementum. Cras eget condimentum eros. Sed
    rhoncus ornare sagittis. Proin in ipsum tempor, vehicula nisl
    fringilla, ullamcorper neque. Fusce sit amet mollis ipsum. In hac
    habitasse platea dictumst.{' '}
  </Typography>
</Grid>
</Grid>
<Grid container spacing={1} direction="row">
<Grid xs={1.5}>
  <Typography paragraph sx={{ marginRight: 2 }}>
    Drake says:
  </Typography>
</Grid>
<Grid xs={10.5}>
  <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
    aliquet pellentesque suscipit. Aliquam vulputate massa vitae
    pellentesque vehicula. Donec felis metus, commodo a rutrum id,
    convallis quis ante. Suspendisse maximus neque viverra, efficitur
    ante eget, ullamcorper ex. Sed dictum purus non magna volutpat,
    sit amet rhoncus nisl elementum. Cras eget condimentum eros. Sed
    rhoncus ornare sagittis. Proin in ipsum tempor, vehicula nisl
    fringilla, ullamcorper neque. Fusce sit amet mollis ipsum. In hac
    habitasse platea dictumst.{' '}
  </Typography>
</Grid>
</Grid>
<CenterDivider>{date}</CenterDivider> */
}
