import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;