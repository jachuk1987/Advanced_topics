import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/auth";
import TaskList from "./pages/TaskList"; 
import TaskForm from "./components/TaskForm"; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskForm />} />
      </Routes>
    </>
  );
}

export default App;
