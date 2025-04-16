import React from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Paper
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { JobApplication } from '../types/job';

interface JobFormProps {
  form: Omit<JobApplication, 'id'>;
  setForm: React.Dispatch<React.SetStateAction<Omit<JobApplication, 'id'>>>;
  handleAddApplication: () => void;
}

const statusOptions = ['Pending', 'Interview', 'Rejected', 'Accepted'];

const JobForm: React.FC<JobFormProps> = ({ form, setForm, handleAddApplication }) => (
  <Paper elevation={3} style={{ padding: 16, marginBottom: 24 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Company"
          fullWidth
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Role"
          fullWidth
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          label="Status"
          fullWidth
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value as JobApplication['status'] })}
        >
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>{status}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date Applied"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={form.dateApplied}
          onChange={(e) => setForm({ ...form, dateApplied: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Notes"
          fullWidth
          multiline
          rows={2}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddApplication}>
          Add Application
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default JobForm;
