import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import JobListings from './Components/JobListing';
import UserProfile from './Components/UserProfile';
import Notifications from './Components/Notifications';


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
