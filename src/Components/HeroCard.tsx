import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function HeroCard() {

  const now = new Date();

  const greeting =
    now.getHours() < 12
      ? "Good Morning ☀️"
      : now.getHours() < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <Card
      sx={{
        mb: 4,
        borderRadius: 5,
        color: "white",
        background:
          "linear-gradient(135deg,#0d47a1,#1976d2,#42a5f5)",
      }}
    >
      <CardContent sx={{ p: 4 }}>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          📖 My JW Companion
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 3 }}
        >
          {greeting}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            opacity: 0.95,
          }}
        >
          Continue your spiritual routine.
        </Typography>

        <Typography
          sx={{
            mt: 4,
            opacity: 0.85,
          }}
        >
          {date}
        </Typography>

      </CardContent>
    </Card>
  );
}