import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Complete Redux Setup",
      description: "Set up Redux store and slices for state management.",
      status: "In Progress",
      priority: "High",
      dueDate: "2025-02-15",
    },
    {
      id: 2,
      title: "Design UI for Task Management",
      description: "Create a responsive UI using Material UI.",
      status: "Pending",
      priority: "Medium",
      dueDate: "2025-02-18",
    },
    {
      id: 3,
      title: "Implement Task CRUD Operations",
      description: "Add functionality to create, update, and delete tasks.",
      status: "Completed",
      priority: "High",
      dueDate: "2025-02-10",
    },
    {
      id: 4,
      title: "Integrate Local Storage",
      description: "Ensure tasks persist in local storage.",
      status: "In Progress",
      priority: "Low",
      dueDate: "2025-02-12",
    },
    {
      id: 5,
      title: "Implement Authentication",
      description: "Secure the Task Management System with authentication.",
      status: "Pending",
      priority: "High",
      dueDate: "2025-02-20",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    getTasks: (state, action) => {
      state.tasks = action.payload; // This will replace the current state with new tasks
    },
  },
});

export const { addTask, updateTask, deleteTask, getTasks } = taskSlice.actions;
export default taskSlice.reducer;
