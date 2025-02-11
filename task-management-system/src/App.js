import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import store from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";
import TaskDetails from "./pages/TaskDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/new" element={<TaskForm />} />
            <Route path="/tasks/edit/:id" element={<TaskForm />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
          </Route>

          {/* Default Redirect */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
