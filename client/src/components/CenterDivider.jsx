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
