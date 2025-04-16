import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import JobForm from './Components/JobForm';
import JobList from './Components/JobList';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar';
import type { JobApplication } from './types/job';

type FormJobApplication = Omit<JobApplication, 'id'> & { notes?: string };

const App: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [form, setForm] = useState<FormJobApplication>({
    company: '',
    role: '',
    status: 'Applied',
    dateApplied: '',
    notes: '',
  });

  useEffect(() => {
    const stored = localStorage.getItem('jobApplications');
    if (stored) {
      setApplications(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(applications));
  }, [applications]);

  const handleAddApplication = () => {
    const newApp: JobApplication = { id: uuidv4(), ...form };
    setApplications([...applications, newApp]);
    setForm({ company: '', role: '', status: 'Applied', dateApplied: '', notes: '' });
  };

  const handleDelete = (id: string) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Job Tracker</Typography>

      <JobForm form={form} setForm={setForm} handleAddApplication={handleAddApplication} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <JobList applications={filteredApplications} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
