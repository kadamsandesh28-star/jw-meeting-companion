import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MeetingTimerCard from "../Components/MeetingTimerCard";
import {
  midweekTimers,
  weekendTimers,
} from "../data/meetingTimers";

export default function Timers() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4">
          ⏱ JW Meeting Timers
        </Typography>

        <Button
          variant="outlined"
          onClick={() => navigate("/meeting-timer-settings")}
        >
          ⚙ Timer Settings
        </Button>
      </Stack>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Practice your meeting assignments.
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        📚 Midweek Meeting
      </Typography>

      {midweekTimers.map((timer) => (
        <MeetingTimerCard
          key={timer.id}
          id={timer.id}
          title={timer.title}
          minutes={timer.minutes}
          category="Midweek"
        />
      ))}

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        📖 Weekend Meeting
      </Typography>

      {weekendTimers.map((timer) => (
        <MeetingTimerCard
          key={timer.id}
          id={timer.id}
          title={timer.title}
          minutes={timer.minutes}
          category="Weekend"
        />
      ))}
    </Box>
  );
}