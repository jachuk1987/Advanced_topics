import React from "react";
import { Grid } from "@mui/material";
import LineChartComp from "../charts/LineChartComp";
import BarChartComp from "../charts/BarChartComp";
import PieChartComp from "../charts/PieChartComp";
import MapChart from "../charts/MapChart";
import ChartCard from "./ChartCard";

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <ChartCard title="Line Chart">
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
        <ChartCard title="Map Chart">
          <MapChart />
        </ChartCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
