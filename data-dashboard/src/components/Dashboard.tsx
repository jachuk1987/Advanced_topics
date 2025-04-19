import React from "react";
import { Grid } from "@mui/material";
import ChartCard from "./ChartCard";
import LineChartComp from "../charts/LineChartComp";
import BarChartComp from "../charts/BarChartComp";
import PieChartComp from "../charts/PieChartComp";
import MapChart from "../charts/MapChart";

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ChartCard title="Real-Time Line Chart">
          <LineChartComp />
        </ChartCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartCard title="Bar Chart">
          <BarChartComp />
        </ChartCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartCard title="Pie Chart">
          <PieChartComp />
        </ChartCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <ChartCard title="Map Visualization">
          <MapChart />
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
