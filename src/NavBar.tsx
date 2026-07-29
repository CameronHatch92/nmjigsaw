import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const navBarItems = ['About', 'Events', 'Connect']

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'left',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          New Mexico Jigsaw Puzzle Association
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navBarItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
