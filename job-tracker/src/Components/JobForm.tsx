import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
  Typography,
} from '@mui/material';
import type { JobApplication } from '../types/job';

interface Props {
  form: Omit<JobApplication, 'id'>;
  setForm: React.Dispatch<React.SetStateAction<Omit<JobApplication, 'id'>>>;
  handleAddApplication: () => void;
}

const JobForm: React.FC<Props> = ({ form, setForm, handleAddApplication }) => {
  const [errors, setErrors] = useState({
    company: false,
    role: false,
    status: false,
    dateApplied: false,
  });

  const validate = () => {
    const newErrors = {
      company: form.company.trim() === '',
      role: form.role.trim() === '',
      status: form.status.trim() === '',
      dateApplied: form.dateApplied.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const onSubmit = () => {
    if (validate()) {
      handleAddApplication();
    }
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
            fullWidth
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            error={errors.company}
            helperText={errors.company ? 'Company is required' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Role"
            fullWidth
            value={form.role}
            onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
            error={errors.role}
            helperText={errors.role ? 'Role is required' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Status"
            fullWidth
            value={form.status}
            onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as JobApplication['status'] }))}
            error={errors.status}
            helperText={errors.status ? 'Status is required' : ''}
          >
            {(['Applied', 'Interviewing', 'Rejected', 'Offer'] as JobApplication['status'][]).map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
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
            onChange={(e) => setForm((prev) => ({ ...prev, dateApplied: e.target.value }))}
            error={errors.dateApplied}
            helperText={errors.dateApplied ? 'Date is required' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            fullWidth
            multiline
            rows={4}
            value={form.notes ?? ''}
            onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
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