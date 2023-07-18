import * as React from 'react'
import moment from 'moment'
import ScrollableFeed from 'react-scrollable-feed'

import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function feed(props) {
  return (
    <ScrollableFeed forceScroll="true">
      {props.interactions.map((interaction) => (
        <div key={interaction._id}>
          <Typography
            sx={{
              textAlign: 'right',
              p: 1.5,
              marginRight: 2
            }}
          >
            {'You said,'}
            <small> {moment(`${interaction.createdAt}`).calendar()}</small>{' '}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#1c54b2',
              marginRight: 2,
              p: 1.5,
              width: 'fit-content',
              float: 'right'
            }}
          >
            <p>{interaction.input}</p>
          </Paper>
          <Typography sx={{ clear: 'both', p: 1.5 }}>
            {`${props.ghost.name} said,`}{' '}
            <small>{moment(`${interaction.createdAt}`).calendar()}</small>
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              p: 1.5,
              maxWidth: 'max-content',
              clear: 'both',
              marginRight: 2,
              border: '#0288d1 1px solid',
              backgroundColor: '#001E3C'
            }}
          >
            <p>{interaction.response}</p>
          </Paper>
        </div>
      ))}
    </ScrollableFeed>
  )
}
