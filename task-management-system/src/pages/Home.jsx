import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Welcome to Task Management System
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Organize and track your tasks efficiently. Use the navigation to manage your tasks.
      </Typography>
    </Container>
  );
};

export default Home;
