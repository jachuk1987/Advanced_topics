import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signup } from "../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));
    navigate("/tasks");
  };

  return (
    <Container>
      <Typography variant="h4">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" required />
        <Button type="submit" variant="contained" color="primary">Sign Up</Button>
      </form>
    </Container>
  );
};

export default Signup;