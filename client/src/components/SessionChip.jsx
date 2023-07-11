import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function SessionChip(props) {
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  // const handleDelete = async (deletedSession) => {
  //   props.removeSession(deletedSession)
  //   await deleteSession(deletedSession)
  // }

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={props.session.name}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
        onDelete={() => props.removeSession(props.session._id)}
      />
    </Stack>
  )
}
