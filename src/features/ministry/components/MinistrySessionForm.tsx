import { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

import { MinistryFormData } from "../types/ministry";

interface MinistrySessionFormProps {
  onSave: (data: MinistryFormData) => void;
}

const today = new Date();

const currentDate = today.toISOString().split("T")[0];
const currentTime = today.toTimeString().slice(0, 5);

export default function MinistrySessionForm({
  onSave,
}: MinistrySessionFormProps) {
  const [form, setForm] = useState<MinistryFormData>({
    date: currentDate,
    startTime: currentTime,
    endTime: currentTime,
    companion: "",
    territory: "",
    returnVisits: 0,
    bibleStudies: 0,
    placements: 0,
    videosShown: 0,
    notes: "",
  });

  const handleChange = (
    field: keyof MinistryFormData,
    value: string | number
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={form.date}
              InputLabelProps={{ shrink: true }}
              onChange={(e) =>
                handleChange("date", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Start Time"
              type="time"
              value={form.startTime}
              InputLabelProps={{ shrink: true }}
              onChange={(e) =>
                handleChange("startTime", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="End Time"
              type="time"
              value={form.endTime}
              InputLabelProps={{ shrink: true }}
              onChange={(e) =>
                handleChange("endTime", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Companion"
              value={form.companion}
              onChange={(e) =>
                handleChange("companion", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Territory"
              value={form.territory}
              onChange={(e) =>
                handleChange("territory", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              fullWidth
              label="Return Visits"
              type="number"
              value={form.returnVisits}
              onChange={(e) =>
                handleChange(
                  "returnVisits",
                  Number(e.target.value)
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              fullWidth
              label="Bible Studies"
              type="number"
              value={form.bibleStudies}
              onChange={(e) =>
                handleChange(
                  "bibleStudies",
                  Number(e.target.value)
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              fullWidth
              label="Placements"
              type="number"
              value={form.placements}
              onChange={(e) =>
                handleChange(
                  "placements",
                  Number(e.target.value)
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              fullWidth
              label="Videos"
              type="number"
              value={form.videosShown}
              onChange={(e) =>
                handleChange(
                  "videosShown",
                  Number(e.target.value)
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Notes"
              value={form.notes}
              onChange={(e) =>
                handleChange("notes", e.target.value)
              }
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
          Save Session
        </Button>
      </Stack>
    </Paper>
  );
}