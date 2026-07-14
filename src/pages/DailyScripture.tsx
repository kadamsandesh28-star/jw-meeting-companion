import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function DailyScripture() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📖 Examine the Scriptures Daily
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography sx={{ mb: 3 }}>
            Open today's Daily Scripture on JW.org.
          </Typography>

         <Button
  variant="contained"
  href="https://www.jw.org/en/library/brochures/Examining-the-Scriptures-Daily-2026/"
  target="_blank"
>
  Open Daily Scripture
</Button>
        </CardContent>
      </Card>
    </Box>
  );
}