 import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import StopCircleRoundedIcon from "@mui/icons-material/StopCircleRounded";
import { Chip } from "@mui/material";

interface Props {
  running: boolean;
  elapsed: number;
}

export default function StatusChip({
  running,
  elapsed,
}: Props) {
  if (running) {
    return (
      <Chip
        color="success"
        icon={<PlayCircleRoundedIcon />}
        label="Running"
      />
    );
  }

  if (elapsed > 0) {
    return (
      <Chip
        color="warning"
        icon={<PauseCircleRoundedIcon />}
        label="Paused"
      />
    );
  }

  return (
    <Chip
      color="default"
      icon={<StopCircleRoundedIcon />}
      label="Stopped"
    />
  );
}   