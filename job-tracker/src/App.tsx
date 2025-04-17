import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import JobForm from './Components/JobForm';
import SearchBar from './Components/SearchBar';
import FilterBar from './Components/FilterBar';
import JobList from './Components/JobList';

export interface JobApplication {
  id: number;
  company: string;
  role: string;
  status: string;
  date: string;
  notes: string;
}

const App: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [form, setForm] = useState<Omit<JobApplication, 'id'>>({
    company: '',
    role: '',
    status: '',
    date: '',
    notes: '',
  });

  const handleAddApplication = () => {
    const newApp: JobApplication = {
      id: Date.now(),
      ...form,
    };
    setApplications([newApp, ...applications]);
    setForm({ company: '', role: '', status: '', date: '', notes: '' });
  };

  const handleDelete = (id: number) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? app.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Job Tracker</Typography>
      <JobForm form={form} setForm={setForm} handleAddApplication={handleAddApplication} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <JobList applications={filteredApplications} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
