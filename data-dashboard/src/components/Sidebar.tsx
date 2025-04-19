import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
