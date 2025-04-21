import React from "react";
import Grid from "@mui/material/Grid";
import LineChartComp from "../charts/LineChartComp";
import BarChartComp from "../charts/BarChartComp";
import PieChartComp from "../charts/PieChartComp";
import MapChart from "../charts/MapChart";
import ChartCard from "./ChartCard";

// Dummy chart data (replace with real-time or fetched data)
const lineChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
];

const barChartData = [
  { name: "Q1", value: 600 },
  { name: "Q2", value: 800 },
  { name: "Q3", value: 700 },
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const mapChartData = [
  { region: "USA", value: 1000 },
  { region: "India", value: 800 },
  { region: "Germany", value: 600 },
];

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <ChartCard title="Line Chart">
          <LineChartComp data={lineChartData} />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Bar Chart">
          <BarChartComp data={barChartData} />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Pie Chart">
          <PieChartComp data={pieChartData} />
        </ChartCard>
      </Grid>

      <Grid item xs={12} md={6}>
        <ChartCard title="Map Chart">
          <MapChart data={mapChartData} />
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
