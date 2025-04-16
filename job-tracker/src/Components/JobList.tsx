import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { JobApplication } from '../types/job';

interface JobListProps {
  applications: JobApplication[];
  handleDelete: (id: string) => void;
}

const JobList: React.FC<JobListProps> = ({ applications, handleDelete }) => {
  return (
    <List>
      {applications.map((app) => (
        <React.Fragment key={app.id}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(app.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${app.company} - ${app.role}`}
              secondary={`${app.status} | Applied on: ${app.dateApplied}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default JobList;
