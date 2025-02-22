import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';

const JobList = () => {
  const { jobs, searchQuery } = useSelector((state) => state.jobSearch);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobItem key={job.id} job={job} />)
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;
