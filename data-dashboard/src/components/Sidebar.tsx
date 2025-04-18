import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import MapIcon from '@mui/icons-material/Map';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const theme = useTheme();

  const navItems = [
    { text: 'Overview', icon: <DashboardIcon />, path: '/' },
    { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar' },
    { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    { text: 'Map Chart', icon: <MapIcon />, path: '/map' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: theme.palette.text.primary,
              '&.active': {
                backgroundColor: theme.palette.action.selected,
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
