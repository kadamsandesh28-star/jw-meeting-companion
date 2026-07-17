import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { passcodeService } from "../../security/passcodeService";

interface UnlockWorkspaceProps {
  onSuccess: () => void;
}

export default function UnlockWorkspace({
  onSuccess,
}: UnlockWorkspaceProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUnlock = async () => {
    setError("");

    if (!passcode.trim()) {
      setError("Please enter your passcode.");
      return;
    }

    try {
      setLoading(true);

      const unlocked = await passcodeService.unlock(passcode);

      if (!unlocked) {
        setError("Incorrect passcode.");
        return;
      }

      onSuccess();
    } catch {
      setError("Unable to unlock secure workspace.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={2}
    >
      <Card sx={{ width: 420, maxWidth: "100%" }}>
        <CardContent>
          <Stack spacing={3}>
            <Typography variant="h5" align="center">
              Secure Elder Workspace
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
            >
              Enter your passcode to continue.
            </Typography>

            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <TextField
              label="Passcode"
              type="password"
              fullWidth
              autoFocus
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUnlock();
                }
              }}
            />

            <Button
              variant="contained"
              size="large"
              disabled={loading}
              onClick={handleUnlock}
            >
              {loading ? "Unlocking..." : "Unlock Workspace"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}