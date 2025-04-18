import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  time: string;
  value: number;
}

const generateMockData = (): DataPoint => {
  const now = new Date();
  return {
    time: now.toLocaleTimeString(),
    value: Math.floor(50 + Math.random() * 50),
  };
};

const Overview: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev, generateMockData()];
        return newData.length > 20 ? newData.slice(newData.length - 20) : newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Live Data Overview</Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default Overview;
