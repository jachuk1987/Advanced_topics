import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === id));
  const navigate = useNavigate();

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <Card sx={{ margin: "20px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5">{task.title}</Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body2">Due: {task.dueDate}</Typography>
        <Button onClick={() => navigate("/tasks")}>Back</Button>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
