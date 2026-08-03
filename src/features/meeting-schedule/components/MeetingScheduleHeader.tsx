import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";

import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export default function MeetingScheduleHeader() {
  return (
    <Box
      sx={{
        mb: 4,
        p: 5,
        borderRadius: 6,
        position: "relative",
        overflow: "hidden",
        color: "white",
        background:
          "linear-gradient(135deg,#1565c0 0%,#2e7d32 100%)",
        boxShadow:
          "0 18px 45px rgba(46,125,50,0.25)",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.08)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.06)",
        }}
      />

      <Stack
        spacing={2}
        alignItems="center"
        textAlign="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <CalendarMonthRoundedIcon
          sx={{
            fontSize: 58,
          }}
        />

        <Typography
          variant="h3"
          fontWeight={700}
        >
          Meetings Hub
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            opacity: 0.95,
            fontSize: "1.05rem",
          }}
        >
          Organize Midweek Meetings, Weekend Meetings,
          Field Service Arrangements, and congregation
          schedules in one beautiful place.
        </Typography>

        <Chip
          icon={
            <EventAvailableRoundedIcon
              sx={{ color: "white !important" }}
            />
          }
          label="Simple • Organized • Multilingual"
          sx={{
            mt: 1,
            color: "white",
            bgcolor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            fontWeight: 600,
          }}
        />
      </Stack>
    </Box>
  );
}