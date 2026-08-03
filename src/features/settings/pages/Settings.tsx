import { useState } from "react";

import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import {
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  loadCongregationProfile,
  saveCongregationProfile,
} from "../storage/congregationProfileStorage";

export default function Settings() {
  const [profile, setProfile] = useState(
    loadCongregationProfile()
  );

  function handleSave() {
    saveCongregationProfile(profile);

    alert("Congregation profile saved successfully.");
  }

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 700,
        mx: "auto",
        mt: 4,
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="primary"
        >
          Congregation Settings
        </Typography>

        <Typography color="text.secondary">
          Configure your congregation information.
        </Typography>

        <TextField
          fullWidth
          label="Congregation Name"
          value={profile.congregationName}
          onChange={(e) =>
            setProfile({
              ...profile,
              congregationName: e.target.value,
            })
          }
        />

        <Button
          variant="contained"
          startIcon={<SaveRoundedIcon />}
          onClick={handleSave}
        >
          Save Settings
        </Button>
      </Stack>
    </Paper>
  );
}