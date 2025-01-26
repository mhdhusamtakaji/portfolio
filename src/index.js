import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
import { lightTheme, darkTheme } from './theme/theme';

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
