import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'

import Logo from '../Events/Logo'
import { CompletedEvent } from './structs'

interface Props {
  puzzleEvent: CompletedEvent
}

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const

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
        <Grid size={{ xs: 12, sm: 4 }} sx={{ flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 2,
              justifyContent: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Logo logoName={puzzleEvent.logoName} />
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: '1.1rem' }}>
                {puzzleEvent.date.toLocaleDateString(undefined, DATE_OPTIONS)}
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Stack spacing={0.5} sx={{ alignItems: 'flex-start' }}>
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

        <Grid
          size={{ xs: 12, sm: 2 }}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          }}
        >
          <Button
            variant="contained"
            disableElevation
            size="small"
            href={`/#/events/${puzzleEvent.id}`}
            rel="noopener noreferrer"
          >
            See Results
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default EventRow
