import React from "react";
import Grid from "@mui/material/Grid";
import LineChartComp from "../charts/LineChartComp";
import BarChartComp from "../charts/BarChartComp";
import PieChartComp from "../charts/PieChartComp";
import MapChart from "../charts/MapChart";
import ChartCard from "./ChartCard";

const lineChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
];

const barChartData = [
  { name: "Product A", value: 240 },
  { name: "Product B", value: 456 },
  { name: "Product C", value: 139 },
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
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
          <MapChart />
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
