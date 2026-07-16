import { useEffect, useState } from "react";

import {
  Box,
  Button,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import DashboardCard from "../Components/dashboard/DashboardCard";

import {
  DailyScriptureEntry,
  getTodayEntry,
  saveTodayEntry,
  getRecentReflections,
  getReflectionStatistics,
} from "../services/dailyScriptureService";

export default function DailyScripture() {
  const [entry, setEntry] =
    useState<DailyScriptureEntry>(getTodayEntry());

  const [history, setHistory] =
    useState<DailyScriptureEntry[]>([]);

  const [stats, setStats] =
    useState(getReflectionStatistics());

  useEffect(() => {
    setEntry(getTodayEntry());
    setHistory(getRecentReflections());
    setStats(getReflectionStatistics());
  }, []);

  function save() {
    saveTodayEntry(entry);

    setHistory(getRecentReflections());
    setStats(getReflectionStatistics());

    alert("✅ Today's reflection saved.");
  }

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        📖 Daily Scripture
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        {new Date(entry.date).toLocaleDateString(
          undefined,
          {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )}
      </Typography>

      <DashboardCard>

        <CardContent>

          <Stack spacing={3}>

            <Chip
              label="Today's Reflection"
              color="primary"
              sx={{ width: "fit-content" }}
            />

            <TextField
              label="Scripture"
              fullWidth
              value={entry.scripture}
              onChange={(e) =>
                setEntry({
                  ...entry,
                  scripture: e.target.value,
                })
              }
            />

            <TextField
              label="Today's Theme"
              fullWidth
              value={entry.theme}
              onChange={(e) =>
                setEntry({
                  ...entry,
                  theme: e.target.value,
                })
              }
            />

            <TextField
              label="Meditation"
              multiline
              minRows={5}
              fullWidth
              value={entry.meditation}
              onChange={(e) =>
                setEntry({
                  ...entry,
                  meditation: e.target.value,
                })
              }
            />

            <TextField
              label="Application Today"
              multiline
              minRows={4}
              fullWidth
              value={entry.application}
              onChange={(e) =>
                setEntry({
                  ...entry,
                  application: e.target.value,
                })
              }
            />

            <Button
              variant="contained"
              size="large"
              onClick={save}
            >
              💾 Save Today's Reflection
            </Button>

            <Divider />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              📚 Recent Reflections
            </Typography>

            {history.length === 0 ? (
              <Typography color="text.secondary">
                No reflections yet.
              </Typography>
            ) : (
              <List>
                {history.map((item) => (
                  <ListItem
                    key={item.id}
                    divider
                  >
                    <ListItemText
                      primary={
                        item.scripture ||
                        "No Scripture"
                      }
                      secondary={`${item.date} • ${
                        item.theme || "No Theme"
                      }`}
                    />
                  </ListItem>
                ))}
              </List>
            )}

            <Divider />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              📊 Reflection Statistics
            </Typography>

            <Typography>
              <strong>Total Reflections:</strong>{" "}
              {stats.total}
            </Typography>

            <Typography>
              <strong>Latest Reflection:</strong>{" "}
              {stats.latestDate}
            </Typography>

          </Stack>

        </CardContent>

      </DashboardCard>

    </Box>
  );
}