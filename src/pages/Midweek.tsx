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

  const [checklist, setChecklist] = useState({
    readWorkbook: false,
    prepareComments: false,
    practiceAssignment: false,
    reviewBibleReading: false,
  });

  const [workbookLink, setWorkbookLink] = useState("");

  // Load notes
  useEffect(() => {
    const savedNotes = localStorage.getItem("midweek-notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("midweek-notes", notes);
  }, [notes]);

  // Load checklist
  useEffect(() => {
    const savedChecklist = localStorage.getItem("midweek-checklist");

    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    }
  }, []);

  // Save checklist
  useEffect(() => {
    localStorage.setItem(
      "midweek-checklist",
      JSON.stringify(checklist)
    );
  }, [checklist]);

  // Load workbook link
  useEffect(() => {
    const savedLink = localStorage.getItem("midweek-link");

    if (savedLink) {
      setWorkbookLink(savedLink);
    } else {
      setWorkbookLink(
        "https://www.jw.org/en/library/jw-meeting-workbook/"
      );
    }
  }, []);

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
  component="a"
  href={workbookLink}
  target="_blank"
  rel="noopener noreferrer"
  disabled={!workbookLink}
>
  Open Meeting Workbook
</Button>
          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            ✅ Preparation Checklist
          </Typography>

          <label>
            <input
              type="checkbox"
              checked={checklist.readWorkbook}
              onChange={(e) =>
                setChecklist({
                  ...checklist,
                  readWorkbook: e.target.checked,
                })
              }
            />
            {" "}Read Workbook
          </label>

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