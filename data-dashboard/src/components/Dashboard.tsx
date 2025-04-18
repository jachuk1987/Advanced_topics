import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import socket from '../services/socket';
import LineChartComp from '../charts/LineChartComp';
import BarChartComp from '../charts/BarChartComp';
import PieChartComp from '../charts/PieChartComp';
import MapChart from '../charts/MapChart';
import FilterBar from './FilterBar';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const [data, setData] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    socket.on('data-update', (newData) => {
      setData(newData);
    });
    return () => {
      socket.off('data-update');
    };
  }, []);

  const filteredData = statusFilter ? data.filter((d: any) => d.status === statusFilter) : data;

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <FilterBar statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <LineChartComp data={filteredData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarChartComp data={filteredData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieChartComp data={filteredData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MapChart data={filteredData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
