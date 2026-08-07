import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import {
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  date: string;
  status: string;
}

export default function MeetingListItem({
  title,
  date,
  status,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "all .25s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 3,
        },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <EventNoteRoundedIcon
          color="primary"
          fontSize="large"
        />

        <Stack
          spacing={0.5}
          sx={{ flex: 1 }}
        >
          <Typography fontWeight={700}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {date}
          </Typography>
        </Stack>

        <Chip
          label={status}
          color={
            status === "Upcoming"
              ? "primary"
              : "default"
          }
          size="small"
        />

        <ChevronRightRoundedIcon
          color="action"
        />
      </Stack>
    </Paper>
  );
}