import React from 'react';
import { JobApplication } from '../App';
import { Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface JobListProps {
  applications: JobApplication[];
  handleDelete: (id: number) => void;
}

const JobList: React.FC<JobListProps> = ({ applications, handleDelete }) => (
  <Paper style={{ padding: 16 }}>
    <Typography variant="h6">Job Applications</Typography>
    <List>
      {applications.map((app) => (
        <ListItem key={app.id} divider secondaryAction={
          <IconButton edge="end" onClick={() => handleDelete(app.id)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText
            primary={`${app.company} - ${app.role}`}
            secondary={`Status: ${app.status}, Applied on: ${app.date}`}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default JobList;
