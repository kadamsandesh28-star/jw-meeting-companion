import { useState } from "react";

import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";

import {
  Button,
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

import {
  saveSchedule,
} from "./storage/fieldServiceStorage";

import { exportFieldServicePdf } from "./export/exportFieldServicePdf";

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

  function handleSave() {
    saveSchedule(schedule);

    alert(
      "Field Service schedule saved successfully."
    );
  }

  function handleExportPdf() {
    exportFieldServicePdf(schedule);
  }

  function handlePrint() {
    window.print();
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

        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            color="success"
            startIcon={<SaveRoundedIcon />}
            onClick={handleSave}
          >
            Save Schedule
          </Button>

          <Button
            variant="outlined"
            color="success"
            startIcon={<PictureAsPdfRoundedIcon />}
            onClick={handleExportPdf}
          >
            Export PDF
          </Button>

          <Button
            variant="outlined"
            color="success"
            startIcon={<PrintRoundedIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>
        </Stack>

        <Typography color="text.secondary">
          Prepare the monthly Field Service
          schedule, save it and export it as
          a PDF.
        </Typography>

        <FieldServiceTable
          entries={schedule.entries}
          onChange={updateEntry}
        />
      </Stack>
    </Paper>
  );
}