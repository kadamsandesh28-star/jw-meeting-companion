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
        p: 3,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={3}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{
            xs: "flex-start",
            sm: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Meeting Stopwatch
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