import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import PublisherHeader from "../PublisherHeader";

import { Publisher } from "../../../models/Publisher";

interface PublisherManagementCardProps {
  publisher: Publisher;

  onViewProfile?: (publisherId: string) => void;

  onEdit?: (publisher: Publisher) => void;

  onArchive?: (publisher: Publisher) => void;
}

export default function PublisherManagementCard({
  publisher,
  onViewProfile,
  onEdit,
  onArchive,
}: PublisherManagementCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <PublisherHeader publisher={publisher} />

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
          >
            <Chip
              label={
                publisher.active
                  ? "Active"
                  : "Inactive"
              }
              color={
                publisher.active
                  ? "success"
                  : "default"
              }
              size="small"
            />

            <Chip
              label={
                publisher.baptized
                  ? "Baptized"
                  : "Unbaptized"
              }
              color={
                publisher.baptized
                  ? "primary"
                  : "default"
              }
              size="small"
            />

            <Chip
              label={publisher.publisherStatus}
              color="secondary"
              size="small"
            />
          </Stack>

          <Divider />

          <Typography variant="body2">
            <strong>Assignments:</strong>{" "}
            {publisher.assignments.length}
          </Typography>

          <Typography variant="body2">
            <strong>Privileges:</strong>{" "}
            {publisher.privileges.length}
          </Typography>

          <Typography variant="body2">
            <strong>Family Members:</strong>{" "}
            {publisher.family.length}
          </Typography>

          <Typography variant="body2">
            <strong>Timeline Events:</strong>{" "}
            {publisher.timeline.length}
          </Typography>

          {publisher.notes && (
            <>
              <Divider />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {publisher.notes.length > 120
                  ? `${publisher.notes.substring(
                      0,
                      120
                    )}...`
                  : publisher.notes}
              </Typography>
            </>
          )}
        </Stack>
      </CardContent>

      <Divider />

      <CardActions
        sx={{
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Button
          startIcon={<VisibilityIcon />}
          onClick={() =>
            onViewProfile?.(publisher.id)
          }
        >
          View
        </Button>

        <Button
          startIcon={<EditIcon />}
          color="primary"
          onClick={() =>
            onEdit?.(publisher)
          }
        >
          Edit
        </Button>

        <Button
          startIcon={<ArchiveIcon />}
          color="warning"
          onClick={() =>
            onArchive?.(publisher)
          }
        >
          Archive
        </Button>
      </CardActions>
    </Card>
  );
}