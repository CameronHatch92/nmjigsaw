import { Box, Button, Grid, Toolbar, Typography } from '@mui/material'

import ConnectCard from './ConnectCard'

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
        <ConnectCard
          title="Facebook"
          content="Join our community of New Mexico puzzlers!"
          actionItem={
            <Button
              href="https://www.facebook.com/groups/1730853644927452"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
            </Button>
          }
        />
        <ConnectCard
          title="Email"
          content="Have questions or feedback? Send us an email!"
          actionItem={<Button href="mailto:nmjigsaw.org">Email us!</Button>}
        />
      </Grid>
    </Box>
  )
}

export default Connect
