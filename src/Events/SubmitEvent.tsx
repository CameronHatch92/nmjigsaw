import { Button, Paper, Typography } from '@mui/material'

const SubmitEvent = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        transition: 'box-shadow 0.2s',
        '&:hover': { boxShadow: 4 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
        Have an event you'd like us to add to our website?
      </Typography>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSdtGwwgv_PuK80hbayNcs0ehI4Iw-ZvWlkda-4ah7h0N6I3sA/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit to our Calendar
      </Button>
    </Paper>
  )
}

export default SubmitEvent
