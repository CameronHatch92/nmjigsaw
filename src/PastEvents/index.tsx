import { Typography } from '@mui/material'

import Page from '../common/Page'
import EventRow from './EventRow'
import events from './events'

const PastEvents = () => {
  const completedEvents = events.sort((a, b) => +a.date - +b.date)
  return (
    <Page>
      {' '}
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        Past Event Results
      </Typography>
      {completedEvents.map((e) => (
        <EventRow puzzleEvent={e} />
      ))}
    </Page>
  )
}

export default PastEvents
