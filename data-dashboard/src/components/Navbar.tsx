import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: 2 }}>
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