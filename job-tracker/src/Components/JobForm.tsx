import React from 'react';
import Grid from "@mui/material/Grid";
import { TextField, Button, Paper, Typography } from '@mui/material';
import { JobApplication } from '../App';

interface JobFormProps {
  form: Omit<JobApplication, 'id'>;
  setForm: React.Dispatch<React.SetStateAction<Omit<JobApplication, 'id'>>>;
  handleAddApplication: () => void;
}

const JobForm: React.FC<JobFormProps> = ({ form, setForm, handleAddApplication }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 24 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Add Job Application</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Company" name="company" fullWidth value={form.company} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Role" name="role" fullWidth value={form.role} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Status" name="status" fullWidth value={form.status} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Date Applied" type="date" name="date" fullWidth InputLabelProps={{ shrink: true }} value={form.date} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Notes" name="notes" fullWidth multiline rows={4} value={form.notes} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddApplication}>Add Application</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobForm;
