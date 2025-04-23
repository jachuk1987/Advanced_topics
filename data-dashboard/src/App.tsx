import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';
import { getTheme } from './theme';

const AppContent: React.FC = () => {
  const { darkMode } = useThemeContext();
  const theme = getTheme(darkMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
