import { useState } from "react";

import {
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  FieldServiceEntry,
  FieldServiceSchedule,
} from "./models/FieldServiceSchedule";

import { createEmptyFieldServiceSchedule } from "./services/createEmptyFieldServiceSchedule";

import FieldServiceTable from "./FieldServiceTable";

export default function FieldServiceEditor() {
  const [schedule, setSchedule] =
    useState<FieldServiceSchedule>(() =>
      createEmptyFieldServiceSchedule(
        "September 2026"
      )
    );

  function updateEntry(
    updatedEntry: FieldServiceEntry
  ) {
    setSchedule((current) => ({
      ...current,

      updatedAt: Date.now(),

      entries: current.entries.map((entry) =>
        entry.id === updatedEntry.id
          ? updatedEntry
          : entry
      ),
    }));
  }

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="success.main"
        >
          Field Service Schedule
        </Typography>

        <TextField
          fullWidth
          label="Month"
          value={schedule.month}
          InputProps={{
            readOnly: true,
          }}
        />

        <FieldServiceTable
          entries={schedule.entries}
          onChange={updateEntry}
        />
      </Stack>
    </Paper>
  );
}