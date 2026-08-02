import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import { StopwatchLap } from "../models/StopwatchLap";
import { formatTime } from "../utils/timeFormatter";

interface Props {
  laps: StopwatchLap[];
}

export default function LapList({
  laps,
}: Props) {
  if (laps.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: 1,
          borderColor: "divider",
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography color="text.secondary">
          No laps recorded yet.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <List disablePadding>
        {laps.map((lap, index) => (
          <ListItem
            key={lap.id}
            divider={index < laps.length - 1}
          >
            <ListItemIcon>
              <FlagRoundedIcon color="primary" />
            </ListItemIcon>

            <ListItemText
              primary={`Lap ${index + 1}`}
              secondary={formatTime(lap.time)}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}