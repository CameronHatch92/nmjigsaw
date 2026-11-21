import { Box, Link } from '@mui/material'
import Typography from '@mui/material/Typography'

import nmJpaDetailed from '../../assets/nmJpaDetailed.jpg'
import Page from '../../common/Page'

const DecPairs2026 = () => {
  const rsvpAddress =
    'mailto:info@nmjigsaw.org?subject=RSVP%20For%20December%20Pairs%20Relay%20Puzzle%20Contest'
  return (
    <Page>
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        NMJPA Contest Series: A Pair of Pairs Relays
      </Typography>
      <Box
        component="img"
        src={nmJpaDetailed}
        sx={{
          width: 550,
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
          <b>What:</b> A pair of pairs relays! Puzzlers will be paired up into
          random pairs. Each pair will work on two 200-piece puzzles, one on
          each. Every five minutes, you'll switch to the other puzzle and your
          partner will come to yours. After all pairs are finished, you'll be
          paired up randomly again to run the relay on two new 200-piece
          puzzles.
          <br />
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>When:</b> Wednesday, December 16 6pm
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Where:</b> TBD
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Cost:</b> $15/person
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>RSVP:</b> Please <Link href={rsvpAddress}>register</Link> by
          December 10th so we can order the right amount of puzzles!
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Prizes:</b> Puzzle prizes for the top finishers!
        </Typography>
        <Typography sx={{ fontWeight: 600, paddingTop: '1rem' }}>
          Please email <Link href={rsvpAddress}>info@nmjigsaw.org</Link> to
          register and get payment information
        </Typography>
      </Typography>
    </Page>
  )
}

export default DecPairs2026
