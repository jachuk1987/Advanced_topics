import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import BarChartView from './components/BarChartView';
import PieChartView from './components/PieChartView';
import MapChartView from './components/MapChartView';
import Overview from './components/Overview';
import { ThemeProvider } from '@mui/material/styles';
import useCustomTheme from './theme/useCustomTheme';

const App: React.FC = () => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Header />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/bar" element={<BarChartView />} />
              <Route path="/pie" element={<PieChartView />} />
              <Route path="/map" element={<MapChartView />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
