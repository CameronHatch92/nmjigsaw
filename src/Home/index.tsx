import { Typography } from '@mui/material'

import Page from '../common/Page'

const Home = () => {
  return (
    <Page>
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
        New Mexico Jigsaw Puzzle Association
      </Typography>
      <Typography sx={{ textAlign: 'left' }}>
        We're a group of New Mexico puzzlers who are passionate about growing
        the puzzle community in the 505. We want to connect fellow disectologies
        throughout the state by hosting puzzling opportunities, building an
        online community, and curating a list of puzzle events throughout the
        state.
      </Typography>
    </Page>
  )
}

export default Home
