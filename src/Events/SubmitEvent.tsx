import { Box, Link, Typography } from '@mui/material'

const SubmitEvent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexAlign: 'flex-start',
      }}
    >
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, textAlign: 'left' }}
      >
        Have an event you'd like us to add to our website?
      </Typography>
      <Typography sx={{ textAlign: 'left' }}>
        We love to host events and let our puzzlers know about events throughout
        the state, whether we're hosting them or not! If you have an event you'd
        like us to list here,{' '}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdtGwwgv_PuK80hbayNcs0ehI4Iw-ZvWlkda-4ah7h0N6I3sA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          submit it to our calendar!
        </Link>
      </Typography>
    </Box>
  )
}

export default SubmitEvent
