import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'

export default function SessionChip(props) {
  let navigate = useNavigate()
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={props.session.name}
        variant="outlined"
        color="secondary"
        onClick={() => navigate('/session')}
        onDelete={() => props.removeSession(props.session._id)}
      />
    </Stack>
  )
}
