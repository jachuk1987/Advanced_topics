import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-lg">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
    </div>
  );
};

export default JobItem;
