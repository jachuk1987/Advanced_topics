import React from "react";
import { Paper, Typography, Box } from "@mui/material";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};

export default ChartCard;
