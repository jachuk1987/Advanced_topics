import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks.find(task => task.id === id));
  const navigate = useNavigate();

  if (!task) return <Typography variant="h6">Task not found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="body2">Due Date: {task.dueDate}</Typography>
      <Button variant="contained" onClick={() => navigate("/tasks")}>Back to Tasks</Button>
    </Container>
  );
};

export default TaskDetails;