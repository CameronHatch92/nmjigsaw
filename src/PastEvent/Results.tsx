import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { CompletedEvent } from '../PastEvents/structs'
import timeFormatter from './time-formatter'

interface Props {
  puzzleEvent: CompletedEvent
}

const Results = ({ puzzleEvent }: Props) => {
  const orderedResults = puzzleEvent.results.sort((a, b) => {
    if (a.time.hours == b.time.hours) {
      if (a.time.minutes === b.time.minutes) {
        return a.time.seconds - b.time.seconds
      }
      return a.time.minutes - b.time.minutes
    }
    return a.time.hours - b.time.hours
  })
  return (
    <TableContainer
      sx={{ marginBottom: '0.75rem', width: 'unset', alignSelf: 'center' }}
    >
      <Table
        sx={{
          maxWidth: '100%',
          width: { xs: '400px', sm: '600px' },
          alignSelf: 'center',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: '#0090A1',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              Puzzlers
            </TableCell>
            <TableCell
              align="right"
              sx={{
                backgroundColor: '#0090A1',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedResults.map((result, idx) => (
            <TableRow
              key={result.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${idx + 1}. ${result.name}`}
              </TableCell>
              <TableCell align="right">{timeFormatter(result.time)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Results
