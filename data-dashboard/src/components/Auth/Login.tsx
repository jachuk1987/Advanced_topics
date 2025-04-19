import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { login } from "../../services/authService";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login(username, password);
  };

  return (
    <Box p={3} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default Login;