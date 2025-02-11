import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

// ✅ Validation Schema
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signup(data));
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4">Sign Up</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          fullWidth
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          margin="normal"
        />
        <TextField
          label="Email"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>
      <Typography sx={{ mt: 2, textAlign: "center" }}>
        Already have an account? <a href="/login">Login</a>
      </Typography>
    </Container>
  );
};

export default Signup;
