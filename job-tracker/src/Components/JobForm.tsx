import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem
} from '@mui/material';

const JobForm = ({ onAdd }: any) => {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: '',
    date: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    onAdd(form);
    setForm({ company: '', role: '', status: '', date: '', notes: '' });
  };

  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 24 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Add Job Application</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company"
            name="company"
            value={form.company}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Interviewing">Interviewing</MenuItem>
            <MenuItem value="Offered">Offered</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date Applied"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Add Application
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobForm;
