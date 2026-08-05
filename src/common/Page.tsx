import { Box, Toolbar } from '@mui/material'
import { PropsWithChildren } from 'react'

const Page = ({ children }: PropsWithChildren) => {
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
      {children}
    </Box>
  )
}

export default Page
