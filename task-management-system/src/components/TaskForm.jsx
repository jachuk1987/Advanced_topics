import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";

// Validation Schema
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  dueDate: yup.date().required("Due date is required"),
});

const TaskForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 4, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" gutterBottom>
          Create Task
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Title"
            fullWidth
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            type="date"
            fullWidth
            {...register("dueDate")}
            error={!!errors.dueDate}
            helperText={errors.dueDate?.message}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default TaskForm;
