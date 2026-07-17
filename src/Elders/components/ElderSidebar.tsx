import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { passcodeService } from "../../security/passcodeService";
import { ElderModule } from "../models/ElderModule";

interface ElderSidebarProps {
  selected: ElderModule;
  onSelect: (module: ElderModule) => void;
}

const menuItems: {
  label: string;
  value: ElderModule;
}[] = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Secretary", value: "secretary" },
  { label: "CBOE", value: "cboe" },
  { label: "Service Overseer", value: "serviceOverseer" },
  { label: "Service Committee", value: "serviceCommittee" },
  { label: "Publisher Cards", value: "publishers" },
];

export default function ElderSidebar({
  selected,
  onSelect,
}: ElderSidebarProps) {
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        p: 2,
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="h6">
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
        {menuItems.map((item) => (
          <Button
            key={item.value}
            fullWidth
            variant={
              selected === item.value
                ? "contained"
                : "text"
            }
            onClick={() => onSelect(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ my: 2 }} />

      <Button
        color="error"
        variant="outlined"
        onClick={() => {
          passcodeService.lock();
          window.location.reload();
        }}
      >
        🔒 Lock Workspace
      </Button>
    </Box>
  );
}