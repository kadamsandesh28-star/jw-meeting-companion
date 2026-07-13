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

export default function Midweek() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("midweek-notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("midweek-notes", notes);
  }, [notes]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📚 Midweek Meeting
      </Typography>

      <Typography color="text.secondary" gutterBottom>
        Current Meeting Material
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Weekly Meeting Workbook
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            href="https://www.jw.org/en/library/jw-meeting-workbook/"
            target="_blank"
          >
            Open Meeting Workbook
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            📝 My Meeting Notes
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={8}
            placeholder="Write your notes for this week's meeting..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </CardContent>
      </Card>
    </Box>
  );
}