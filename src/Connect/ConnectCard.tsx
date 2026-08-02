import { Grid, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  title: string
  content: string
  actionItem: ReactNode
}

const ConnectCard = ({ title, content, actionItem }: Props) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6 }}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.875', fontWeight: 400 }}>
        {content}
      </Typography>
      {actionItem}
    </Grid>
  )
}

export default ConnectCard
