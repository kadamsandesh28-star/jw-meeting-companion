import {
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useStopwatch } from "../hooks/useStopwatch";
import LapList from "./LapList";
import StatusChip from "./StatusChip";
import StopwatchControls from "./StopwatchControls";
import StopwatchDisplay from "./StopwatchDisplay";

export default function StopwatchCard() {
  const {
    running,
    elapsed,
    laps,
    start,
    pause,
    resume,
    reset,
    lap,
  } = useStopwatch();

  return (
    <Paper
      elevation={0}
      sx={{
        p: {
          xs: 2.5,
          sm: 3,
        },
        borderRadius: 5,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={4}>
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Meeting Stopwatch
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Perfect for meetings, talks and
            assignments.
          </Typography>

          <StatusChip
            running={running}
            elapsed={elapsed}
          />
        </Stack>

        <StopwatchDisplay
          elapsed={elapsed}
        />

        <StopwatchControls
          running={running}
          elapsed={elapsed}
          onStart={start}
          onPause={pause}
          onResume={resume}
          onReset={reset}
          onLap={lap}
        />

        <LapList laps={laps} />
      </Stack>
    </Paper>
  );
}