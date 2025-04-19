import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Real-Time Data Dashboard
        </Typography>
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
