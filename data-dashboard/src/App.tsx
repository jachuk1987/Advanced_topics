import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ThemeContextProvider from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
