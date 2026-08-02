import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import {
  ScheduleItem,
  SchedulePeriod,
} from "../models/ScheduleItem";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (item: ScheduleItem) => void;
}

export default function AddScheduleDialog({
  open,
  onClose,
  onSave,
}: Props) {
  const [time, setTime] = useState("");

  const [activity, setActivity] =
    useState("");

  const [period, setPeriod] =
    useState<SchedulePeriod>("Morning");

  useEffect(() => {
    if (open) {
      setTime("");
      setActivity("");
      setPeriod("Morning");
    }
  }, [open]);

  function handleSave() {
    if (!time.trim()) return;

    if (!activity.trim()) return;

    onSave({
      id: crypto.randomUUID(),

      time,

      activity,

      period,

      completed: false,

      icon: "activity",
    });

    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Add Activity
      </DialogTitle>

      <DialogContent>
        <Stack
          spacing={3}
          mt={1}
        >
          <TextField
            label="Time"
            type="time"
            value={time}
            onChange={(e) =>
              setTime(e.target.value)
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Activity"
            placeholder="Morning Prayer"
            value={activity}
            onChange={(e) =>
              setActivity(
                e.target.value
              )
            }
          />

          <FormControl fullWidth>
            <InputLabel>
              Period
            </InputLabel>

            <Select
              value={period}
              label="Period"
              onChange={(e) =>
                setPeriod(
                  e.target
                    .value as SchedulePeriod
                )
              }
            >
              <MenuItem value="Morning">
                Morning
              </MenuItem>

              <MenuItem value="Afternoon">
                Afternoon
              </MenuItem>

              <MenuItem value="Evening">
                Evening
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}