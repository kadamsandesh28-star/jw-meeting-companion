import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { exportFamilyWorshipPdf } from "../export";
import { FamilyWorshipSession } from "../models/FamilyWorshipSession";

interface Props {
  session: FamilyWorshipSession;

  onOpen: (
    session: FamilyWorshipSession
  ) => void;

  onDelete: (
    id: string
  ) => void;
}

export default function SessionHistoryCard({
  session,
  onOpen,
  onDelete,
}: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack spacing={1}>
          <Typography
            variant="h6"
            fontWeight={700}
          >
            {session.title}
          </Typography>

          <Typography
            color="text.secondary"
          >
            {session.theme}
          </Typography>

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
      </CardContent>

      <CardActions>
        <Button
          startIcon={
            <EditRoundedIcon />
          }
          onClick={() =>
            onOpen(session)
          }
        >
          Open
        </Button>

        <Button
          startIcon={
            <FileDownloadRoundedIcon />
          }
          onClick={() =>
            exportFamilyWorshipPdf(
              session
            )
          }
        >
          Export
        </Button>

        <Button
          color="error"
          startIcon={
            <DeleteRoundedIcon />
          }
          onClick={() =>
            onDelete(session.id)
          }
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}