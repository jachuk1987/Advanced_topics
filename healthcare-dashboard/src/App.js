import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Appointments from './Pages/Appoinments';
import MedicalHistory from './Pages/MedicalHistory';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
        </Routes>
      </Router>
  );
}

export default App;
