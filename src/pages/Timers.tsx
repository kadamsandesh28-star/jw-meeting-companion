import { Box, Divider, Typography } from "@mui/material";
import MeetingTimerCard from "../Components/MeetingTimerCard";
import {
  midweekTimers,
  weekendTimers,
} from "../data/meetingTimers";

export default function Timers() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ⏱ JW Meeting Timers
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Practice your meeting assignments.
      </Typography>

      <Typography variant="h5" sx={{ mb: 2 }}>
        📚 Midweek Meeting
      </Typography>

      {midweekTimers.map((timer) => (
        <MeetingTimerCard
          key={timer.id}
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
          title={timer.title}
          minutes={timer.minutes}
          category="Weekend"
        />
      ))}
    </Box>
  );
}