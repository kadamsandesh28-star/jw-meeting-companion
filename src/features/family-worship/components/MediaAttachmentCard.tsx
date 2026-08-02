import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import {
  Chip,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  MediaAttachment,
  MediaType,
} from "../models/MediaAttachment";

interface Props {
  attachment: MediaAttachment;
  onEdit?: (attachment: MediaAttachment) => void;
  onDelete?: (id: string) => void;
}

function getIcon(type: MediaType) {
  switch (type) {
    case "video":
      return (
        <MovieRoundedIcon color="error" />
      );

    case "image":
      return (
        <ImageRoundedIcon color="primary" />
      );

    case "document":
      return (
        <DescriptionRoundedIcon color="warning" />
      );

    case "link":
      return (
        <LinkRoundedIcon color="success" />
      );
  }
}

export default function MediaAttachmentCard({
  attachment,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        {getIcon(attachment.type)}

        <Stack
          flex={1}
          spacing={0.5}
        >
          <Typography
            fontWeight={700}
          >
            {attachment.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
          >
            {attachment.url}
          </Typography>

          <Chip
            label={attachment.type}
            size="small"
            sx={{
              alignSelf: "flex-start",
              mt: 1,
            }}
          />
        </Stack>

        <IconButton
          onClick={() =>
            onEdit?.(attachment)
          }
        >
          <EditRoundedIcon />
        </IconButton>

        <IconButton
          color="error"
          onClick={() =>
            onDelete?.(
              attachment.id
            )
          }
        >
          <DeleteRoundedIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}