import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob } from '../features/jobsSlice';

const JobListings = () => {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
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