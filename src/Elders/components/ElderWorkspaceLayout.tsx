import { ReactNode } from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { passcodeService } from "../../security/passcodeService";

interface ElderWorkspaceLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ElderWorkspaceLayout({
  title,
  subtitle,
  children,
}: ElderWorkspaceLayoutProps) {
  const handleLock = () => {
    passcodeService.lock();
    window.location.reload();
  };

  return (
    <Box sx={{ height: "calc(100vh - 120px)" }}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          height: "100%",
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        {/* Sidebar */}

        <Box
          sx={{
            width: 250,
            borderRight: 1,
            borderColor: "divider",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Elder Workspace
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mb={3}
          >
            Secure Congregation Tools
          </Typography>

          <Stack spacing={1}>
            <Button fullWidth variant="contained">
              Dashboard
            </Button>

            <Button fullWidth>Secretary</Button>

            <Button fullWidth>CBOE</Button>

            <Button fullWidth>Service Overseer</Button>

            <Button fullWidth>Service Committee</Button>

            <Button fullWidth>Publisher Cards</Button>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Divider sx={{ my: 2 }} />

          <Button
            color="error"
            variant="outlined"
            onClick={handleLock}
          >
            🔒 Lock Workspace
          </Button>
        </Box>

        {/* Main Content */}

        <Box
          sx={{
            flex: 1,
            p: 4,
            overflowY: "auto",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>

          {subtitle && (
            <Typography
              color="text.secondary"
              mb={4}
            >
              {subtitle}
            </Typography>
          )}

          {children}
        </Box>
      </Paper>
    </Box>
  );
}