import { Box, Grid, Link, Toolbar, Typography } from '@mui/material'

import ConnectCard from './ConnectCard'

const Connect = () => {
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
      <Typography
        sx={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}
      >
        We want to hear from you!
      </Typography>
      <Grid container columnSpacing={2}>
        <ConnectCard
          title="Facebook"
          content={
            <>
              Want to share your latest thrift store find or brag about finally
              finishing that super hard puzzle? Want to find that final teammate
              to round out your puzzling team?{' '}
              <Link
                href="https://www.facebook.com/groups/1730853644927452"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our facebook group!
              </Link>
            </>
          }
        />
        <ConnectCard
          title="Email"
          content={
            <>
              Have questions or feedback? <br />
              <Link href="mailto:nmjigsaw.org">Send us an email!</Link>
            </>
          }
        />
      </Grid>
    </Box>
  )
}

export default Connect
