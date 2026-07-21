import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useEffect, useState } from "react";

import SearchDialog from "./search/SearchDialog";

export default function HeroCard() {
  const [time, setTime] = useState(new Date());
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  const date = time.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const clock = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Card
        sx={{
          mb: 4,
          borderRadius: 5,
          color: "white",
          background:
            "linear-gradient(135deg,#0D47A1,#1976D2,#42A5F5)",
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

          <Typography sx={{ mt: 1 }}>
            Continue your spiritual routine.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{ mt: 4 }}
          >
            <Typography>
              📅 {date}
            </Typography>

            <Typography>
              🕒 {clock}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<SearchIcon />}
            sx={{
              mt: 4,
              borderRadius: 3,
            }}
            onClick={() => setSearchOpen(true)}
          >
            Global Search
          </Button>
        </CardContent>
      </Card>

      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}