import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJob, removeJob } from '../redux/jobsSlice';

const JobListings = () => {
    const jobs = useSelector((state) => state.jobs);
    const dispatch = useDispatch();
    const [newJob, setNewJob] = useState({ title: '', description: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewJob({ ...newJob, [name]: value });
    };
  
    const handleAddJob = () => {
      if (newJob.title && newJob.description) {
        dispatch(addJob({ id: Date.now(), ...newJob }));
        setNewJob({ title: '', description: '' });
      }
    };
  
    const filteredJobs = jobs.filter((job) => {
      if (filter === 'all') return true;
      return job.title.toLowerCase().includes(filter.toLowerCase());
    }).filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h2>Job Listings</h2>
        <input
          type="text"
          name="title"
          value={newJob.title}
          onChange={handleChange}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="description"
          value={newJob.description}
          onChange={handleChange}
          placeholder="Job Description"
        />
        <button onClick={handleAddJob}>Add Job</button>
  
        <h3>Search and Filter</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Jobs"
        />
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
  
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button onClick={() => dispatch(removeJob(job.id))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default JobListings;