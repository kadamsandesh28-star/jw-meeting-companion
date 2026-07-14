import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import useCountdown from "../hooks/useCountdown";

export default function PracticeTimer() {
  const navigate = useNavigate();
  const location = useLocation();

  const title =
    location.state?.title ?? "Practice Timer";

  const minutes =
    location.state?.minutes ?? 2;

  const initialSeconds = minutes * 60;

  const {
    timeLeft,
    start,
    pause,
    reset,
  } = useCountdown(initialSeconds);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  const formattedTime = `${mins
    .toString()
    .padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;

  return (
    <Box sx={{ p: 3 }}>
      <Paper
        elevation={4}
        sx={{
          p: 5,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Remaining Time
        </Typography>

        <Typography
          variant="h1"
          sx={{
            my: 5,
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          {formattedTime}
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="contained"
            size="large"
            onClick={start}
          >
            ▶ Start
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={pause}
          >
            ⏸ Pause
          </Button>

          <Button
            color="error"
            variant="contained"
            size="large"
            onClick={reset}
          >
            🔄 Reset
          </Button>

          <Button
            variant="text"
            onClick={() => navigate("/timers")}
          >
            ← Back
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}