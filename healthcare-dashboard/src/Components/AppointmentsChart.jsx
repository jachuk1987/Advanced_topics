import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";

const AppointmentsChart = () => {
  const appointments = useSelector((state) => state.appointments);

  // Aggregate data by date
  const data = appointments.reduce((acc, appt) => {
    const date = appt.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  // Convert to array format for Recharts
  const chartData = Object.keys(data).map((date) => ({
    date,
    count: data[date],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AppointmentsChart;
