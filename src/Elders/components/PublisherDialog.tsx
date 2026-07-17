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
}

export default function PublisherDialog({
  open,
  publisher,
  title,
  onClose,
  onSave,
}: PublisherDialogProps) {
  const [current, setCurrent] = useState<Publisher>(publisher);

  useEffect(() => {
    setCurrent(publisher);
  }, [publisher]);

  const handleSave = () => {
    onSave(current);
  };

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
        <Button onClick={onClose}>
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
  );
}