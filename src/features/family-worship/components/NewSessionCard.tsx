import AddRoundedIcon from "@mui/icons-material/AddRounded";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  onCreate?: () => void;
}

export default function NewSessionCard({
  onCreate,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h6"
          fontWeight={700}
        >
          Start New Family Worship
        </Typography>

        <Typography
          color="text.secondary"
        >
          Create a new worship session with
          scriptures, discussion questions,
          media, notes, goals and more.
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<AddRoundedIcon />}
          onClick={onCreate}
          sx={{
            alignSelf: {
              xs: "stretch",
              sm: "flex-start",
            },
            borderRadius: 3,
          }}
        >
          New Worship Session
        </Button>
      </Stack>
    </Paper>
  );
}