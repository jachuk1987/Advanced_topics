import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface FilterBarProps {
  filter: string;
  setFilter: (val: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => (
  <Box mb={2}>
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="high">High</MenuItem>
        <MenuItem value="low">Low</MenuItem>
      </Select>
    </FormControl>
  </Box>
);
