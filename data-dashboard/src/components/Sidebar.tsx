import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText, ListItemButton, Drawer } from "@mui/material";

interface SidebarProps {
  onNavigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItemButton onClick={() => onNavigate("dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        
        <ListItemButton onClick={() => onNavigate("overview")}>
          <ListItemText primary="Overview" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
