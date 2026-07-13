import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const cards = [
    {
      title: "📚 Midweek Meeting",
      description: "Open the workbook and write your meeting notes.",
      link: "/midweek",
    },
    {
      title: "📖 Weekend Meeting",
      description: "Open the Watchtower study and save your notes.",
      link: "/weekend",
    },
    {
      title: "📝 Personal Notes",
      description: "Keep all your personal study notes in one place.",
      link: "/notes",
    },
    {
      title: "⏱ Meeting Timers",
      description: "Practice your assignments with built-in timers.",
      link: "/timers",
    },
  ];

  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        📖 My JW Companion
      </Typography>

      <Typography variant="h6" color="text.secondary">
        Welcome back!
      </Typography>

      <Typography sx={{ mb: 4 }}>
        {today}
      </Typography>
      <Stack
  direction="row"
  spacing={2}
  flexWrap="wrap"
  sx={{ mb: 4 }}
>
  <Button
    component={Link}
    to="/midweek"
    variant="contained"
  >
    📚 Midweek
  </Button>

  <Button
    component={Link}
    to="/weekend"
    variant="contained"
  >
    📖 Weekend
  </Button>

  <Button
    component={Link}
    to="/notes"
    variant="outlined"
  >
    📝 Notes
  </Button>

  <Button
    component={Link}
    to="/timers"
    variant="outlined"
  >
    ⏱ Timers
  </Button>
</Stack>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={card.link}
                sx={{ height: "100%" }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    {card.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card
        sx={{
          mt: 4,
          borderRadius: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardContent>
          <Typography variant="h6">
            🌟 Weekly Encouragement
          </Typography>

          <Typography sx={{ mt: 2 }}>
            "Trust in Jehovah with all your heart."
          </Typography>

          <Typography color="text.secondary">
            Proverbs 3:5
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}