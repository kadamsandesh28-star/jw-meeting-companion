import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  midweekTimers,
  weekendTimers,
  MeetingTimer,
} from "../data/meetingTimers";

import {
  loadMeetingTimers,
  saveMeetingTimers,
} from "../services/timerSettings";

export default function MeetingTimerSettings() {
  const defaults = [...midweekTimers, ...weekendTimers];

  const [timers, setTimers] = useState<MeetingTimer[]>([]);

  useEffect(() => {
    setTimers(loadMeetingTimers(defaults));
  }, []);

  const updateMinutes = (id: string, minutes: number) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id
          ? { ...timer, minutes }
          : timer
      )
    );
  };

  const save = () => {
    saveMeetingTimers(timers);
    alert("✅ Timer settings saved.");
  };

  const restoreDefaults = () => {
    setTimers(defaults);
    saveMeetingTimers(defaults);
    alert("Default timers restored.");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ⚙ Meeting Timer Settings
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Customize your meeting assignment times.
      </Typography>

      <Card>
        <CardContent>

          {timers.map((timer) => (
            <Box key={timer.id} sx={{ mb: 3 }}>

              <Typography fontWeight="bold">
                {timer.title}
              </Typography>

              <TextField
                type="number"
                label="Minutes"
                value={timer.minutes}
                onChange={(e) =>
                  updateMinutes(
                    timer.id,
                    Number(e.target.value)
                  )
                }
                sx={{ mt: 1 }}
              />

              <Divider sx={{ mt: 2 }} />

            </Box>
          ))}

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              variant="contained"
              onClick={save}
            >
              💾 Save
            </Button>

            <Button
              color="error"
              variant="outlined"
              onClick={restoreDefaults}
            >
              Restore Defaults
            </Button>
          </Stack>

        </CardContent>
      </Card>
    </Box>
  );
}