import { useState } from "react";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  WeekendMeetingSchedule,
  WeekendMeetingWeek,
} from "./models/WeekendMeetingSchedule";

import { createEmptyWeekendSchedule } from "./services/createEmptyWeekendSchedule";

import WeekendMeetingInformationSection from "./WeekendMeetingInformationSection";

export default function WeekendMeetingEditor() {
  const [schedule, setSchedule] =
    useState<WeekendMeetingSchedule>(() =>
      createEmptyWeekendSchedule(
        "September 2026"
      )
    );

  function updateWeek(
    updatedWeek: WeekendMeetingWeek
  ) {
    setSchedule((current) => ({
      ...current,

      updatedAt: Date.now(),

      weeks: current.weeks.map((week) =>
        week.id === updatedWeek.id
          ? updatedWeek
          : week
      ),
    }));
  }

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="success.main"
        >
          Weekend Meeting Schedule
        </Typography>

        <Grid
          container
          spacing={2}
        >
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <TextField
              fullWidth
              label="Month"
              value={schedule.month}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <TextField
              fullWidth
              label="Weeks"
              value={schedule.weeks.length}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>

        <Typography color="text.secondary">
          Prepare the monthly Weekend Meeting
          schedule.
        </Typography>

        {schedule.weeks.map((week) => (
          <Accordion
            key={week.id}
            defaultExpanded={
              week.weekNumber === 1
            }
            disableGutters
            elevation={0}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 3,
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreRoundedIcon />
              }
            >
              <Stack>
                <Typography
                  fontWeight={700}
                >
                  Week {week.weekNumber}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {week.meetingDate ||
                    "Meeting date not set"}
                </Typography>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <WeekendMeetingInformationSection
                week={week}
                onChange={updateWeek}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Paper>
  );
}