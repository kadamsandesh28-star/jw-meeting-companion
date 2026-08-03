import {
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { FieldServiceEntry } from "./models/FieldServiceSchedule";

interface Props {
  entries: FieldServiceEntry[];
  onChange: (
    entry: FieldServiceEntry
  ) => void;
}

export default function FieldServiceTable({
  entries,
  onChange,
}: Props) {
  function updateEntry(
    entry: FieldServiceEntry,
    field: keyof FieldServiceEntry,
    value: string
  ) {
    onChange({
      ...entry,
      [field]: value,
    });
  }

  return (
    <Stack spacing={3}>
      {entries.map((entry, index) => (
        <Stack
          key={entry.id}
          spacing={2}
          sx={{
            p: 2,
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
          >
            Arrangement {index + 1}
          </Typography>

          <Grid
            container
            spacing={2}
          >
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                label="Date"
                value={entry.date}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "date",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                label="Day"
                value={entry.day}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "day",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                label="Time"
                value={entry.time}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "time",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Arrangement"
                value={entry.arrangement}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "arrangement",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Location"
                value={entry.location}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "location",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Conductor"
                value={entry.conductor}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "conductor",
                    e.target.value
                  )
                }
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Notes"
                value={entry.notes}
                onChange={(e) =>
                  updateEntry(
                    entry,
                    "notes",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Stack>
      ))}
    </Stack>
  );
}