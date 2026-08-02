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
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: 1,
          fontSize: "clamp(2rem, 8vw, 4.5rem)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "clip",
          userSelect: "none",
        }}
      >
        {formatTime(elapsed)}
      </Typography>
    </Paper>
  );
}