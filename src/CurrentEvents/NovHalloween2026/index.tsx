import { Box, Link } from '@mui/material'
import Typography from '@mui/material/Typography'

import halloweenPuzzles from '../../assets/eventImages/halloweenPuzzles.jpeg'
import Page from '../../common/Page'

const NovHalloween2026 = () => {
  const rsvpAddress =
    'mailto:info@nmjigsaw.org?subject=RSVP%20For%20Halloween%20Event'
  return (
    <Page>
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        Halloween Puzzle Party and Swap!
      </Typography>
      <Box
        component="img"
        src={halloweenPuzzles}
        sx={{
          width: 500,
          height: 282,
          borderRadius: 2,
          objectFit: 'cover',
          flexShrink: 0,
          alignSelf: 'center',
        }}
      />
      <Typography
        sx={{
          fontWeight: 500,
          marginBottom: '0.75rem',
          alignSelf: 'center',
          textAlign: 'left',
        }}
      >
        Don’t put your costume away on Oct. 31st - the treats will continue:
        <br />
        <Typography sx={{ fontWeight: 600, marginLeft: '1rem' }}>
          November 1, 2026 1-4pm
        </Typography>
        <Typography sx={{ fontWeight: 600, marginLeft: '1rem' }}>
          Paseo/Jefferson area in Albuquerque (exact location will be provided
          when you <Link href={rsvpAddress}>RSVP by email</Link>)
        </Typography>
        Bring friends or come solo. No fee, no team required.
        <br />
        Event includes:
        <br />
        <Typography sx={{ marginLeft: '1rem' }}>
          - Round Robin group puzzling on many puzzles (try different images and
          brands!)
          <br />
          - Door Prizes and light snacks
          <br />
          - Best Costume Prizes
          <br /> - (optional) Bring one or many puzzles to swap, and go home
          with your new treats!
        </Typography>
        <Typography sx={{ fontWeight: 600, paddingTop: '1rem' }}>
          Please RSVP by October 28 to{' '}
          <Link href={rsvpAddress}>info@nmjigsaw.org</Link>
        </Typography>
      </Typography>
    </Page>
  )
}

export default NovHalloween2026
