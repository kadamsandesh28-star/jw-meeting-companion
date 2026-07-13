import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

export default function Timers() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [countdown, setCountdown] = useState(0);
const [countdownRunning, setCountdownRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (running) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running]);
  useEffect(() => {
    let timer: number | undefined;
  
    if (countdownRunning && countdown > 0) {
      timer = window.setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
  
    if (countdown === 0 && countdownRunning) {
      setCountdownRunning(false);
      alert("⏰ Time is up!");
    }
  
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown, countdownRunning]);

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ⏱ Meeting Timers
      </Typography>

      <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          {formatTime()}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={() => setRunning(true)}
          >
            Start
          </Button>

          <Button
            variant="outlined"
            onClick={() => setRunning(false)}
          >
            Pause
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}