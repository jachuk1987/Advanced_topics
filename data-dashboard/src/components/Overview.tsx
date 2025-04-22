import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

const Overview: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {/* Summary Cards */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">1,024</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Active Sessions</Typography>
          <Typography variant="h4">256</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$12,540</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Overview;
