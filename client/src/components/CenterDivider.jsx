import * as React from 'react'
import Divider from '@mui/material/Divider'

export default function CenterDivider(props) {
  return (
    <Divider sx={{ marginTop: 4, marginBottom: 4 }}>{props.children}</Divider>
  )
}
