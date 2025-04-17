import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField, MenuItem } from '@mui/material';

interface FilterBarProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ status, onStatusChange }) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: 16 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          label="Filter by Status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          fullWidth
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interviewing">Interviewing</MenuItem>
          <MenuItem value="Offered">Offered</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
