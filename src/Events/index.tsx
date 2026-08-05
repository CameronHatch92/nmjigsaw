import { Typography } from '@mui/material'

import Page from '../common/Page'
import EventRow from './EventRow'
import events from './events'
import SubmitEvent from './SubmitEvent'

const Events = () => {
  const upcomingEvents = events
    .filter((e) => e.startsAt > new Date())
    .sort((a, b) => +a.startsAt - +b.startsAt)

  return (
    <Page>
      <SubmitEvent />
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        Upcoming Events
      </Typography>
      {upcomingEvents.map((puzzleEvent) => (
        <EventRow puzzleEvent={puzzleEvent} />
      ))}
    </Page>
  )
}

export default Events
