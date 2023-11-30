import { createTheme } from '@mui/material';
import { indigo, deepOrange, blueGrey } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      normal: indigo['A700'],
      dark: indigo[900],
    },
    secondary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[900],
    },
    neutral: {
      extraLight: blueGrey[50],
      light: blueGrey[200],
      normal: blueGrey['A700'],
      main: blueGrey[500],
      dark: blueGrey[900],
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 12,
    link: {
      fontSize: '0.8rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem',
      },
      fontWeight: 500,
      color: theme.palette.primary.normal,
      display: 'block',
      cursor: 'pointer',
    },
    cardTitle: {
      fontSize: '1.2rem',
      display: 'block',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
    },
    h7: {
      fontSize: '0.8rem',
    },
    h8: {
      fontSize: '0.7rem',
    },
  },
});

export default theme;
