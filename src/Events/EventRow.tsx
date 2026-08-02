import { Box, Chip, Grid, Paper, Stack, Typography } from '@mui/material'

import ActionItem from './ActionItem'
import Logo from './Logo'
import { EventType, PuzzleEvent } from './structs'

interface Props {
  puzzleEvent: PuzzleEvent
}

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const

const getEventTypeColor = (eventType: EventType) => {
  switch (eventType) {
    case 'speed':
      return 'error'
    case 'swap':
      return 'success'
    case 'casual':
    default:
      return 'info'
  }
}

const getEventTypeName = (eventType: EventType) => {
  switch (eventType) {
    case 'speed':
      return 'Speed Puzzling'
    case 'swap':
      return 'Puzzle Swap'
    case 'casual':
    default:
      return 'Casual Puzzling'
  }
}

const EventRow = ({ puzzleEvent }: Props) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: 4 },
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid size={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Logo logoName={puzzleEvent.logoName} />
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: '1.1rem' }}>
                {puzzleEvent.startsAt.toLocaleDateString(
                  undefined,
                  DATE_OPTIONS
                )}
              </Typography>
              <Chip
                label={getEventTypeName(puzzleEvent.type)}
                color={getEventTypeColor(puzzleEvent.type)}
                variant="outlined"
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Stack>
          </Box>
        </Grid>

        <Grid
          size={6}
          sx={{ justifyContent: 'center'}}
        >
          <Stack spacing={0.5} sx={{alignItems: 'flex-start'}}>
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
              {puzzleEvent.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'text.secondary',
              }}
            >
              <Typography variant="body2">{puzzleEvent.city}</Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid size={2}>
          <ActionItem puzzleEvent={puzzleEvent} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default EventRow
