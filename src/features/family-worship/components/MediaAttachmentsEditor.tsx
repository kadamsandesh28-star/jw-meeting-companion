import AddRoundedIcon from "@mui/icons-material/AddRounded";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import {
  MediaAttachment,
  MediaType,
} from "../models/MediaAttachment";
import MediaAttachmentCard from "./MediaAttachmentCard";

interface Props {
  value: MediaAttachment[];
  onChange: (
    attachments: MediaAttachment[]
  ) => void;
}

const mediaTypes: MediaType[] = [
  "video",
  "image",
  "document",
  "link",
];

export default function MediaAttachmentsEditor({
  value,
  onChange,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [url, setUrl] =
    useState("");

  const [type, setType] =
    useState<MediaType>("video");

  function handleSave() {
    if (!title.trim() || !url.trim()) {
      return;
    }

    onChange([
      ...value,
      {
        id: crypto.randomUUID(),
        title,
        url,
        type,
      },
    ]);

    setTitle("");
    setUrl("");
    setType("video");
    setOpen(false);
  }

  function handleDelete(id: string) {
    onChange(
      value.filter(
        (item) => item.id !== id
      )
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
      }}
    >
      <Stack spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            fontWeight={700}
          >
            Media
          </Typography>

          <Button
            variant="contained"
            startIcon={
              <AddRoundedIcon />
            }
            onClick={() =>
              setOpen(true)
            }
          >
            Add
          </Button>
        </Stack>

        {value.length === 0 ? (
          <Typography color="text.secondary">
            No media attached yet.
          </Typography>
        ) : (
          <Stack spacing={2}>
            {value.map(
              (attachment) => (
                <MediaAttachmentCard
                  key={attachment.id}
                  attachment={attachment}
                  onDelete={
                    handleDelete
                  }
                />
              )
            )}
          </Stack>
        )}
      </Stack>

      <Dialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Add Media
        </DialogTitle>

        <DialogContent>
          <Stack
            spacing={2}
            sx={{ mt: 1 }}
          >
            <TextField
              label="Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
            />

            <TextField
              select
              label="Type"
              value={type}
              onChange={(e) =>
                setType(
                  e.target
                    .value as MediaType
                )
              }
            >
              {mediaTypes.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="URL"
              value={url}
              onChange={(e) =>
                setUrl(
                  e.target.value
                )
              }
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() =>
              setOpen(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}