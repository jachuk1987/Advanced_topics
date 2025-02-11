import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/taskSlice";
import { useNavigate, useLocation } from "react-router-dom";

// Validation Schema
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  dueDate: yup.date().required("Due date is required").typeError("Invalid date format"),
});

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task || {};

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: task,
  });

  const onSubmit = (data) => {
    if (task.id) {
      dispatch(updateTask({ ...task, ...data }));
    } else {
      dispatch(addTask({ id: Date.now(), ...data }));
    }
    navigate("/tasks");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5">{task.id ? "Edit Task" : "Create Task"}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth label="Title" {...register("title")} error={!!errors.title} helperText={errors.title?.message} margin="normal" />
        <TextField fullWidth label="Description" multiline rows={3} {...register("description")} error={!!errors.description} helperText={errors.description?.message} margin="normal" />
        <TextField fullWidth type="date" {...register("dueDate")} error={!!errors.dueDate} helperText={errors.dueDate?.message} margin="normal" InputLabelProps={{ shrink: true }} />
        <Button type="submit" variant="contained" color="primary" fullWidth>{task.id ? "Update Task" : "Create Task"}</Button>
      </form>
    </Container>
  );
};

export default TaskForm;
