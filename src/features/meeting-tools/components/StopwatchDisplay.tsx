import { Paper, Typography } from "@mui/material";

import { formatTime } from "../utils/timeFormatter";

interface Props {
  elapsed: number;
}

export default function StopwatchDisplay({
  elapsed,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        py: {
          xs: 4,
          sm: 5,
        },
        px: 2,
        borderRadius: 5,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: "block",
          mb: 1.5,
          color: "text.secondary",
          fontWeight: 700,
          letterSpacing: 4,
        }}
      >
        MEETING TIMER
      </Typography>

      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: {
            xs: 1,
            sm: 2,
          },
          fontSize: {
            xs: "2.6rem",
            sm: "3.6rem",
            md: "4.5rem",
          },
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "clip",
          userSelect: "none",
        }}
      >
        {formatTime(elapsed)}
      </Typography>
    </Paper>
  );
}