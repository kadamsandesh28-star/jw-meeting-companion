import { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Note } from "../types/note";
import { loadNotes, saveNotes } from "../services/notesStorage";

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      category: "General",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Personal Notes
      </Typography>

      <TextField
        fullWidth
        label="Title"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Note"
        margin="normal"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ mt: 2, mb: 3 }}
        onClick={addNote}
      >
        Add Note
      </Button>

      <List>
        {notes.map((note) => (
          <ListItem
            key={note.id}
            secondaryAction={
              <IconButton onClick={() => deleteNote(note.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={note.title}
              secondary={note.content}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}