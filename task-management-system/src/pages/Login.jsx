import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/tasks");
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
};

export default Login;