import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import {
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  onSurprise: () => void;
}

export default function SurpriseMeCard({
  onSurprise,
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
        background:
          "linear-gradient(135deg,#ede7f6,#f3e5f5)",
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          ✨ Need Inspiration?
        </Typography>

        <Typography color="text.secondary">
          Let the app choose a family
          worship template for you.
        </Typography>

        <Button
          variant="contained"
          startIcon={
            <AutoAwesomeRoundedIcon />
          }
          onClick={onSurprise}
        >
          Surprise Me
        </Button>
      </Stack>
    </Paper>
  );
}