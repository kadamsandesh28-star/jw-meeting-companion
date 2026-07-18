import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import PublisherForm from "./PublisherForm";
import { Publisher } from "../models/Publisher";

interface PublisherDialogProps {
  open: boolean;
  publisher: Publisher;
  title: string;
  onClose: () => void;
  onSave: (publisher: Publisher) => void;
  onDelete?: (publisher: Publisher) => void;
}

export default function PublisherDialog({
  open,
  publisher,
  title,
  onClose,
  onSave,
  onDelete,
}: PublisherDialogProps) {
  const [current, setCurrent] = useState<Publisher>(publisher);

  useEffect(() => {
    setCurrent(publisher);
  }, [publisher]);

  const isExistingPublisher = current.id.trim() !== "";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <PublisherForm
          value={current}
          onChange={setCurrent}
        />
      </DialogContent>

      <DialogActions>
        {isExistingPublisher && onDelete && (
          <Button
            color="error"
            onClick={() => onDelete(current)}
          >
            Delete
          </Button>
        )}

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave(current)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}