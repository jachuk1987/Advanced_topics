import React, { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({ children, onClick, loading }) => {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={onClick} 
      disabled={loading}
      sx={{ minWidth: "120px" }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default CustomButton;
