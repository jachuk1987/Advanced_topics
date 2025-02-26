import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Appointments />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
