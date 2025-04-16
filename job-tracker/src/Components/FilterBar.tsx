import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

interface FilterBarProps {
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
}

const statusOptions = ['All', 'Applied', 'Interviewing', 'Rejected', 'Offer'];

const FilterBar: React.FC<FilterBarProps> = ({ filterStatus, setFilterStatus }) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: 16 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          select
          label="Filter by Status"
          fullWidth
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>{status}</MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
