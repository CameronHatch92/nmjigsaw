import { Box, Toolbar, Typography } from '@mui/material'
import events from './events'
import EventRow from './EventRow'

const Events = () => {
  return (
    <Box>
      <Toolbar />
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        Upcoming Events
      </Typography>
      {events.map((puzzleEvent) => (
        <EventRow puzzleEvent={puzzleEvent} />
      ))}
    </Box>
  )
}

export default Events
