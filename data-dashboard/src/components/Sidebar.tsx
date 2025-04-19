import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";

interface SidebarProps {
  onNavigate: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button onClick={() => onNavigate("dashboard")}>Dashboard</ListItem>
        <ListItem button onClick={() => onNavigate("overview")}>Overview</ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
