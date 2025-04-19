import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch, Button } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, onLogout }) => {
  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          📊 Real-Time Data Dashboard
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
            inputProps={{ "aria-label": "toggle dark mode" }}
          />
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
