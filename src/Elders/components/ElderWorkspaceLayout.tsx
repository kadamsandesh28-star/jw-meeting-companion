import { ReactNode } from "react";
import {
  Box,
  Button,
  Paper,
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
          flexDirection: "column",
          height: "100%",
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        {/* Header */}

        <Box
          sx={{
            px: 4,
            py: 3,
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4">
              {title}
            </Typography>

            {subtitle && (
              <Typography color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>

          <Button
            color="error"
            variant="outlined"
            onClick={handleLock}
          >
            🔒 Lock Workspace
          </Button>
        </Box>

        {/* Content */}

        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            p: 4,
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}