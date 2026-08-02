import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

import {
  Button,
  Stack,
} from "@mui/material";

interface Props {
  running: boolean;
  elapsed: number;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onLap: () => void;
}

export default function StopwatchControls({
  running,
  elapsed,
  onStart,
  onPause,
  onResume,
  onReset,
  onLap,
}: Props) {
  const hasStarted = elapsed > 0;

  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={2}
      justifyContent="center"
    >
      {!hasStarted ? (
        <Button
          variant="contained"
          size="large"
          startIcon={<PlayArrowRoundedIcon />}
          onClick={onStart}
        >
          Start
        </Button>
      ) : running ? (
        <>
          <Button
            variant="contained"
            color="warning"
            size="large"
            startIcon={<PauseRoundedIcon />}
            onClick={onPause}
          >
            Pause
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<FlagRoundedIcon />}
            onClick={onLap}
          >
            Lap
          </Button>

          <Button
            variant="outlined"
            color="error"
            size="large"
            startIcon={<RefreshRoundedIcon />}
            onClick={onReset}
          >
            Reset
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrowRoundedIcon />}
            onClick={onResume}
          >
            Resume
          </Button>

          <Button
            variant="outlined"
            color="error"
            size="large"
            startIcon={<RefreshRoundedIcon />}
            onClick={onReset}
          >
            Reset
          </Button>
        </>
      )}
    </Stack>
  );
}