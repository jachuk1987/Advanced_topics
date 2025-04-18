import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
