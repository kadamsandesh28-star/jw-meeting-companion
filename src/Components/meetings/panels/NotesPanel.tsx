import { useEffect, useState } from "react";

const STORAGE_KEY = "jw-meeting-notes";

export default function NotesPanel() {
  const [notes, setNotes] = useState("");

  // Load saved notes when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, notes);
  }, [notes]);

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          📝 Meeting Notes
        </h4>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Capture important points, scriptures, and reminders while preparing
          for this meeting section.
        </p>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Start typing your notes here..."
        className="h-48 w-full rounded-xl border border-slate-300 bg-white p-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-indigo-800"
      />

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {notes.length} characters
        </span>

        <span className="text-xs font-medium text-green-600 dark:text-green-400">
          ✓ Auto-saved
        </span>
      </div>
    </div>
  );
}