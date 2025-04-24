import React from "react";
import Grid from "@mui/material/Grid";
import { MenuItem, TextField } from "@mui/material";

interface FilterBarProps {
  filter: string;
  setFilter: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <Grid container spacing={2} mb={2}>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Filter Data"
        select
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="type1">Type 1</MenuItem>
        <MenuItem value="type2">Type 2</MenuItem>
      </TextField>
    </Grid>
  </Grid>
);

export default FilterBar;
