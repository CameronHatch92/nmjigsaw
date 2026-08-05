import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const navBarItems = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Events',
    route: '/events',
  },
  {
    name: 'Connect',
    route: '/connect',
  },
]

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'left',
          }}
        >
          NMJPA
        </Typography>
        <Box>
          {navBarItems.map((item) => (
            <Button key={item.name} onClick={() => navigate(item.route)}>
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
