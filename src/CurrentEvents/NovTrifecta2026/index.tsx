import { Box, Link } from '@mui/material'
import Typography from '@mui/material/Typography'

import nmJpaDetailed from '../../assets/nmJpaDetailed.jpg'
import Page from '../../common/Page'

const NovTrifecta2026 = () => {
  const rsvpAddress =
    'mailto:info@nmjigsaw.org?subject=RSVP%20For%20November%20Trifecta%20Puzzle%20Contest'
  return (
    <Page>
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        NMJPA Contest Series: Trifecta
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
          <b>What:</b> The Trifecta! Puzzlers will compete in randomly chosen
          teams of 3. One person will complete a 100 piece puzzle while the
          other two complete a 200 piece puzzle together. When both puzzles are
          complete, all three will work on a 300 piece puzzle. The first team to
          finish all three puzzles wins!{' '}
          <b>You do not need a team. All skill levels are welcome!</b>
          <br />
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>When:</b> Friday November 20, 6pm
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Where:</b> North Domingo Baca Multigenerational Center, Classroom 1{' '}
          <b>(New location!)</b>
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>Cost:</b> $15/person
        </Typography>
        <Typography sx={{ fontWeight: 500, marginLeft: '1rem' }}>
          <b>RSVP:</b> Please <Link href={rsvpAddress}>register</Link> by
          November 13th so we can order the right amount of puzzles!
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

export default NovTrifecta2026
