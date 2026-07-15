import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import {
  loadAssignmentNotes,
  saveAssignmentNote,
} from "../services/assignmentNotes";

export default function AssignmentPreparation() {
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.id ?? "";
  const title = location.state?.title ?? "Assignment";
  const minutes = location.state?.minutes ?? 2;

  const [note, setNote] = useState("");

  useEffect(() => {
    const notes = loadAssignmentNotes();
    setNote(notes[id] ?? "");
  }, [id]);

  const save = () => {
    saveAssignmentNote(id, note);
    alert("✅ Notes saved.");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          ⏱ {minutes} Minutes
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
        >
          📝 Preparation Notes
        </Typography>

        <TextField
          multiline
          rows={10}
          fullWidth
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
        />

        <Button
          sx={{ mt: 3, mr: 2 }}
          variant="contained"
          onClick={save}
        >
          💾 Save Notes
        </Button>

        <Button
          sx={{ mt: 3 }}
          variant="outlined"
          onClick={() =>
            navigate("/practice-timer", {
              state: {
                id,
                title,
                minutes,
              },
            })
          }
        >
          ▶ Start Practice
        </Button>
      </Paper>
    </Box>
  );
}