import { createTheme } from '@mui/material/styles';

// Define your custom colors
const colors = {
  black: '#111111',
  gold: '#d0ad50',
  gradientLight: '#e6d3a0',
  gradientDark: '#DBC078',
  white: '#f9f8eb',
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545',
};

// Define themes for light and dark modes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.gold,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.gradientDark,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: 'Mulish, serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.gold,
    },
    background: {
      default: colors.black,
      paper: colors.black,
    },
    text: {
      primary: colors.white,
      secondary: colors.gradientLight,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    error: {
      main: colors.error,
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

export { lightTheme, darkTheme };
