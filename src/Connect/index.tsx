import { Box, Button, Grid, Toolbar, Typography } from '@mui/material'

const Connect = () => {
  return (
    <Box>
      <Toolbar />
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        We want to hear from you!
      </Typography>
      <Grid container>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            Facebook
          </Typography>
          <Typography sx={{ fontSize: '0.875', fontWeight: 400 }}>
            Join our community of New Mexico puzzlers!
          </Typography>
          <Button
            href="https://www.facebook.com/groups/1730853644927452"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect
          </Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}
          >
            Email
          </Typography>
          <Typography sx={{ fontSize: '0.875', fontWeight: 400 }}>
            Have questions or feedback? Send us an email!
          </Typography>
          <Button href="mailto:nmjigsaw.org">Email us!</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Connect
