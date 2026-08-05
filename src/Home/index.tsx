import { Box, Toolbar, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
      }}
    >
      <Toolbar />
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
    </Box>
  )
}

export default Home
