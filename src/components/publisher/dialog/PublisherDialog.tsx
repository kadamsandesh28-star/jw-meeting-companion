import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useEffect, useState } from "react";

import { Publisher } from "../../../models/Publisher";
import PublisherForm from "../form/PublisherForm";


interface PublisherDialogProps {
  open: boolean;

  publisher: Publisher;

  title: string;

  onClose: () => void;

  onSave: (publisher: Publisher) => void;

  onArchive?: (publisher: Publisher) => void;
}

export default function PublisherDialog({
  open,
  publisher,
  title,
  onClose,
  onSave,
  onArchive,
}: PublisherDialogProps) {
  const [currentPublisher, setCurrentPublisher] =
    useState<Publisher>(publisher);

  useEffect(() => {
    setCurrentPublisher(publisher);
  }, [publisher]);

  const existingPublisher =
    currentPublisher.id.trim().length > 0;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      scroll="paper"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent dividers>
        <PublisherForm
          value={currentPublisher}
          onChange={setCurrentPublisher}
        />
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          py: 2,
        }}
      >
        {existingPublisher && onArchive && (
          <Button
            color="warning"
            onClick={() =>
              onArchive(currentPublisher)
            }
          >
            Archive
          </Button>
        )}

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            onSave(currentPublisher)
          }
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}    