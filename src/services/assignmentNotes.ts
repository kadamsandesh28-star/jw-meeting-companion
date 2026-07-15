const STORAGE_KEY = "jw-assignment-notes";

export function loadAssignmentNotes() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {};
  }

  return JSON.parse(saved);
}

export function saveAssignmentNote(
  id: string,
  note: string
) {
  const notes = loadAssignmentNotes();

  notes[id] = note;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notes)
  );
}