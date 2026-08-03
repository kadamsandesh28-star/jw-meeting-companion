import { useState } from "react";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import MidweekMeetingInfo from "../components/MidweekMeetingInfo";

export default function MidweekMeetingPage() {
  const [selectedWeek, setSelectedWeek] =
    useState(1);

  const weeks = [1, 2, 3, 4, 5];

  return (
    <Stack spacing={4}>
      <Typography
        variant="h4"
        fontWeight={700}
      >
        📖 Midweek Meeting
      </Typography>

      <Typography color="text.secondary">
        Select the week you want to prepare.
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          border: 1,
          borderColor: "divider",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
        >
          {weeks.map((week) => (
            <Button
              key={week}
              variant={
                selectedWeek === week
                  ? "contained"
                  : "outlined"
              }
              color="success"
              onClick={() =>
                setSelectedWeek(week)
              }
            >
              Week {week}
            </Button>
          ))}
        </Stack>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          border: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
        >
          Week {selectedWeek}
        </Typography>

        <MidweekMeetingInfo />
      </Paper>
    </Stack>
  );
}