import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  loadSettings,
  updateSettings,
  ThemeMode,
} from "../../services/settingsService";

import { useAppTheme } from "../../theme/ThemeContext";

import {
  downloadBackup,
  restoreBackup,
  BackupData,
} from "../../services/backupService";

import {
  getUserRole,
  setUserRole,
  UserRole,
} from "../../services/userRoleService";

export default function Settings() {
  const [midweekLink, setMidweekLink] = useState("");
  const [weekendLink, setWeekendLink] = useState("");
  const [dailyScriptureLink, setDailyScriptureLink] =
    useState("");

  const [theme, setTheme] =
    useState<ThemeMode>("system");

  const [userRole, setUserRoleState] =
    useState<UserRole>("publisher");

  const { setMode } = useAppTheme();

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMidweekLink(
      localStorage.getItem("midweek-link") || ""
    );

    setWeekendLink(
      localStorage.getItem("weekend-link") || ""
    );

    setDailyScriptureLink(
      localStorage.getItem("daily-scripture-link") || ""
    );

    const settings = loadSettings();

    setTheme(settings.theme);

    setUserRoleState(getUserRole());
  }, []);

  function saveAllSettings() {
    localStorage.setItem(
      "midweek-link",
      midweekLink
    );

    localStorage.setItem(
      "weekend-link",
      weekendLink
    );

    localStorage.setItem(
      "daily-scripture-link",
      dailyScriptureLink
    );

    updateSettings({
      theme,
    });

    setMode(theme);

    setUserRole(userRole);

    alert("✅ Settings saved successfully!");
  }

  function handleRestore(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const backup =
          JSON.parse(
            reader.result as string
          ) as BackupData;

        const confirmRestore =
          window.confirm(
            "Restore this backup? This will overwrite your current local data."
          );

        if (!confirmRestore) return;

        restoreBackup(backup);

        alert(
          "✅ Backup restored successfully.\n\nPlease refresh the application."
        );
      } catch {
        alert("❌ Invalid backup file.");
      }
    };

    reader.readAsText(file);
  }

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100%",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        ⚙️ Settings
      </Typography>

      <Card
        sx={{
          borderRadius: 4,
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <CardContent>
          {/* Study Resources */}

          <Typography
            variant="h6"
            gutterBottom
          >
            📚 Study Resources
          </Typography>

          <TextField
            fullWidth
            label="Midweek Workbook URL"
            margin="normal"
            value={midweekLink}
            onChange={(e) =>
              setMidweekLink(e.target.value)
            }
          />

          <TextField
            fullWidth
            label="Weekend Study URL"
            margin="normal"
            value={weekendLink}
            onChange={(e) =>
              setWeekendLink(e.target.value)
            }
          />

          <TextField
            fullWidth
            label="Daily Scripture URL"
            margin="normal"
            value={dailyScriptureLink}
            onChange={(e) =>
              setDailyScriptureLink(
                e.target.value
              )
            }
          />

          <Divider sx={{ my: 4 }} />

          {/* Appearance */}

          <Typography
            variant="h6"
            gutterBottom
          >
            🎨 Appearance
          </Typography>

          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel>
              Theme
            </InputLabel>

            <Select
              value={theme}
              label="Theme"
              onChange={(e) =>
                setTheme(
                  e.target.value as ThemeMode
                )
              }
            >
              <MenuItem value="system">
                💻 System
              </MenuItem>

              <MenuItem value="light">
                ☀️ Light
              </MenuItem>

              <MenuItem value="dark">
                🌙 Dark
              </MenuItem>
            </Select>
          </FormControl>

          <Divider sx={{ my: 4 }} />

          {/* Privileges */}

          <Typography
            variant="h6"
            gutterBottom
          >
            👤 Privileges & Responsibilities
          </Typography>

          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel>
              Role
            </InputLabel>

            <Select
              value={userRole}
              label="Role"
              onChange={(e) =>
                setUserRoleState(
                  e.target.value as UserRole
                )
              }
            >
              <MenuItem value="publisher">
                General Publisher
              </MenuItem>

              <MenuItem value="ministerial-servant">
                Ministerial Servant
              </MenuItem>

              <MenuItem value="elder">
                Elder
              </MenuItem>
            </Select>
          </FormControl>

          <Divider sx={{ my: 4 }} />

          {/* Backup */}

          <Typography
            variant="h6"
            gutterBottom
          >
            ☁️ Backup & Restore
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              onClick={downloadBackup}
            >
              ⬇ Export Backup
            </Button>

            <Button
              variant="outlined"
              onClick={() =>
                fileInputRef.current?.click()
              }
            >
              ⬆ Restore Backup
            </Button>
          </Stack>

          <input
            hidden
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleRestore}
          />

          <Divider sx={{ my: 4 }} />

          <Button
            variant="contained"
            size="large"
            onClick={saveAllSettings}
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}