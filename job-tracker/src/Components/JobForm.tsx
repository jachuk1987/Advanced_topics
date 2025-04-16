import React from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  MenuItem,
} from '@mui/material';
import type { JobApplication } from '../types/job';

interface Props {
  form: Omit<JobApplication, 'id'>;
  setForm: React.Dispatch<React.SetStateAction<Omit<JobApplication, 'id'>>>;
  handleAddApplication: () => void;
}

const JobForm: React.FC<Props> = ({ form, setForm, handleAddApplication }) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 24 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company"
            fullWidth
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Role"
            fullWidth
            value={form.role}
            onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Status"
            fullWidth
            value={form.status}
            onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as JobApplication['status'] }))}
          >
            {['Applied', 'Interviewing', 'Rejected', 'Offer'].map((status) => (
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
            value={form.date}
            onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            fullWidth
            multiline
            rows={4}
            value={form.notes}
            onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
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
};

export default JobForm;
