import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { quickNoteService } from "../services/quickNoteService";

export default function QuickNotesCard() {
  const [content, setContent] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  // ✅ Fixed: initialize the ref
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const note = quickNoteService.get();
    setContent(note.content);
    setUpdatedAt(note.updatedAt);
  }, []);

  useEffect(() => {
    // ✅ Fixed: explicit null check
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      const note = quickNoteService.save(content);
      setUpdatedAt(note.updatedAt);
    }, 1000);

    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, [content]);

  return (
    <Card
      elevation={4}
      sx={{
        position: "relative",
        bgcolor: "#FFF9C4",
        border: "1px solid #F4E38A",
        borderRadius: 5,
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      {/* Folded Corner */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 34,
          height: 34,
          background:
            "linear-gradient(135deg,#FFF9C4 50%,#F4E38A 50%)",
        }}
      />

      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
        >
          📝 Quick Notes
        </Typography>

        <Box
          sx={{
            position: "relative",
            borderRadius: 2,
            p: 1,
            minHeight: 220,

            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 31px,
                rgba(0,0,0,.08) 32px
              )
            `,
          }}
        >
          <textarea
            placeholder="💡 Capture a thought before you forget..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            style={{
              width: "100%",
              minHeight: "220px",
              border: "none",
              outline: "none",
              resize: "none",
              background: "transparent",
              fontSize: "16px",
              lineHeight: "32px",
              fontFamily:
                '"Patrick Hand","Segoe UI",sans-serif',
              color: "#333",
            }}
          />
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mt: 2,
          }}
        >
          ✓ Saved{" "}
          {updatedAt
            ? new Date(updatedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""}
        </Typography>
      </CardContent>
    </Card>
  );
}