import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Settings() {
  const [midweekLink, setMidweekLink] = useState("");
  const [weekendLink, setWeekendLink] = useState("");
  const [dailyScriptureLink, setDailyScriptureLink] = useState("");

  useEffect(() => {
    const savedMidweek = localStorage.getItem("midweek-link");
    const savedWeekend = localStorage.getItem("weekend-link");
    const savedDaily = localStorage.getItem("daily-scripture-link");

if (savedDaily) {
  setDailyScriptureLink(savedDaily);
}

    if (savedMidweek) setMidweekLink(savedMidweek);
    if (savedWeekend) setWeekendLink(savedWeekend);
  }, []);

  const saveSettings = () => {
    localStorage.setItem("midweek-link", midweekLink);
    localStorage.setItem("weekend-link", weekendLink);
localStorage.setItem(
  "daily-scripture-link",
  dailyScriptureLink
);
    alert("✅ Settings saved successfully!");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        ⚙️ Settings
      </Typography>

      <Card>
        <CardContent>
          <TextField
            fullWidth
            label="Midweek Workbook URL"
            margin="normal"
            value={midweekLink}
            onChange={(e) => setMidweekLink(e.target.value)}
          />

          <TextField
            fullWidth
            label="Weekend Study URL"
            margin="normal"
            value={weekendLink}
            onChange={(e) => setWeekendLink(e.target.value)}
          />
<TextField
  fullWidth
  label="Daily Scripture URL"
  margin="normal"
  value={dailyScriptureLink}
  onChange={(e) => setDailyScriptureLink(e.target.value)}
/>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={saveSettings}
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}