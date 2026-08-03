import {
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function MidweekMeetingInfo() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={3}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="primary"
        >
          Meeting Information
        </Typography>

        <Grid
          container
          spacing={3}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Meeting Date"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Weekly Bible Reading"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Chairman"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="Auxiliary Classroom Counselor"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              label="Opening Song"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <TextField
              label="Opening Prayer"
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              label="Opening Comments"
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}