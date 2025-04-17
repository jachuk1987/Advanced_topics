import React from 'react';
import Grid from "@mui/material/Grid";
import { TextField, MenuItem } from '@mui/material';

interface FilterBarProps {
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ filterStatus, setFilterStatus }) => (
  <Grid container spacing={2} style={{ marginBottom: 16 }}>
    <Grid item xs={12} sm={6}>
      <TextField
        select
        label="Filter by Status"
        fullWidth
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Applied">Applied</MenuItem>
        <MenuItem value="Interview">Interview</MenuItem>
        <MenuItem value="Offer">Offer</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </TextField>
    </Grid>
  </Grid>
);

export default FilterBar;
