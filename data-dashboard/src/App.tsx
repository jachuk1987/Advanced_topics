import { useState } from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';
import { Chart } from './components/ChartPanel';
import { FilterBar } from './components/FilterBar';
import { ToggleTheme } from './components/DarkModeToggle';
import { useWebSocket } from './hooks/useWebSocket';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  const [filter, setFilter] = useState('all');
  const rawData = useWebSocket('ws://localhost:4000');
  const filteredData = rawData.filter((d) =>
    filter === 'all' ? true : filter === 'high' ? d.value > 50 : d.value <= 50
  );

  return (
    <ThemeContextProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Data Dashboard</Typography>
          <ToggleTheme />
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 16 }}>
        <FilterBar filter={filter} setFilter={setFilter} />
        <Chart data={filteredData} />
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
