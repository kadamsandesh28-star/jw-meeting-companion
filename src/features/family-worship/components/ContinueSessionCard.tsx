import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { FamilyWorshipSession } from "../models/FamilyWorshipSession";

interface Props {
  session: FamilyWorshipSession | null;
  onContinue?: (
    session: FamilyWorshipSession
  ) => void;
}

export default function ContinueSessionCard({
  session,
  onContinue,
}: Props) {
  if (!session) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          border: 1,
          borderColor: "divider",
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
        >
          Continue Last Worship
        </Typography>

        <Typography color="text.secondary">
          You haven't created a family worship
          session yet.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h6"
          fontWeight={700}
        >
          Continue Last Worship
        </Typography>

        <Typography variant="h5">
          {session.title || "Untitled Session"}
        </Typography>

        <Typography color="text.secondary">
          Theme: {session.theme || "No theme"}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <UpdateRoundedIcon
            fontSize="small"
            color="action"
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Last updated{" "}
            {new Date(
              session.updatedAt
            ).toLocaleDateString()}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          startIcon={
            <PlayCircleRoundedIcon />
          }
          onClick={() =>
            onContinue?.(session)
          }
        >
          Continue Session
        </Button>
      </Stack>
    </Paper>
  );
}