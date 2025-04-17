import React from "react";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

interface JobFormProps {
  form: {
    company: string;
    role: string;
    status: string;
    date: string;
    notes: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      company: string;
      role: string;
      status: string;
      date: string;
      notes: string;
    }>
  >;
  handleAddApplication: () => void;
}

const JobForm: React.FC<JobFormProps> = ({
  form,
  setForm,
  handleAddApplication,
}) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 24 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Add Job Application</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Company"
            value={form.company}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, company: e.target.value }))
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Role"
            value={form.role}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, role: e.target.value }))
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Status"
            value={form.status}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Interview">Interview</MenuItem>
            <MenuItem value="Offer">Offer</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date Applied"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.date}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Notes"
            value={form.notes}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, notes: e.target.value }))
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddApplication}
          >
            Add Application
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobForm;
