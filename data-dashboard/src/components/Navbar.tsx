import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">📊 Real-Time Data Dashboard</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
