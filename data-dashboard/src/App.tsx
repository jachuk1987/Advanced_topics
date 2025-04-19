import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import { ColorModeContextProvider } from './context/ThemeContext';
import theme from './theme';

function App() {
  return (
    <ColorModeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContextProvider>
  );
}

export default App;
