import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#dc004e', // Secondary color
    },
    PrimaryColor: {
      main: '#7749F8', // Custom primary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Global font family
    h1: {
      fontFamily: 'Georgia, serif', // Specific font for h1
    },
  },
});

export default theme;
