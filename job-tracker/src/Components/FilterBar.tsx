import React from 'react';
import { TextField, MenuItem } from '@mui/material';

type FilterBarProps = {
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
};

const FilterBar: React.FC<FilterBarProps> = ({ filterStatus, setFilterStatus }) => {
  return (
    <TextField
      select
      label="Filter by Status"
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      fullWidth
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Applied">Applied</MenuItem>
      <MenuItem value="Interviewing">Interviewing</MenuItem>
      <MenuItem value="Offered">Offered</MenuItem>
      <MenuItem value="Rejected">Rejected</MenuItem>
    </TextField>
  );
};

export default FilterBar;
