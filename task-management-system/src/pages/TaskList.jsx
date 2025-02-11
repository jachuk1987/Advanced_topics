import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import FeedbackSnackbar from "../components/FeedbackSnackbar";
import { Button, List, ListItem, Typography } from "@mui/material";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    setSnackbar({ open: true, message: "Task deleted successfully!", severity: "success" });
  };

  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Typography>{task.title}</Typography>
            <Button onClick={() => handleDelete(task.id)} color="error">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <FeedbackSnackbar 
        open={snackbar.open} 
        message={snackbar.message} 
        severity={snackbar.severity} 
        onClose={() => setSnackbar({ open: false })} 
      />
    </>
  );
};

export default TaskList;
