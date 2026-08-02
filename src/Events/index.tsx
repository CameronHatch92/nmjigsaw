import { Box, Toolbar, Typography } from '@mui/material'

import EventRow from './EventRow'
import events from './events'
import SubmitEvent from './SubmitEvent'

const Events = () => {
  const upcomingEvents = events
    .filter((e) => e.startsAt > new Date())
    .sort((a, b) => +a.startsAt - +b.startsAt)

  return (
    <Box>
      <Toolbar />
      <SubmitEvent />
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        Upcoming Events
      </Typography>
      {upcomingEvents.map((puzzleEvent) => (
        <EventRow puzzleEvent={puzzleEvent} />
      ))}
    </Box>
  )
}

export default Events
