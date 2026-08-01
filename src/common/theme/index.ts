import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
   palette: {
        primary: {
            main: '#386b7f'
        },
        secondary: {
            main: '#8b99fd'
        },
        background: {
            default: '#b2b8bf',
            paper: '#94a5a8b7'
        }
    },
    typography: {
        fontFamily: 'Bitter',
        fontSize: 16,
        fontWeightLight: 500,
        fontWeightRegular: 600,
        fontWeightMedium: 700,
        fontWeightBold: 900
    },
};
      
const theme = createTheme(themeOptions);
export default theme;