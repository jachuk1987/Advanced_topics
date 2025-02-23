import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import JobListings from './components/JobListings';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Jobs</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/notifications">Notifications</Link>
      </nav>
      <Routes>
        <Route path="/" element={<JobListings />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
};

export default App;