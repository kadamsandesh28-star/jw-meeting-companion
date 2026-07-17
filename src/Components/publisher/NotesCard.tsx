import {
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { Publisher } from "../../services/congregationService";

interface Props {
  publisher: Publisher;
  editMode: boolean;
  onChange: (field: keyof Publisher, value: any) => void;
}

export default function NotesCard({
  publisher,
  editMode,
  onChange,
}: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
        >
          📝 Notes
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TextField
          fullWidth
          multiline
          minRows={8}
          disabled={!editMode}
          label="General Notes"
          value={publisher.notes}
          onChange={(e) =>
            onChange("notes", e.target.value)
          }
        />

      </CardContent>
    </Card>
  );
}