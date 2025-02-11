import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Import logout action

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle logout functionality
  const handleLogout = () => {
    dispatch(logout()); // Clear user from Redux store
    localStorage.removeItem("user"); // Remove user data from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button color="inherit" component={NavLink} to="/" exact>
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/tasks">
          Tasks
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
