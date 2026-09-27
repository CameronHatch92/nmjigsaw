import { Box, Link } from '@mui/material'
import Typography from '@mui/material/Typography'

import woodenPuzzle from '../../assets/eventImages/woodenPuzzle.jpg'
import Page from '../../common/Page'

const OctWooden2026 = () => {
  const rsvpAddress =
    'mailto:info@nmjigsaw.org?subject=RSVP%20For%20October%20Wooden%20Puzzle%20Contest'
  return (
    <Page>
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        NMJPA Contest Series: Solo Wooden Puzzle Contest
      </Typography>
      <Box
        component="img"
        src={woodenPuzzle}
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
        Our NMJPA Contest Series continues!
        <br />
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>When:</b> Wednesday October 21, 2026 6pm
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Where:</b> Paseo/Jefferson area in Albuquerque
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Cost:</b> $8/person
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Prizes:</b> Puzzle prizes for the top 3 finishers!
        </Typography>
        <Typography sx={{ fontWeight: 600, paddingTop: '1rem' }}>
          Please email <Link href={rsvpAddress}>info@nmjigsaw.org</Link> to
          register and get payment/location information
        </Typography>
      </Typography>
    </Page>
  )
}

export default OctWooden2026
