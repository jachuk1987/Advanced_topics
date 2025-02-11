import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TaskList from "./pages/TaskList";
import TaskDetails from "./pages/TaskDetails";
import TaskForm from "./pages/TaskForm";
import Header from "./components/Header";
import "./App.css";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={<PrivateRoute element={<TaskList />} />} />
          <Route path="/task/:id" element={<PrivateRoute element={<TaskDetails />} />} />
          <Route path="/task-form/:id?" element={<PrivateRoute element={<TaskForm />} />} />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;