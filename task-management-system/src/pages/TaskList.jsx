import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/reducers/taskReducer";
import { Container, List, ListItem, ListItemText, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Task List</h2>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} divider>
            <ListItemText primary={task.title} secondary={`Due: ${task.dueDate}`} />
            <Button onClick={() => navigate(`/task/${task.id}`)}>View</Button>
            <Button onClick={() => navigate(`/task-form/${task.id}`)}>Edit</Button>
            <Button color="error" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => navigate("/task-form")}>Add Task</Button>
    </Container>
  );
};

export default TaskList;