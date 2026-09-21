import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'

import Page from '../common/Page'
import events from '../PastEvents/events'
import PuzzleImage from './PuzzleImage'
import Results from './Results'

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const

const PastEvent = () => {
  const { id } = useParams()
  const puzzleEvent = events.find((e) => e.id === +(id || 0))

  if (!puzzleEvent) {
    return <Page />
  }

  return (
    <Page>
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        {puzzleEvent.title}
      </Typography>
      <Typography
        sx={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.75rem' }}
      >
        {puzzleEvent.date.toLocaleDateString(undefined, DATE_OPTIONS)}
      </Typography>
      <PuzzleImage puzzleName={puzzleEvent.puzzleName} />
      <Typography
        sx={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.75rem' }}
      >
        {`${puzzleEvent.puzzleName} by ${puzzleEvent.puzzleBrand} (${puzzleEvent.pieceCount} pieces)`}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.75rem',
          alignSelf: 'center',
          textAlign: 'left',
        }}
      >
        {puzzleEvent.description}
      </Typography>
      <Results puzzleEvent={puzzleEvent} />
    </Page>
  )
}

export default PastEvent
