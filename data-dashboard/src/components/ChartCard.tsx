import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
  title: string;
  data: { time: string; value: number }[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => (
  <Card style={{ marginBottom: 24 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ChartCard;
