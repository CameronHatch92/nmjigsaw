import { createTheme, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#607299',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E16259',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#2D3748',
      secondary: '#607299',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
}

const theme = createTheme(themeOptions)
export default theme
