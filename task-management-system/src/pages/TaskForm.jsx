import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../redux/reducers/taskReducer";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const TaskForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingTask = useSelector((state) => state.tasks.tasks.find(task => task.id === id)) || {};

  const [title, setTitle] = useState(existingTask.title || "");
  const [description, setDescription] = useState(existingTask.description || "");
  const [dueDate, setDueDate] = useState(existingTask.dueDate || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTask({ id, title, description, dueDate }));
    } else {
      dispatch(addTask({ title, description, dueDate }));
    }
    navigate("/tasks");
  };

  return (
    <Container>
      <h2>{id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required margin="normal" />
        <TextField fullWidth label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required margin="normal" />
        <TextField fullWidth label="Due Date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required margin="normal" InputLabelProps={{ shrink: true }} />
        <Button type="submit" variant="contained" color="primary">{id ? "Update" : "Add"} Task</Button>
      </form>
    </Container>
  );
};

export default TaskForm;