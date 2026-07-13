import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
} from "@mui/material";

export default function Weekend() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("weekend-notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weekend-notes", notes);
  }, [notes]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📖 Weekend Meeting
      </Typography>

      <Typography color="text.secondary" gutterBottom>
        Watchtower Study
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Current Watchtower Study
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            href="https://www.jw.org/en/library/magazines/watchtower-study/"
            target="_blank"
          >
            Open Watchtower Study
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            📝 My Weekend Meeting Notes
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={8}
            placeholder="Write your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </CardContent>
      </Card>
    </Box>
  );
}