import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  midweekTimers,
  weekendTimers,
} from "../data/meetingTimers";

export default function MeetingTimerSettings() {
  const [midweek, setMidweek] = useState(midweekTimers);
  const [weekend, setWeekend] = useState(weekendTimers);

  const changeMinutes = (
    id: string,
    change: number,
    meeting: "midweek" | "weekend"
  ) => {
    if (meeting === "midweek") {
      setMidweek((prev) =>
        prev.map((timer) =>
          timer.id === id
            ? {
                ...timer,
                minutes: Math.max(1, timer.minutes + change),
              }
            : timer
        )
      );
    } else {
      setWeekend((prev) =>
        prev.map((timer) =>
          timer.id === id
            ? {
                ...timer,
                minutes: Math.max(1, timer.minutes + change),
              }
            : timer
        )
      );
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ⚙ Meeting Timer Settings
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Adjust assignment times for your congregation.
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        📚 Midweek Meeting
      </Typography>

      {midweek.map((timer) => (
        <Card key={timer.id} sx={{ mb: 2 }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight="bold">
                {timer.title}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton
                  onClick={() =>
                    changeMinutes(timer.id, -1, "midweek")
                  }
                >
                  <RemoveIcon />
                </IconButton>

                <Typography fontWeight="bold">
                  {timer.minutes} min
                </Typography>

                <IconButton
                  onClick={() =>
                    changeMinutes(timer.id, 1, "midweek")
                  }
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        📖 Weekend Meeting
      </Typography>

      {weekend.map((timer) => (
        <Card key={timer.id} sx={{ mb: 2 }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontWeight="bold">
                {timer.title}
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton
                  onClick={() =>
                    changeMinutes(timer.id, -1, "weekend")
                  }
                >
                  <RemoveIcon />
                </IconButton>

                <Typography fontWeight="bold">
                  {timer.minutes} min
                </Typography>

                <IconButton
                  onClick={() =>
                    changeMinutes(timer.id, 1, "weekend")
                  }
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
      >
        💾 Save Settings
      </Button>
    </Box>
  );
}